import commonAPI from "./commomAPI"
import SERVERURL from "./serverURL"




// guest users api


// register api - called by Auth component when register button is clicked, default content-type:"application/json"
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

// login
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

// google login
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody)
}

// home page books api
export const getHomeBookAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

// all career api

// ------------------------------------authorised user api - user------------------------------------------------//
// upload book -  called by profile component
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

// view all books - called by allbooks when page load
export const getAllBooksAPI = async (search, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${search}`, {}, reqHeader)
}

// view single book - called by view component when it load in browser
export const getSingleBookAPI = async (bookId, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/books/${bookId}/view`, {}, reqHeader)
}

// All User Upload books - called by profile
export const getAllUserUploadBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

// purchased book - called by profile
export const getAllUserPurchasedBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-bought-books`, {}, reqHeader)
}

//remove user upload books - called by profile
export const removeUserUploadBooksAPI = async (bookId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-books/${bookId}/remove`, {}, reqHeader)
}

// user - profile update
export const updateUserProfileAPI = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/user-profile/edit`, reqBody, reqHeader)
}


//-------------------Authorised user api - admin
//list users - called by admin component (resource admin)
export const getAllUsersAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-user`, {}, reqHeader)
}

//list all books
export const listAllBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/admin-all-books`, {}, reqHeader)
}