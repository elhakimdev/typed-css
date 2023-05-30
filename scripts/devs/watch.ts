import * as esbuild from "esbuild";
import { watch } from "fs";
import { watch as chokidarWatcher } from 'chokidar'

const noop = () => {

}
const updateStdLineOutput = (input: string, isBuildInput: boolean = false) => {
  const numberOfLines = (input.match(/\n/g) || []).length;
  process.stdout.cursorTo(0, isBuildInput ? 2 : undefined);
  process.stdout.clearScreenDown();
  process.stdout.write(input);
  isBuildInput ? process.stdout.moveCursor(0, -numberOfLines) :  noop();
}


const watchBuild = async () => {
  const context = esbuild.context({
    color: true,
    entryPoints: [".//src/index.ts"],
    outfile: "/dist/index.js",
    minify: true,
    bundle: true,
    sourcemap: true,
    tsconfig: "/tsconfig.json",
    platform: "node",
    logLevel: "error"
  })
  try {
    const timeStart = Date.now();

    (await context).watch()

    const timeEnd = Date.now();

    updateStdLineOutput(`Build in ${timeEnd - timeStart}ms `, true)
    
  } catch (error) {
    updateStdLineOutput(`Error ${error} `);
  } finally {
  }
}

const watcher = chokidarWatcher("./../../src/**/*.ts");
console.log("Watching file .......");
watchBuild();
watcher.on("change", () => {
  watchBuild();
})
