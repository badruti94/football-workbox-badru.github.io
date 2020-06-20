$(document).ready(() => {
    getAllTeam().then(teams => {
        teams.forEach(team => {
            const el = `<a href="detail_tim.html?id=${team.id}&fav=true" class="collection-item"><span id="${team.id}" class="hapus-team new badge red" data-badge-caption="">hapus</span>${team.name}</a>`;
            $('#tim').append(el);
        });
    }).then(() => {
        $('.hapus-team').click((e) => {
            e.preventDefault();
            const id =e.target.getAttribute('id');
            hapusTeam(id);
            location.reload();
        });
    });
    getAllPlayer().then(players => {
        players.forEach(player => {
            const el = `<a href="pemain.html?id=${player.id}&fav=true" class="collection-item"><span id="${player.id}" class="hapus-player new badge red" data-badge-caption="">hapus</span>${player.name}</a>`;
            $('#pemain').append(el);
        });
    }).then(()=>{
        $('.hapus-player').click((e)=>{
            e.preventDefault();
            const id = e.target.getAttribute('id');
            hapusPlayer(id);
            location.reload();
        });
    });

    getTeam('64').then(team => {
        console.log(team);
    });


});