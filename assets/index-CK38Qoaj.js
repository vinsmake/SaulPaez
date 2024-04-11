function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-XVimH92t.js","assets/index-DiqfMrMJ.js","assets/index-DH6w6WUs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DiqfMrMJ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-XVimH92t.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
