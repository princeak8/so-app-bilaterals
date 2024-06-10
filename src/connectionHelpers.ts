import stores from "./stores";

export const checkConnections = () => {
    // console.log('checking connections');
    const allStores = stores();
    Object.values(allStores).forEach((stationStore) => {
        // console.log('station store: ', stationStore.$id);
        stationStore.checkConnection();
    })
}

export const disconnect = () => {
    const allStores = stores();
    Object.values(allStores).forEach((stationStore) => {
        stationStore.disconnected();
    })
}