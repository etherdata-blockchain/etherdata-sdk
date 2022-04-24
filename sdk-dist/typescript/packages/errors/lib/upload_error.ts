export class UploadError extends Error {
  constructor(reason: string, errorCode?: number) {
    let outputMessage: string = `Cannot upload file due to ${reason}`;
    if (errorCode) {
      outputMessage = `Error ${errorCode}: Cannot upload file due to ${reason}`;
    }

    super(outputMessage);
  }
}
