import commonAPI from "./commomAPI"
import SERVERURL from "./serverURL"




// guest users api


// register api - called by Auth component when register button is clicked, default content-type:"application/json"
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}
// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// google login
export const googleLoginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
// home page books api
export const getHomeBookAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/home-books`)
}
// all career api

// ------------------------------------authorised user api - user------------------------------------------------//
// upload book -  called by profile component
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// view all books - called by allbooks when page load
export const getAllBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books`,{},reqHeader)
}
// view single book - called by view component when it load in browser
export const getSingleBookAPI = async (bookId,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}

// profile update 
// purchased book
// approve books

// authorised user api - admin