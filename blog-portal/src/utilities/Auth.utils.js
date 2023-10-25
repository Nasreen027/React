import { AuthUtilConstent } from "./util.constant"

const saveToken = (token) => {
    if (!token) {
        return;
    }
    // console.log(token, 'token');
    localStorage.setItem(AuthUtilConstent.USER_TOKEN, token);
}

const removeToken = () => {
    localStorage.removeItem(AuthUtilConstent.USER_TOKEN)
}

const isUserLoggedIn = () => {
    const token = localStorage.getItem(AuthUtilConstent.USER_TOKEN);
    if(!token){
        return false;
    }
    else{
        return true;
    }
}
export const AuthUtils = {
    saveToken,
    removeToken,
    isUserLoggedIn
}