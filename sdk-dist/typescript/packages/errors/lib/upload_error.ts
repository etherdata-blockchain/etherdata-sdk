export class UploadError extends Error {
  constructor(message: string, errorCode: number, reason: string) {
    const outputMessage = `Error ${errorCode}: Cannot upload file due to ${reason}`;
    super(outputMessage);
  }
}
