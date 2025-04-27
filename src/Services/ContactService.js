import axios from "axios";

const urlBase = import.meta.env.VITE_API_URL

class ContactService {

    sendContact (data){
        try {
            const response = axios.post(urlBase, data);
            console.log(response);
        } catch (error) {
            throw error;
        }
    }

}

export default new ContactService();