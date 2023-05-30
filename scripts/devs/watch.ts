import * as esbuild from "esbuild";
import {watch} from "chokidar";

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
  try {
    const timeStart = Date.now();
    
    await esbuild.context({})
    
  } catch (error) {
    
  }
}
