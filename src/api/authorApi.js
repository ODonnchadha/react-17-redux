import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

// Fetch is built into modern browsers.
export function getAuthors() {
  return fetch(baseUrl)
    // `then` is called when the promise resolves. 
    .then(handleResponse)
    .catch(handleError);
}
