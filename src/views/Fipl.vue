<template>
        <tr>FIPL</tr>
        <component v-for="(company, n) in companies" :is="company" :sn="n+1" 
                    @emitTotal="getCompanyTotal" @resetTotal="resetCompanyTotal" 
        />
</template>


<script setup lang="ts">
    import { ref, computed, watch } from 'vue';

    const props = defineProps({
        companies: Array,
    });

    const emits = defineEmits(['emitTotal', 'resetTotal']);

    const companiesTotal= ref<Record<string, any>>({});

    const numberWithCommas = (x:string) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getCompanyTotal = (id: string, total: any) => {
        // console.log('id: ', id);
        // console.log('total', total);
        companiesTotal.value[id] = total;
        // console.log("companies total:", companiesTotal.value);
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

    watch(total, (currentTotal) => {
        emits('emitTotal', 'fipl', currentTotal);
    })
</script>