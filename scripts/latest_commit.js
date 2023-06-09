fetch('https://api.github.com/repos/oscie57/oscie57.github.io/commits?per_page=1')
.then(resp => resp.json())
.then(resp => {
    console.log(resp)
    
    document.getElementById('commit-author').innerHTML = resp[0].commit.committer.name
    document.getElementById('commit-message').innerHTML = resp[0].commit.message
    document.getElementById('commit-link').href = resp[0].parents[0].html_url
    document.getElementById('commit-id').innerHTML = resp[0].sha.slice(0, 6)
    document.getElementById('commit-date').innerHTML = resp[0].commit.committer.date.replace("-", "/").replace("-", "/").replace("T", ", ").replace("Z", " UTC")
})