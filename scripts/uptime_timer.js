const API_KEY = "m794027990-858e103196b5a06b1b4f1999"; // API key for Website on UptimeRobot
/* 0 = paused
1 = not checked yet
2 = up
8 = seems down
9 = down
fetch(`https://api.uptimerobot.com/v2/getMonitors?api_key=${API_KEY}&format=json`, {method: 'POST'})
    .then(resp => resp.json())
    .then(resp => {
        if (resp.monitors[0].status == 2) {
            document.getElementById('uptime').innerHTML = "Up";
        }
        console.log(resp.monitors[0].logs[0].type)
    })*/
    document.getElementById('uptime').innerHTML = "100";