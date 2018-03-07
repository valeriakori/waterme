//Returns data from pflanzen.json
function getData() {
    
    let resolvePromise = new Promise(
        function (resolve, reject) {
            
            let xhttp = new XMLHttpRequest(),
                method = "GET",
                url = "pflanzen.json";
            xhttp.open(method, url, true);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    resolve(xhttp.responseText);
                } else {
                    reject('Error');
                }
            }
            xhttp.send();
        }
    );
    console.log('test getdata', resolvePromise);
    return resolvePromise;

}
