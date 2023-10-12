    fetch('https://api.oscie.net/views')
        .then(resp => resp.json())
        .then(resp => {
                document.getElementById('viewcount').innerHTML = resp
    })