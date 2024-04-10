function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BN19GAq6.js","assets/index-BkxOJicB.js","assets/index-wJyvzB7O.css","assets/index-sxmbXjcF.js","assets/index-Bfjtl_Vc.js","assets/index-C0DFRnmm.js","assets/index-B0qeUc13.js","assets/index-USQ95pT1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BkxOJicB.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BN19GAq6.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-sxmbXjcF.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bfjtl_Vc.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C0DFRnmm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B0qeUc13.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-USQ95pT1.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
