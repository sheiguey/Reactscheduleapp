import React,{useState,useEffect} from "react";
import datasource from "../services/datasource";

import '../styles/Entity.css'





function AddEntity(){

    const [displayEntityCrewPopup, setDisplayEntityCrewPopup]= useState("none");
    const [displayEntityCustomerPopup, setDisplayEntityCustomerPopup]= useState("none");
    const [displayEntitySitePopup, setDisplayEntitySitePopup]= useState("none");
    const [displayEntityPumpPopup, setDisplayEntityPumpPopup]= useState("none");
    const [displayEntityBulkerPopup, setDisplayEntityBulkerPopup]= useState("none");
    const [displayEntityWellPopup, setDisplayEntityWellPopup]= useState("none");
    const [displayEntityRigPopup, setDisplayEntityRigPopup]= useState("none");

    const [crewName, setCrewName]= useState(" ");
    const [customerName, setCustomerName]= useState(" ");
    const [siteName, setSiteName]= useState("");
    const [pumpName, setPumpName]= useState("");
    const [bulkerName, setBulkerName]= useState("");
    const [wellName, setWellName]= useState("");
    const [wellLocation, setWellLocation]= useState("");
    const [rigName, setRigName]= useState("");
    

    function addCrew(){
        let crew={
            name:crewName
        }
        console.log(crew);
        datasource.addCrew(crew);
        setDisplayEntityCrewPopup("none")

    }

    function addWell(){
        let well={
            name:wellName,
            location:wellLocation,
            clientId :1
        }
        console.log(well);
        datasource.addWell(well);
        setDisplayEntityWellPopup("none")
    }

    function addCustomer(){
        let customer={
            name:customerName
        }

        console.log(customer);
        datasource.addCustomer(customer);
        setDisplayEntityCustomerPopup("none")
    }

    function addSite(){
        let site={
            name:siteName
        }
        console.log(site);
        datasource.addSite(site);
        setDisplayEntitySitePopup("none")
    }

    function addPump(){
        let pump={
            name:pumpName
        }
        console.log(pump);
        datasource.addPump(pump);
        setDisplayEntityPumpPopup("none")
    }

    function addBulker(){
        let bulker={
            name:bulkerName
        }
        console.log(bulker);
        datasource.addBulker(bulker);
        setDisplayEntityBulkerPopup("none")
    }

    function addRig(){
        let rig={
            name:rigName
        }
        console.log(rig);
        datasource.addRig(rig);
        setDisplayEntityRigPopup("none")
    }


    return (
     <div>

     
        <div className="container">
            <div className="entities">
                    <p className="entity" onClick={()=>{
                        setDisplayEntityCrewPopup("block")
                    }}>Add Crew</p>
                    <p className="entity" onClick={()=>{
                        setDisplayEntityCustomerPopup("block")
                    }}>Add Customer</p>
                    <p className="entity" onClick={()=>{
                       setDisplayEntitySitePopup("block")
                    }}>Add Site</p>
                    <p className="entity" onClick={()=>{
                        setDisplayEntityPumpPopup("block")
                    }}>Add Pump</p>
                    <p className="entity" onClick={()=>{
                        setDisplayEntityBulkerPopup("block")
                    }}>Add Bulker</p>
                    <p className="entity" onClick={()=>{
                       setDisplayEntityWellPopup("block")
                    }}>Add Well</p>
                    <p className="entity" onClick={()=>{
                        setDisplayEntityRigPopup("block")
                    }}>Add Rig</p>
            </div>
            
        </div>
        <div className="modal" style={{'display':displayEntityCrewPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityCrewPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Crew" placeholder="Enter the Crew name" onChange={(event)=>{
                            setCrewName(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button class="modal-btn" type="button" onClick={addCrew}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="modal" style={{'display':displayEntityCustomerPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityCustomerPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Customer" placeholder="Enter the Customer" onChange={(event)=>{
                            setCustomerName(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addCustomer}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal" style={{'display':displayEntitySitePopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntitySitePopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Site" placeholder="Enter the Site name"  onChange={(event)=>{
                            setSiteName(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addSite}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal" style={{'display':displayEntityPumpPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityPumpPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Pump" placeholder="Enter the Pump name"  onChange={(event)=>{
                            setPumpName(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addPump}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal" style={{'display':displayEntityBulkerPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityBulkerPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Bulker" placeholder="Enter the Bulker name"  onChange={(event)=>{
                            setBulkerName(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addBulker}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal" style={{'display':displayEntityWellPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityWellPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Well" placeholder="Enter the Well name"  onChange={(event)=>{
                            setWellName(event.target.value)
                        }} required />
                         <input type="text" name="WellLocation" placeholder="Enter the Well location"  onChange={(event)=>{
                            setWellLocation(event.target.value)
                        }} required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addWell}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal" style={{'display':displayEntityRigPopup}}>
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" id="modal-close-btn"  onClick={()=>{
                        setDisplayEntityRigPopup("none")
                    }}>X</button>
                </div>
                <div className="modal-inner" id="modal-inner">
                    <form id="consent-form">
                        <input type="text" name="Rig" placeholder="Enter the Rig name"  onChange={(event)=>{
                            setRigName(event.target.value)
                        }}required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="button" class="modal-btn" onClick={addRig}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>

        
        </div>
    );
}

export default AddEntity;