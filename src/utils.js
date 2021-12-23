//to get id from url
export function getIdFromUrl(url){
    const params = new URL(url)
    return params.pathname.split('/');
}
