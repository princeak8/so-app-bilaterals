import { companyId } from "../enums";

import { aflStore } from "./aflStore";
import { kamSteelStore } from "./kamSteelStore";
import { larfargeStore } from "./larfargeStore";
import { monarchStore } from "./monarchStore";
import { pheonixStore } from "./pheonixStore";
import { pulkitSteelStore } from "./pulkitSteelStore";
import { quantumStore } from "./quantumStore";
import { starPipeStore } from "./starPipeStore";
import { sunflagStore } from "./sunflagStore";
import { topSteelStore } from "./topSteelStore";
import { kamSteelIlorinStore } from "./kamSteelIlorinStore";
import { gazaouaStore } from "./gazaouaStore";
import { innerGalaxy1Store } from "./InnerGalaxy1Store";
import { innerGalaxy2Store } from "./InnerGalaxy2Store";
import { atvlStore } from "./atvlStore";
import { psmlStore } from "./psmlStore";
import { zebercedStore } from "./zebercedStore";
import { niameyStore } from "./niameyStore";
import { kamInd33Store } from "./kamInd33Store";
import { erKangStore } from "./erKangStore";
import { oauIfeStore } from "./oauIfeStore";
import { fmpiaStore } from "./fmpiaStore";
import { ikejaWestSakateStore } from "./ikejaWestSakateStore";
import { amilStore } from "./amilStore";
import { aenlStore } from "./aenlStore";

const stores = () => {
    return {
        [companyId.AFL] : aflStore(),
        [companyId.KamSteel] : kamSteelStore(),
        [companyId.Larfarge] : larfargeStore(),
        [companyId.Monarch] : monarchStore(),
        [companyId.Pheonix] : pheonixStore(),
        [companyId.PulkitSteel] : pulkitSteelStore(),
        [companyId.Quantum] : quantumStore(),
        [companyId.StarPipe] : starPipeStore(),
        [companyId.Sunflag] : sunflagStore(),
        [companyId.TopSteel] : topSteelStore(),
        [companyId.KamSteelIlorin] : kamSteelIlorinStore(),
        [companyId.Gazaoua] : gazaouaStore(),
        [companyId.InnerGalaxy1] : innerGalaxy1Store(),
        [companyId.InnerGalaxy2] : innerGalaxy2Store(),
        [companyId.ATVL] : atvlStore(),
        [companyId.PSML] : psmlStore(),
        [companyId.Zeberced] : zebercedStore(),
        [companyId.Niamey] : niameyStore(),
        [companyId.KamInd33] : kamInd33Store(),
        [companyId.ErKang] : erKangStore(),
        [companyId.OAU_Ife] : oauIfeStore(),
        [companyId.FMPIA] : fmpiaStore(),
        [companyId.IkejaWestSakate] : ikejaWestSakateStore(),
        [companyId.AMIL] : amilStore(),
        [companyId.AENL] : aenlStore()
    };
};

export default stores;

