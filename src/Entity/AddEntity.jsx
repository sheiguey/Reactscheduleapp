import React,{useState,useEffect} from "react";

import '../styles/Entity.css'





function AddEntity(){

    const [displayEntityCrewPopup, setDisplayEntityCrewPopup]= useState("none");
    const [displayEntityCustomerPopup, setDisplayEntityCustomerPopup]= useState("none");
    const [displayEntitySitePopup, setDisplayEntitySitePopup]= useState("none");
    const [displayEntityPumpPopup, setDisplayEntityPumpPopup]= useState("none");
    const [displayEntityBulkerPopup, setDisplayEntityBulkerPopup]= useState("none");
    const [displayEntityWellPopup, setDisplayEntityWellPopup]= useState("none");
    const [displayEntityRigPopup, setDisplayEntityRigPopup]= useState("none");


    return (
     <div>

     
        <div className="container">
            <div className="entities">
                    <h1 className="entity">Add Crew</h1>
                    <h1 className="entity">Add Customer</h1>
                    <h1 className="entity">Add Site</h1>
                    <h1 className="entity">Add Pump</h1>
                    <h1 className="entity">Add Bulker</h1>
                    <h1 className="entity">Add Well</h1>
                    <h1 className="entity" onClick={()=>{
                        setDisplayEntityCrewPopup("block")
                    }}>Add Rig</h1>
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
                        <input type="text" name="fullName" placeholder="Enter the Entity name" required />
                        <div className="modal-choice-btns" id="modal-choice-btns">
                            <button type="submit" class="modal-btn">Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEntity;