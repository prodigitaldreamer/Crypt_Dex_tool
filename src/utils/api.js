// util/api.js
import axios from "axios";
// Function to make a POST request to the server
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = axios(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // You may need to include the CSRF token here if required by your Django server
            // 'X-CSRFToken': 'your-csrf-token',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response // parses JSON response into native JavaScript objects
}

// Function to make a GET request to the server
async function getData(url = '') {
    // Default options are marked with *
    const response = axios.get(url, {
        method: 'GET', // GET request
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // You may need to include additional headers here if required by your server
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer' // no-referrer, *client
    });
    return response; // parses JSON response into native JavaScript objects
}

// Export the functions to make them accessible from other files
export { postData, getData };
