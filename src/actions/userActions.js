import {SET_USER,EDIT_USER} from '../constants/userTypes';
import api from "../apis/api";
export const setUser=(user)=>{
    return{
        type:SET_USER,
        payload:user
    };
}
export const editUser=user=>async dispatch=>{
    const response = await api.put(`/api/user/update/${user.email}`,user)
    .then((user)=>{
        console.log('User updated');
        console.log(user);
    })
    .catch((err)=>{
        console.log('An error occurs');
        console.log(err);
    })
    dispatch({
        type:EDIT_USER,
        payload:response.data
    })
}