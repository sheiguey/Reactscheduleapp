import React from "react";
import axios from 'axios'

class DataSource{
    getWells(){
       return axios.get("http://192.168.43.177:8280/wells");
    }

    getPumps(){
        return axios.get("http://192.168.43.177:8280/pumps");
     }

     getRigs(){
        return axios.get("http://192.168.43.177:8280/rigs");
     }

     getSites(){
        return axios.get("http://192.168.43.177:8280/sites");
     }

     getCrews(){
        return axios.get("http://192.168.43.177:8280/crews");
     }

     getBulkers(){
        return axios.get("http://192.168.43.177:8280/bulkers");
     }

     getCustomers(){
        return axios.get("http://192.168.43.177:8280/customers");
     }
}

export default new DataSource();