<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterLink } from "vue-router"
import { stationStore } from "./helper";
import { checkConnections, disconnect } from './connectionHelpers';
import { ref, watch, onBeforeMount, onMounted } from 'vue';

  let connected = ref(false);
  let intervalId: string | number | NodeJS.Timeout | undefined;
  let MessageReceivedTime = Math.round(new Date().getTime() / 1000);

  watch(connected, (isConnected) => {
      if(isConnected) {
          intervalId = startChecking();
      }else{
          connectionStopped();
      }
  })

  const wait = (ms: number) => {
      return new Promise((resolve) => {
          console.log(`waiting ${ms/1000}Secs to retry connection`);
          setTimeout(resolve, ms);
      })
  }

  const connect = () => {

      const ws = new WebSocket(import.meta.env.VITE_SOCKET_URL);

      ws.onmessage = async (msg) => {
          try{
              const fMsg = JSON.parse(msg.data);
              // if(fMsg.id=='odukpaniNippPs') console.log('fmsg:', fMsg);
              connected.value = true;
              if(fMsg.id && fMsg.nc) {
                let ncStation = stationStore(fMsg.id);
                ncStation.disconnected();
              }
              if(fMsg != null) {
                  // if(formattedData?.id=='dadinKowaGs') console.log('formatted data', formattedData);
                  const station = stationStore(fMsg.id);
                  // if(formattedData?.id=='dadinKowaGs') console.log('dadinkowa station', station);
                  
                  if(station != undefined) {
                    // if(formattedData?.id=='dadinKowaGs') console.log('setting station');
                      station.set(fMsg);
                  }
                  MessageReceivedTime = Math.round(new Date().getTime() / 1000);
                  checkConnections();
              }
          }catch(error){
              //
          }
      }

      ws.onerror = async (error) => {
          console.log('Web Socket Error:', error);
          // await wait(5000);
          // connect();
      }

      ws.onclose = async (event: any) => {
          console.log('Web Socket has closed.', event);
          await wait(5000);
          connect();
      }
  }

  const startChecking = () => {
    return setInterval(() => {
      // console.log('checking..');
      if(Math.abs(Math.round(new Date().getTime() / 1000) - MessageReceivedTime) > 60) {
        connectionStopped();
      }else{
        // console.log(Math.abs(Math.round(new Date().getTime() / 1000) - MessageReceivedTime));
      }
    }, 10000);
  }

  function connectionStopped () {
      connected.value = false;
      disconnect();
      clearInterval(intervalId);
      // console.log('stop checking');
  }

  onBeforeMount(async() => {
      connect();
  })

  onMounted(async() => {
      // console.log('check and update DB');
      // console.log(storage(settings.LoadDropsData));
  })
</script>

<template>
  <div style="display: flex; flex-direction: row; justify-content: flex-end;">
    <RouterLink to="/" style="margin-right: 5%;"><b>HOME</b></RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


