const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", () =>{
    downloadBtn.innerText = "Download File...";
      fetchFile(fileInput.value);
});

function fetchFile(url) {
    //fetching file & return blob

    fetch(url).then(res => res.blob()).then(file => {
        let temUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = temUrl;                                  //passing temUrl as herf value of "a" tag 
        aTag.download = url.replace(/^.*[\\\/]/, '');        //passing file lastname and extenstion as download value of "a" tab
        document.body.appendChild(aTag);                     // adding "a" tag inside body
        aTag.click();                                        //clicking "a" tag the file downlooad 
        aTag.remove();                                       //removing "a" tag once file downloaded
        URL.revokeObjectURL(temUrl);
        downloadBtn.innerText = "Download File"
    }).catch(() =>{
        downloadBtn.innerText = "Download File";
        alert("Downloading Error!");
    });
} 