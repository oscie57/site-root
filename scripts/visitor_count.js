function openFile() {
    const reader = new FileReader();
    reader.onload = function() {
        const contents = reader.result;
        console.log(contents); // Do something with the contents of the file
    };
    reader.readAsText('latest_commit.js');
}

openFile()