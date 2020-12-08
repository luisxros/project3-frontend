function setToken() {

}

function getUserFromToken() {

}

function getToken(token) {
    if(token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }

}

function removeToken() {
    localStorage.removeItem('token');

}

export{
    setToken,
    getUserFromToken,
    getToken,
    removeToken,
}