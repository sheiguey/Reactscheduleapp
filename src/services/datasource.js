import React from "react";
import axios from 'axios'


const base_url ="http://ec2-3-138-188-193.us-east-2.compute.amazonaws.com:8002/";



class DataSource{
   
    getWells(){
       return axios.get(base_url+"wells")
    }

    addWell(well){
      return axios.post(base_url+"wells",well,{headers: {'Content-Type': 'application/json'}})
    }


    getPumps(){
        return axios.get(base_url+"pumps");
     }

     addPump(pump){
        return axios.post(base_url+"pumps",pump,{headers: {'Content-Type': 'application/json'}})
     }

     getRigs(){
        return axios.get(base_url+"rigs");
     }

     addRig(Rig){
      return axios.post(base_url+"rigs",Rig,{headers: {'Content-Type': 'application/json'}})
     }

     getSites(){
        return axios.get(base_url+"sites");
     }

     addSite(Site){
      return axios.post(base_url+"sites",Site,{headers: {'Content-Type': 'application/json'}})
     }

     getCrews(){
        return axios.get(base_url+"crews");
     }
     addCrew(Crew){
      return axios.post(base_url+"crews",Crew,{headers: {'Content-Type': 'application/json'}})
     }

     getBulkers(){
        return axios.get(base_url+"bulkers");
     }

     addBulker(Bulker){
      return axios.post(base_url+"bulkers",Bulker,{headers: {'Content-Type': 'application/json'}})
     }

     getCustomers(){
        return axios.get(base_url+"customers");
     }
     addCustomer(Customer){
      return axios.post(base_url+"Customers",Customer,{headers: {'Content-Type': 'application/json'}})
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