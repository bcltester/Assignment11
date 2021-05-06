async function getData (url) {
    try {
        const response = await fetch(url);
        const users = await response.json();
        return users
    }
    catch (error) {
        return error;
    }
}