const delay = ms => {
    return new Promise(r=>setTimeout(()=>r(), ms))
}
const url ='https://jsonplaceholder.typicode.com/todos';

async function fetchAsyncTodos(){
    console.log('Fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    } finally {

    }
}
fetchAsyncTodos()