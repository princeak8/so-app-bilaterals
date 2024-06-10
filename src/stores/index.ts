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
        [companyId.TopSteel] : topSteelStore()
    };
};

export default stores;

