const initialState ={
    all:[]
    currentUser: {}
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            const newUser = state.all.find(user => user.id ===action.payload.id)
            if (newUser) {
                return {...state, currentUser: action.payload}
            }else{
                {...state, all: state.all.concat(action.payload), currentUser:action.payload}
            }
            
        default:
            return state;
    }
}