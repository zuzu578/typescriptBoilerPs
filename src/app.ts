import initMysql from "./utils/mysql";

initMysql().then(async () => {
  import("./server");
});
