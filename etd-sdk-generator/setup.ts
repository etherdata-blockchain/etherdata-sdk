import Downloader from "nodejs-file-downloader";
import cliProgress from "cli-progress";

(async () => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(100, 0);
  const url =
    "https://repo1.maven.org/maven2/com/facebook/ktfmt/0.34/ktfmt-0.34-jar-with-dependencies.jar";
  const downloader = new Downloader({
    url: url,
    directory: "./",
    fileName: "ktfmt.jar",
    cloneFiles: false,
    onProgress(percentage: string, chunk: object, remaningSize: number) {
      bar.update(parseFloat(percentage));
    },
  });

  await downloader.download();
  bar.stop();
})();
