import React ,{ createContext, useContext, useEffect, useState } from "react";
//created contextApi which has two major parts
export const AuthContext=createContext();
//AuthProvider which is responsible for creating and managing the context, 
//which holds the data to be shared between components.
export const AuthProvider=({children})=>{
    //getting the token
    const [token,setToken]=useState(localStorage.getItem("token"));
    const   [user,setUser]=useState();
    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem("token",serverToken);
    }
    const isLoggedIn=!!token;
    console.log("isLoggedIn",isLoggedIn);
    //tackling the logout user
    const LogoutUser=()=>{
        setToken("");
        localStorage.removeItem("token");
    }
    //Authorization
    const userAuthorization=async()=>{
        try{
            const response=await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.ok){
                const data=await response.json();
                console.log(data.userData);
                setUser(data.userData);
                console.log(user);
            }
        }catch(error){
            console.log("Error fetching user data");
        }
    }
    useEffect(()=>{
        userAuthorization();
    },[])
    return <AuthContext.Provider value={{isLoggedIn,LogoutUser,storeTokenInLS}}>
        {children}
    </AuthContext.Provider>
};
//AuthConsumer which is used to access the context and its data from within a component.
export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth is used outside of the Provider.")
    }
    return authContextValue;
}