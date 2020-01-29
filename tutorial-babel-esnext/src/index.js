import '@babel/polyfill';
import {Hello} from './sub';

const message = 'Hello World';

init();
async function init(){
  // sub.jsに定義されたJavaScriptを実行する。
  const moduleSub = await import("./sub");
  console.log("💗ES2020 - ダイナミックインポート")
  const instance = new moduleSub.Hello();
  instance.say(message);
}
