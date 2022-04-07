export interface FileUploadResponse {
  code: number;
  msg: string;
  data: {
    afid: string;
    isExist: boolean;
  };
}
