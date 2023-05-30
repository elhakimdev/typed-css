import {build} from "esbuild";
import dts from 'npm-dts';
const {Generator} = dts;
const sharedConfig = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: true,
};

new Generator({
  entry: "./src/index.ts",
  output: "dist/index.d.ts"
}).generate();

build({
  ...sharedConfig,
  outfile: "dist/index.js",
  platform: "node",
  format: "cjs"
});
build({
  ...sharedConfig,
  outfile: "dist/index.esm.js",
  platform: "neutral",
  format: "esm"
});