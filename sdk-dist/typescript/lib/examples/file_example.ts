import { NodeFile, NodeFileObject } from "../file";

export async function uploadFile() {
  const fileAPI = new NodeFile(process.env.URL!);
  const file = new NodeFileObject({ filePath: "readme.md", days: 3 });
  const id = await fileAPI.uploadFile(file);
  return id;
}

export async function downloadFile(id: string) {
  const fileAPI = new NodeFile(process.env.URL!);
  await fileAPI.downloadFile({ fileId: id, downloadPath: "./test.md" });
  console.log(id);
}

(async () => {
  const id = await uploadFile();
  await downloadFile(id);
})();
