function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DTQAVGL3.js","assets/index-DMowecw-.js","assets/index-wJyvzB7O.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DMowecw-.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DTQAVGL3.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
