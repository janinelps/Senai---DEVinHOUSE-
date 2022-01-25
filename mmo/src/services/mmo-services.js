export const fetchAllMmo = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_URL, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_HOST,
                "x-rapidapi-key": process.env.REACT_APP_KEY,
            },
        });
        const listaMmo = await response.json();
        return listaMmo;
    } catch (error) {
        console.error(error.message)
    }
}