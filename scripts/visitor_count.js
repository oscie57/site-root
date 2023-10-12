fetch('https://api.oscie.net/views?site=oscie.net')

    .then(resp => resp.json())
    .then(resp => {
        var count = resp['oscie.net'].toString();
        var zeroes = '';

        if (count.length == 0) {
            zeroes = '00000';
        } else if (count.length == 1) {
            zeroes = '0000';
        } else if (count.length == 2) {
            zeroes = '000';
        } else if (count.length == 3) {
            zeroes = '00';
        } else if (count.length == 4) {
            zeroes = '0';
        } else if (count.length == 5) {
             zeroes = '';
        }

        document.getElementById('count').innerHTML = '<span id="greycount">' + zeroes + '</span>' + count;

})