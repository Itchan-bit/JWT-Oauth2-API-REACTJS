import axios from 'axios'


const USERNAME = 'itchan'
const PASSWORD = 'itchan123'
const BASE_URL = `http://localhost:8083/oauth/token`

class Auth {

    login(){
        return axios.get(`${BASE_URL}`,
            { headers: { authorization: 'Basic ' + window.btoa(USERNAME + ":" + PASSWORD) } }
        );
    }


}

export default Auth;