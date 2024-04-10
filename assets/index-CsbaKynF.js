function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D_MruSEi.js","assets/index-DMowecw-.js","assets/index-wJyvzB7O.css","assets/index-BpOBl7xg.js","assets/index-CElqfEn7.js","assets/index-OhPkgrEj.js","assets/index-D7cQNpid.js","assets/index-DN_v9XCI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DMowecw-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D_MruSEi.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BpOBl7xg.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CElqfEn7.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-OhPkgrEj.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D7cQNpid.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DN_v9XCI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
