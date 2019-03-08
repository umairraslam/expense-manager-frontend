export const expenseService = {
    getAllExpenses
}

const URL = process.env.REACT_APP_BACKEND_API_URL + "/expense";
const token = localStorage.getItem('token');
function getAllExpenses(){
    let config = {
        method:'GET',
        headers:{"Content-Type":"application/json", "authorization": token}
    };
    return fetch(URL, config);
}