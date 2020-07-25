import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?results=200&nat=u";

export default {
    getEmployees: function() {
        return axios.get(BASE_URL);
    }
}