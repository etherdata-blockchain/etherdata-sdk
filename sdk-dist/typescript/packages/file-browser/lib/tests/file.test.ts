//@ts-ignore
import nock from "nock";
import { StatusCodes } from "http-status-codes";
import {
  FileUploadResponse,
  URL,
} from "@etherdata-blockchain/etherdata-sdk-common";
import { BrowserFile } from "../file";
import { BrowserFileObject } from "../file_object";

describe("Given a browser file api", () => {
  let fileAPI: BrowserFile;
  const url = "http://localhost:5000";

  beforeEach(() => {
    fileAPI = new BrowserFile(url);
  });

  test("When calling upload", async () => {
    const resp: FileUploadResponse = {
      code: 0,
      data: { afid: "mock_id", isExist: false },
      msg: "",
    };
    nock(url).post(URL.upload).reply(StatusCodes.OK, resp);
    const fileObj = new BrowserFileObject({
      days: 2,
      file: new File([""], "mockfile", { type: "text/html" }),
    });
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
    const fileObj = new BrowserFileObject({
      days: 2,
      file: new File([""], "mockfile", { type: "text/html" }),
    });
    await expect(() => fileAPI.uploadFile(fileObj, true)).rejects.toThrow(
      Error
    );
  });

  test("When calling get file content", async () => {
    nock(url)
      .get(`${URL.download}/mock_id`)
      .replyWithFile(StatusCodes.OK, "readme.md", {
        "Content-Type": "application/json",
      });
    const data = await fileAPI.getFileContent({
      fileId: "mock_id",
    });
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
  });
});
