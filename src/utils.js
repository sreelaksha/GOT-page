//to get id from url
export function getIdFromUrl(url){
    if(typeof(url) != "string" || !url.includes("https")){
        return url;
    }
    return url.split('/').pop();
}

export function hasValidValue(value){
    if(value!=="")
        return true
    return false
}