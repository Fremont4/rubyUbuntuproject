export const register = user =>{
    return dispatch =>{
        return fetch ("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                'contentType':'application/json'
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(data =>{
            if (data.errors) {
               return "username or password error"
            }else{
                localStorage.setItem("token",data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const login = user =>{
    return dispatch =>{
        return fetch("http://localhost:3000/api/v1/login",{
            method: "POST",
            headers: {
                'contentType': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(data =>{
            if (data.errors) {
                return "login was unsuccessful"
            }else{
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const getProfile = user =>{
    return dispatch =>{
        const token = localStorage.token;
        if (token) {
            return fetch("http://localhost:3000/api/v1/profile",{
            method: "GET",
            headers: {
                'contentType': 'application/json',
                Accept: 'application/json',
                'Authorization':'Bearer ${token}'
            }
        })
    } 
        .then(resp => resp.json())
        .then(data =>{
            if (data.message) {
// remove the invalid token if the server returns an error message.
        localStorage.removeItem("token") 
            }else{
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj 

})
