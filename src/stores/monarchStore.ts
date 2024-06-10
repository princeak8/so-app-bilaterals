import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import { type dataType, type sectionType, type stationType, type powerDropType } from "../types";
import { initializeStation, currentTime, getPower, getMvar, getVoltage } from "../helper";
import { companyId } from "../enums"
import { values, getAverage } from "../utilities";

const storeId = companyId.Monarch;

export const monarchStore = defineStore(storeId, () => {
    const monarch = ref(initializeStation(companyId.Monarch));

    const connected = ref(false);
    const connectionLost = ref(false);
    const lastConnectedTime = ref(); 

    const mw = ref();
    const mx = ref();
    const kv = ref();

    const currPower = ref(0);
    const prevPower = ref(0);

    const powerDrop = ref<powerDropType>({
        drop: 0, status: false, percentage: 0
    })

    function set (data: stationType) {
        monarch.value = {...data};
        mw.value = getPower(data.sections, true);
        mx.value = getMvar(data.sections, true);
        kv.value = getVoltage(data.sections);

        prevPower.value = currPower.value;
        currPower.value = mw.value.pwr;
        
        connect();
        lastConnectedTime.value = Math.round(new Date().getTime() / 1000);
    }

    function disconnected () {
        connected.value = false;
        connectionLost.value = true;
    }

    function connect () {
        connected.value = true;
    }

    //Checks that the last time since the station's value was updated has not exceeded the max update time
    function checkConnection () {
        if(lastConnectedTime.value != undefined) {
            if(Math.abs(currentTime() - lastConnectedTime.value) >= import.meta.env.VITE_MAX_NO_UPDATE_TIME) disconnected();
        }else{
            if(connected.value) disconnected();
        }
    }

    const company = computed(() => monarch.value)
    const isConnected = computed(() => connected.value);
    const isConnectionLost = computed(() => connectionLost.value);
    const lastConnected = computed(() => lastConnectedTime.value);
    const vals = computed(() => values(mw.value, mx.value, kv.value));
    const prevLoad = computed(() => prevPower.value);
    const timeSinceLastConnection = computed(() => {
        return (lastConnectedTime.value != undefined) ? Math.abs((currentTime() - lastConnectedTime.value)) : false;
    })

  return { 
            company, isConnected, isConnectionLost, lastConnected, powerDrop, vals, prevLoad,
            set, disconnected, connect, checkConnection
        }
})
