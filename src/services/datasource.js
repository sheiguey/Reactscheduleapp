import React from "react";
import axios from 'axios'


const base_url ="http://172.16.0.20:8280/";



class DataSource{
     
 


    getWells(){
       return axios.get(base_url+"wells");
    }

    getPumps(){
        return axios.get(base_url+"pumps");
     }

     getRigs(){
        return axios.get(base_url+"rigs");
     }

     getSites(){
        return axios.get(base_url+"sites");
     }

     getCrews(){
        return axios.get(base_url+"crews");
     }

     getBulkers(){
        return axios.get(base_url+"bulkers");
     }

     getCustomers(){
        return axios.get(base_url+"customers");
     }

     getAppointments(){
      return axios.get(base_url+"appointments");
     /*  .then((res)=>{
         return appointments.push(res.data);
      }) */
     }

     createAppointments(appoint){
      return axios.post(base_url+"appointments",appoint);
   }
}

export default new DataSource();