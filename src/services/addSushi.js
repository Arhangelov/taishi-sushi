const url = `http://localhost:5001/`

export const addSushi = (sushiData) => {
    return fetch(url + 'add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sushiData)
    }).then(res => res.json())
}

export const getSushi = ( sushiData) => {
    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sushiData)
    }).then(res => res.json())
}