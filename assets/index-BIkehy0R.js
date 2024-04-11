function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-JkNH-JJk.js","assets/index-DiqfMrMJ.js","assets/index-DH6w6WUs.css","assets/index-aFbbzWab.js","assets/index-gtnwRAVH.js","assets/index-CJc_OYgE.js","assets/index-CxtR88ON.js","assets/index-jySuyYAp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DiqfMrMJ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-JkNH-JJk.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-aFbbzWab.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-gtnwRAVH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CJc_OYgE.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CxtR88ON.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-jySuyYAp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
