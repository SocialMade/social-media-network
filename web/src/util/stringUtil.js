
export const getUrlParamValue = (url, key) => {
    let urlObject = new URL(url);
    return urlObject.searchParams.get(key);
}


