const API_URL = import.meta.env.VITE_APP_API_URL;


export const testHttp = async () => {
    try {
        const response = await fetch(`${API_URL}/helloLogin`);

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const loginUser = async (user) => {

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Serializza l'oggetto 'user' in formato JSON
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Errore HTTP: ${response.status}`);
    }

    const data = await response; // Assumiamo che il server ritorni una stringa
    console.log(data)
    return data;

};


export const signupUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}/signupUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user), // Serializza lo user in formato JSON
        });

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json(); // Supponendo che il server restituisca l'oggetto salvato
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};


