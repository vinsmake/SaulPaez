function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Dmri5zOi.js","assets/index-DiqfMrMJ.js","assets/index-DH6w6WUs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DiqfMrMJ.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Dmri5zOi.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};