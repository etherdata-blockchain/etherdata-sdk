import urlJoin from "url-join";
import axios from "axios";
import { StatusCodes } from "http-status-codes";

import { BrowserFileObject } from "./file_object";
import {
  DownloadProps,
  FileAPI,
  FileUploadResponse,
  URL,
} from "@etherdata-blockchain/etherdata-sdk-common";
import FileSaver from "file-saver";
import { UploadError } from "@etherdata-blockchain/etherdata-sdk-errors";

/**
 * Create a browser file object
 */
export class BrowserFile implements FileAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async downloadFile({ fileId, downloadPath }: DownloadProps): Promise<void> {
    const reqURL = urlJoin(this.url, URL.download, fileId);
    const response = await axios.get(reqURL);
    FileSaver.saveAs(response.data, downloadPath);
  }

  /**
   * Upload a file to the endpoint
   * @param file {NodeFileObject} A file object
   * @param errorOnExist Will throw error if the file has been uploaded already
   */
  async uploadFile(
    file: BrowserFileObject,
    errorOnExist: boolean = false
  ): Promise<string> {
    try {
      const formData = new FormData();
      const uploadObject = file.toUploadFile();
      formData.append("file", uploadObject.file);
      formData.append("days", `${file.days}`);
      const reqURL = urlJoin(this.url, URL.upload);
      const response = await axios.post<FileUploadResponse>(reqURL, formData);

      if (response.status === StatusCodes.OK) {
        if (response.data.data.isExist && errorOnExist) {
          throw new UploadError("File already exists");
        }
        return response.data.data.afid;
      }
      return response.data.data.afid;
    } catch (err: any) {
      throw new UploadError(err.response?.message, err.response?.status);
    }
  }
}
