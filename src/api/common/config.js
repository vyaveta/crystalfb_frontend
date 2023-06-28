export const createConfig = (method, url, headers, data) => {
    const config = {
        method,
        url,
        headers,
        data,
    }
    return config
}