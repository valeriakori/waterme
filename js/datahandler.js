//Returns data from pflanzen.json
function getData(backendurl) {

    let resolvePromise = new Promise(
        function (resolve, reject) {

            let xhttp = new XMLHttpRequest(),
                method = "GET",
                url = backendurl + 'pflanzen.json';
            xhttp.open(method, url, true);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 ) {
                  if (xhttp.status == 200){
                    let plants = JSON.parse(xhttp.responseText);
                    resolve(plants);
                  } else {
                    reject("Server answered with: " + xhttp.status);
                  }

                }
            }
            xhttp.send();
        }
    );
    return resolvePromise;

}
