import { FileObject } from "./file_object";

export interface DownloadProps {
  /**
   * Download destination
   */
  downloadPath: string;
  /**
   * Uploaded file's id
   */
  fileId: string;
}

export interface FileAPI {
  url: string;

  /**
   * Upload file
   * @param file{FileObject} upload file
   * @param errorOnExist
   */
  uploadFile(file: FileObject, errorOnExist: boolean): Promise<string>;

  /**
   * Download file by providing file id
   * @param props
   */
  downloadFile(props: DownloadProps): Promise<void>;
}
