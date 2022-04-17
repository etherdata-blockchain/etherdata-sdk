import { FileObject } from "@etherdata-blockchain/etherdata-sdk-common";

interface BrowserFileProps {
  /**
   * Upload file
   */
  file: Blob;
  /**
   * Number of days will this file be stored in our server
   */
  days: number;
}

/**
 * a Browser file object
 */
export class BrowserFileObject implements FileObject {
  file: Blob;
  days: number;

  constructor({ file, days }: BrowserFileProps) {
    this.file = file;
    this.days = days;
  }

  toUploadFile() {
    return {
      file: this.file,
      days: this.days,
    };
  }
}
