declare module 'typed-css/index' {
  const initialFunction: () => void;

}
declare module 'typed-css' {
  import main = require('typed-css/src/index');
  export = main;
}