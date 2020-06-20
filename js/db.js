const dbPromised = idb.open('football', 1, upgradeDb => {
    const timObjectStore = upgradeDb.createObjectStore('team', {keyPath: 'id'});
    const playerObjectStore = upgradeDb.createObjectStore('player', {keyPath: 'id'});
    timObjectStore.createIndex('team_name', 'team_name', {unique: false});
    playerObjectStore.createIndex('player_name', 'player_name', {unique: false});

});

const saveForLaterTeam = team => {
    dbPromised
    .then(db => {
        const tx = db.transaction('team', 'readwrite');
        const store = tx.objectStore('team');
        store.put(team);
        return tx.complete;
    })
    .then(()=>{
        console.log('Team berhasil disimpan');
    });
};

const getTeam = (id) =>{
    return new Promise((resolve, reject)=>{
        dbPromised
        .then(db => {
            const tx = db.transaction('team','readonly');
            const store = tx.objectStore('team');
            return store.get(id);
        })
        .then(team => {
            resolve(team);
        });
    });
};

const getAllTeam = () =>{
    return new Promise((resolve, reject)=>{
        dbPromised
        .then(db => {
            const tx = db.transaction('team','readonly');
            const store = tx.objectStore('team');
            return store.getAll();
        })
        .then(teams => {
            resolve(teams);
        });
    });
};

const hapusTeam = team => {
    dbPromised
    .then(db => {
        const tx = db.transaction('team', 'readwrite');
        const store = tx.objectStore('team');
        store.delete(team);
        return tx.complete;
    })
    .then(()=>{
        console.log('Team berhasil dihapus');
    });
};




const saveForLaterPlayer = player => {
    dbPromised
    .then(db => {
        const tx = db.transaction('player', 'readwrite');
        const store = tx.objectStore('player');
        store.put(player);
        return tx.complete;
    })
    .then(()=>{
        console.log('Player berhasil disimpan');
    });
};

const getPlayer = (id) =>{
    return new Promise((resolve, reject)=>{
        dbPromised
        .then(db => {
            const tx = db.transaction('player','readonly');
            const store = tx.objectStore('player');
            return store.get(id);
        })
        .then(player => {
            resolve(player);
        });
    });
};

const getAllPlayer = () =>{
    return new Promise((resolve, reject)=>{
        dbPromised
        .then(db => {
            const tx = db.transaction('player','readonly');
            const store = tx.objectStore('player');
            return store.getAll();
        })
        .then(players => {
            resolve(players);
        });
    });
};

const hapusPlayer = player => {
    dbPromised
    .then(db => {
        const tx = db.transaction('player', 'readwrite');
        const store = tx.objectStore('player');
        store.delete(player);
        return tx.complete;
    })
    .then(()=>{
        console.log('Player berhasil dihapus');
    });
};