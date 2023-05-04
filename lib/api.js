export async function fetcher(url, options = {}) {
    console.log({url});
    let response;
    if (!options) {
        response = fetch(url);
    } else {
        response = fetch(url, options);
    }
    console.log({response});
    const data = await response.json();
    return data;
}