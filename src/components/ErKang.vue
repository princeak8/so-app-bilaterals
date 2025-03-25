<template>
    <tr :class="{redBg: powerDrop.status}">
      <td style="padding-left: 5px;">{{ sn }}</td>
      <td class="center">ER-Kang</td>
      <td class="center">{{ vals.mw }}</td>
      <td class="center"> {{ vals.mx}} </td>
      <td class="center"> {{ vals.kv }} </td>
      <td class="center" :class="connectionStatusColor"> {{(isConnected) ? 'Connected' : (isConnectionLost) ? 'Connection Lost' : 'Not Connected'}} </td>
    </tr>
  </template>
  
  <script setup lang="ts">
  
  import { ref, computed, watch } from 'vue';
  import { storeToRefs } from 'pinia'
  import { erKangStore } from '../stores/erKangStore';
  import { companyId } from "../enums"
  
      const companyStore = erKangStore();
      const { company, isConnected, isConnectionLost, powerDrop, vals } = storeToRefs(companyStore)
      const currLoad = ref();
      const prevLoad = ref();

      const props = defineProps({
        sn: Number,
        isParent: Boolean
    });
  
      const emits = defineEmits(['emitTotal', 'resetTotal']);
  
      const connectionStatusColor = computed(() => {
        return (isConnected.value) ? 'connected' : (isConnectionLost.value) ? 'connectionLost' : 'notConnected'
      })
  
      watch(() => isConnected.value, (connected) => {
        if(!connected) emits('resetTotal', company.value.id);
      })
  
      watch(vals, (currentVals) => {
        if(currentVals.mw != '' && currentVals.mw != '-') {
              prevLoad.value = currLoad.value;
              currLoad.value = currentVals.mw;
              let id = company.value?.id ? company.value.id : company.value.name;
              emits('emitTotal', id, currentVals.mw);
        }
        // if(powerDrop.value.status) emits('startAlarm');
      })
  
      
  </script>
  
  <style scoped>
  
  </style>
  