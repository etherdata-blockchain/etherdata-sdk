import { ReactUIGenerator } from "./sdk-generator/generators/reactUIGenerator";
import { TypeScriptGenerator } from "./sdk-generator/generators/typescriptGenerator";

let filePaths = [
  "../../../sdk/admin.yml",
  "../../../sdk/clique.yml",
  "../../../sdk/debug.yml",
  "../../../sdk/etd.yml",
  "../../../sdk/personal.yml",
  "../../../sdk/real-time.yml",
  "../../../sdk/txpool.yml",
  "../../../sdk/json_rpc.yml",
  "../../../sdk/json_rpc_methods.yml",
  "../../../sdk/miner.yml",
];

let outputPaths = [
  "../../../sdk-dist/typescript/lib",
  "../../../sdk-dist/etd-react-ui/src",
];

let generators = [
  new TypeScriptGenerator(),
  new ReactUIGenerator(),
];

(async () => {
  let index = 0;
  for (let generator of generators) {
    await generator.read(filePaths).toCode(outputPaths[index]);
    index += 1;
  }
})();
