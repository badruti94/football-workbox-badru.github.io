$(document).ready(()=>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    let nama = '';
    
    isFromFav = params.get('fav');
    if(isFromFav){
        $('#save').css('display','none');
    }

    $.ajax({
        url :`https://api.football-data.org/v2/teams/${id}`,
        beforeSend : xhr => {
            xhr.setRequestHeader('X-Auth-Token','b8f7df6699b4420c99dd6840e3561522');
        },
        success: data => {
            isiData(data);
            nama = data.name;
        }
    });

    function isiData(data){
        const el = `
                    <table class="striped">
                        <tr>
                            <td width="180">Nama</td>
                            <td> : </td>
                            <td>${data.name}</td>
                        </tr>
                        <tr>
                            <td>Nama Pendek</td>
                            <td> : </td>
                            <td>${data.shortName}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td> : </td>
                            <td>${data.address}</td>
                        </tr>
                        <tr>
                            <td>Didirikan</td>
                            <td> : </td>
                            <td>${data.founded}</td>
                        </tr>
                    </table>
        `;
        $('#tim').append(el);

        data.squad.forEach(dt => {
            const elSquad = `<a href="pemain.html?id=${dt.id}" class="collection-item">${dt.name}</a>`;
            $('#squad').append(elSquad);
        });
        
    }

    $('#save').click(()=>{
        saveForLaterTeam({
            id: id,
            name: nama
        });
        $('.fixed-action-btn').css('display','none');
    });

    getTeam(id).then((team)=>{
        if(team){
            $('.fixed-action-btn').css('display','none');
        }else{
            $('.fixed-action-btn').css('display','');
        }
    });
});