import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-intern-challenge-api.iurykrieger.now.sh"
});

/*
    Each page requisition is returning 8 products. 
    These 8 per requisition are sequential, but as soon as you make the requisiton for the next page,
    their name/id jumps 3 numbers.
    e.g. Page 1 requisition: 0 to 7; page 2 requisiton: 10 to 17
*/

export default api;
