const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body){
    return fetch(url)    
}

 sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
 

const body = {
    name: 'alex',
    age: 34
}

/* sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err)) */