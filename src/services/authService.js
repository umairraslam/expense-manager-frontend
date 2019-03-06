export const authService = {
    login
}

function login(email, password){
    let config = {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            email:email,
            password: password
        })
    };
    return fetch(process.env.REACT_APP_BACKEND_API_URL+"/login", config);
}