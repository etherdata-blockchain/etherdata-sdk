import { file, FileUploadResponse } from "../lib";
//@ts-ignore
import nock from "nock";
import { URL } from "../lib/const/url";
import { StatusCodes } from "http-status-codes";

describe("Given a node file api", () => {
  let fileAPI: file.FileAPI;
  const url = "http://localhost:5000";

  beforeEach(() => {
    fileAPI = new file.NodeFile(url);
  });

  test("When calling upload", async () => {
    const resp: FileUploadResponse = {
      code: 0,
      data: { afid: "mock_id", isExist: false },
      msg: "",
    };
    nock(url).post(URL.upload).reply(StatusCodes.OK, resp);
    const fileObj = new file.NodeFileObject({ days: 2, filePath: "readme.md" });
    const result = await fileAPI.uploadFile(fileObj, false);
    expect(result).toBe("mock_id");
  });

  test("When calling upload with error", async () => {
    const resp: FileUploadResponse = {
      code: 0,
      data: { afid: "mock_id", isExist: true },
      msg: "",
    };
    nock(url).post(URL.upload).reply(StatusCodes.OK, resp);
    const fileObj = new file.NodeFileObject({ days: 2, filePath: "readme.md" });
    await expect(() => fileAPI.uploadFile(fileObj, true)).rejects.toThrow(
      Error
    );
  });

  test("When calling download", async () => {
    nock(url)
      .get(`${URL.download}/mock_id`)
      .replyWithFile(StatusCodes.OK, "mock.data", {
        "Content-Type": "application/json",
      });
    await fileAPI.downloadFile({
      fileId: "mock_id",
      downloadPath: "./mock.data",
    });
  });
});
