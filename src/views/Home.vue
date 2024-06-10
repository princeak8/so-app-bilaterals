<template>
    <!-- <TheWelcome /> -->
    <div class="content-container">
        <h1 style="color: #355E3B; font-weight: bold;">BILATERAL LOAD OFF-TAKERS</h1>

        <h1 style="margin:2px; padding: 0; display: flex; flex-direction: row; justify-content: space-between;">
            <!-- <b>Companies</b> -->
            <b>Total: {{ total.toLocaleString('en-US') }}MW</b>
        </h1>

        <table border="1" class="table table-bordered" style="width: 100%; font-weight: bold;">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Station</th>
                    <th>Power(MW)</th>
                    <th>REACTIVE POWER (MVar)</th>
                    <th>VOLTAGE (kV)</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                <!-- <component :is="AfamIV" :sn="1" @emitTotal="getStationTotal" />
                <component :is="AfamV" :sn="2" @emitTotal="getStationTotal" /> -->
                <component v-for="(company, n) in companyComponents" :is="company" :sn="n+1" 
                    @emitTotal="getCompanyTotal" @resetTotal="resetCompanyTotal" 
                />
                Total: {{ total.toLocaleString('en-US') }}MW
            </tbody>
        </table>
    </div>
</template>


<script setup lang="ts">
    import { ref, computed } from 'vue';
    import companyComponents from "../companyComponents";
    import axios from "axios";
    import { inStorage, storage, putInStorage } from "../localStorage";

    const companiesTotal= ref<Record<string, any>>({});
    const alarm = ref<HTMLAudioElement | null>(null);

    const numberWithCommas = (x:string) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getCompanyTotal = (id: string, total: any) => {
        // console.log('id: ', id);
        // console.log('total', total);
        companiesTotal.value[id] = total;
    }

    const resetCompanyTotal = (id: string) => {
        companiesTotal.value[id] = 0;
    }

    const total = computed(() => {
        // console.log()
        if(companiesTotal.value != undefined) {
            // console.log(Object.values(companiesTotal.value));
            // return 0
            let t = Object.values(companiesTotal.value).reduce((total, curr) => total + parseFloat(curr.toString()), 0);
            return numberWithCommas(t.toFixed(2));
        }
        return 0;
    })
</script>