import { DownloadProps, FileAPI } from "./file_api";
import FormData from "form-data";
import urlJoin from "url-join";
import { URL } from "../const/url";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { FileUploadResponse } from "../types";
import { NodeFileObject } from "./node_file_object";
import fs from "fs";

function sleep(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(undefined), timeout);
  });
}

/**
 * Node js file api
 */
export class NodeFile implements FileAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async downloadFile({ fileId, downloadPath }: DownloadProps): Promise<void> {
    const reqURL = urlJoin(this.url, URL.download, fileId);
    fs.openSync(downloadPath, "w");
    const fileWriter = fs.createWriteStream(downloadPath);
    const response = await axios.get(reqURL, { responseType: "stream" });
    response.data.pipe(fileWriter);
  }

  async uploadFile(
    file: NodeFileObject,
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
