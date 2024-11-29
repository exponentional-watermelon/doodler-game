const url = 'https://ef9e-2a00-1fa0-4f8-25df-b453-580b-6d6a-e816.ngrok-free.app';

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
