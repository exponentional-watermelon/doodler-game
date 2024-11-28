const url = 'https://3d29-85-198-104-83.ngrok-free.app';

async function makeResponse(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function getResult(word, img) {
    const data = {
        'word': word,
        'img': img
    }
    return await makeResponse(url, data);
}