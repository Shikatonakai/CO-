import { Core } from "webtalekit-alpha/src/core/";
import Config from "../engineConfig.json";
// coreをインスタンス化する
window.onload = function () {
  const game = new Core();
  game.setConfig(Config);
  game.start();
};
