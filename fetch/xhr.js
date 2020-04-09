const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body){
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400){
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }   
        }
        
        xhr.onerror = () => {
            reject(xhr.response);
        }
        //xhr.send(body)
       xhr.send(JSON.stringify(body));
    })    
}
/* sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
 */

const body = {
    name: 'alex',
    age: 34
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))