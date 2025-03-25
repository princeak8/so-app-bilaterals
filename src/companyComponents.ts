//Other
import Afl from "./components/Afl.vue";
import Larfarge from "./components/Larfarge.vue";
import Monarch from "./components/Monarch.vue";
import StarPipe from "./components/StarPipe.vue";
import TopSteel from "./components/TopSteel.vue";

 //NDPHC
 import PulkitSteel from "./components/PulkitSteel.vue";
 import Sunflag from "./components/Sunflag.vue";
 import Pheonix from "./components/Pheonix.vue";

// TAOPEX
import KamSteelIlorin from "./components/KamSteelIlorin.vue";
import ErKang from "./components/ErKang.vue";
import KamSteel from "./components/KamSteel.vue";

//MESL
import Quantum from "./components/Quantum.vue";
import Gazaoua from "./components/Gazaoua.vue";
import InnerGalaxy1 from "./components/InnerGalaxy1.vue";
import InnerGalaxy2 from "./components/InnerGalaxy2.vue";
import Atvl from "./components/Atvl.vue";
import Psml from "./components/Psml.vue";
import Zeberced from "./components/Zeberced.vue";
import Niamey from "./components/Niamey.vue";
import KamInd33 from "./components/KamInd33.vue";

//FIPL
import OauIfe from "./components/OauIfe.vue";
import Fmpia from "./components/Fmpia.vue";

export default [
        {
                name: "NDPHC",
                companies: [PulkitSteel, Sunflag, Pheonix]
        },
        {
                name: "TAOPEX",
                companies: [KamSteelIlorin, ErKang, KamSteel]
        },
        {
                name: "MAIN STREAM",
                companies: [Quantum, Gazaoua, InnerGalaxy1, InnerGalaxy2, Atvl, Psml, Zeberced, Niamey, KamInd33]
        },
        {
                name: "FIPL",
                companies: [OauIfe, Fmpia]
        },
        {
                name: "Others",
                companies: [Afl, Larfarge, Monarch, StarPipe, TopSteel]
        },
];

// export default [

//     Afl, KamSteel, Larfarge, Monarch, Pheonix, PulkitSteel, Quantum, StarPipe, Sunflag, TopSteel, KamSteelIlorin,
//     Gazaoua, InnerGalaxy1, InnerGalaxy2, Atvl, Psml, Zeberced, Niamey, KamInd33, ErKang, OauIfe, Fmpia
// ]