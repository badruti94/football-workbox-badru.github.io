$(document).ready(() => {
    
    $.ajax({
        url: 'https://api.football-data.org/v2/competitions/2021/standings',
        beforeSend: xhr => {
            xhr.setRequestHeader('X-Auth-Token', 'b8f7df6699b4420c99dd6840e3561522');
        },
        success: data => {
            isiDataTim(data.standings[0].table);
        }
    });

    function isiDataTim(data) {
        data.forEach(dt => {
            const tim = dt.team;
            const el = `<a href="detail_tim.html?id=${tim.id}" class="collection-item">${tim.name}</a>`;
            $('.collection').append(el);
        });
    }
});