import fs from "fs";
import { FileObject } from "./file_object";

interface Props {
  /**
   * Upload file's path
   */
  filePath?: string;
  /**
   * File's content
   */
  fileObject?: fs.ReadStream;
  /**
   * Number of days will this file be stored
   */
  days: number;
}

export class NodeFileObject implements FileObject {
  file: fs.ReadStream | undefined | any;
  days: number;

  constructor({ fileObject, filePath, days }: Props) {
    if (filePath === undefined && fileObject === undefined) {
      throw new Error(
        "You need to provide either a file path or a file object"
      );
    }

    this.days = days;

    if (filePath) {
      if (!fs.existsSync(filePath)) {
        throw new Error(`${filePath} doesn't exist`);
      }
      this.file = fs.createReadStream(filePath);
      return;
    }

    if (fileObject) {
      this.file = fileObject;
    }
  }

  toUploadFile() {
    return {
      file: this.file,
      days: this.days,
    };
  }
}
