// const serverUrl = import.meta.env.VITE_SERVER_URL;
// export const fetchOfferListing = serverUrl + '/api/listing/get?offer=true&limit=4';
//  export const fetchRentListing = serverUrl+'/api/listing/get?type=rent&limit=4';
//  export const fetchSaleListing = serverUrl+'/api/listing/get?type=sale&limit=4';
//  export const fetchListingss = serverUrl+`/api/listing/get/`;
//  export const updateUser = serverUrl+`/api/user/update/`;
// export const deleteUser = serverUrl+`/api/user/delete/`;
// export const signOut = serverUrl+'/api/auth/signout';
// export const showListings = serverUrl+`/api/user/listings/`;
// export const deleteListing = serverUrl+`/api/listing/delete/`;
// export const fetchList = serverUrl+`/api/listing/get?`;
// export const signIn = serverUrl+'/api/auth/signin';
// export const signUp = serverUrl+'/api/auth/signup';
// export const updateListing = serverUrl+`/api/listing/update/`;
// export const createListing = serverUrl+'/api/listing/create';


const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

//  Auth APIs
export const signIn = `${serverUrl}api/auth/signin`;
export const signUp = `${serverUrl}api/auth/signup`;
export const signOut = `${serverUrl}api/auth/signout`;

//  Listing APIs
export const createListing = `${serverUrl}api/listing/create`;
export const updateListing = `${serverUrl}api/listing/update/`;
export const deleteListing = `${serverUrl}api/listing/delete/`;
export const fetchListingss = `${serverUrl}api/listing/get/`;
export const fetchOfferListing = `${serverUrl}api/listing/get?offer=true&limit=4`;
export const fetchRentListing = `${serverUrl}api/listing/get?type=rent&limit=4`;
export const fetchSaleListing = `${serverUrl}api/listing/get?type=sale&limit=4`;
export const fetchList = `${serverUrl}api/listing/get?`;

//  User APIs
export const updateUser = `${serverUrl}api/user/update/`;
export const deleteUser = `${serverUrl}api/user/delete/`;
export const showListings = `${serverUrl}api/user/listings/`;
