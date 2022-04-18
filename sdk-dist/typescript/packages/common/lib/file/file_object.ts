interface UploadFileObject {
  file: any;
  days: number;
}

export interface FileObject {
  file: any;
  days: number;

  /**
   * Convert object to an upload file object
   */
  toUploadFile(): UploadFileObject;
}
