function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-0Wz0e7kq.js","assets/index-DiqfMrMJ.js","assets/index-DH6w6WUs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DiqfMrMJ.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-0Wz0e7kq.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
