import { DownloadProps, FileAPI } from "../file/file_api";
import FormData from "form-data";
import urlJoin from "url-join";
import { URL } from "../const/url";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { FileUploadResponse } from "../types";
import { BrowserFileObject } from "./browser_file_object";
import JSFileDownloader from "js-file-downloader";

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
    const downloader = new JSFileDownloader({
      url: reqURL,
      filename: downloadPath,
    });
    await downloader;
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
    const formData = new FormData();
    const uploadObject = file.toUploadFile();
    formData.append("file", uploadObject.file);
    formData.append("days", uploadObject.days);
    const reqURL = urlJoin(this.url, URL.upload);
    const request = await axios.post<FileUploadResponse>(reqURL, formData, {
      headers: { ...formData.getHeaders() },
    });

    if (request.status === StatusCodes.OK) {
      if (request.data.data.isExist && errorOnExist) {
        throw new Error("This file already exist");
      }
      return request.data.data.afid;
    }
    throw new Error(`Server returns a not ok status ${request.status}`);
  }
}
