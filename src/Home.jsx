import React, { useEffect,useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize, Schedule } from '@syncfusion/ej2-react-schedule';
import { DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { createElement, extend } from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import datasource from './services/datasource';
import { useNavigate } from 'react-router-dom';
import AddEntity from './Entity/AddEntity';
import './App.css';
 
 
function Home() {
 
  const [Well,setWell]=useState([]);
  const [Crew,setCrew]= useState([]);
  const [Bulker,setBulker]=useState([]);
  const [Pump,setPump]=useState([]);
  const [Rig,setRig]  = useState([]);
  const [Customer,setCustomer] = useState([]);
  const [Site, setSite] = useState([]);
  const [Appointments,setAppointment] = useState([]);

  const navigate = useNavigate();

   
   
  useEffect(() => {
    Bulkers();
    Pumps();
    Crews();
    Sites();
    Wells();
    Customers();
    Rigs();
    getAppointments();
  }, []);

   function CreateApoints(item){
      datasource.createAppointments(item);
   }

   async function getAppointments(){
    await datasource.getAppointments().then((res)=>{
      return setAppointment(()=>res.data.elements.map(item=>{
        return  {
          Id: item.id,
          Subject: item.title,
          StartTime: item.startDate,
          EndTime: item.endDate,
          IsAllDay: false,
          Description:item.description,
          Bulker:item.bulker.name,
          Crew:item.crew.name,
          Customer:item.customer.name,
          Pump:item.pump.name,
          Rig:item.rig.name,
          Well:item.well.name,
          Site:item.site.name
        }
      }))
    })
   }

  async function Bulkers(){
   await datasource.getBulkers().then((res)=>{
      return setBulker(()=>res.data.elements.map(item=>{
       return { text: item.name, Id: item.id ,value:item.id}
       }));
    })
  }

 async function Wells(){
   await datasource.getWells().then((res) => {
      return setWell(()=>res.data.elements.map(item=>{
      return { text: item.name, Id: item.id ,value:item.id}
      }))
     })
  }

 async function Crews(){
  await  datasource.getCrews().then((res)=>{
      return setCrew(()=>res.data.elements.map(item=>{
       return { text: item.name, Id: item.id ,value:item.id}
       }))
    })
  }

  async  function Customers(){
    await datasource.getCustomers().then((res)=>{
       return setCustomer(()=>res.data.elements.map(item=>{
         return { text: item.name, Id: item.id , value:item.id}
       }
       ))
     }
     )
   }

   async  function Rigs(){
    await datasource.getRigs().then((res)=>{
       return setRig(()=>res.data.elements.map(item=>{
         return { text: item.name, Id: item.id ,value:item.id}
       }
       ))
     }
     )
   }

 async function Pumps(){
  await  datasource.getPumps().then((res)=>{
      return setPump(()=>res.data.elements.map(item=>{
        return { text: item.name, Id: item.id ,value:item.id}
      }))
    }
   )
  }

  async  function Sites(){
   await datasource.getSites().then((res)=>{
      return setSite(()=>res.data.elements.map(item=>{
        return { text: item.name, Id: item.id ,value:item.id}
      }
      ))
    }
    )
  }
  


  function onPopupOpen(args) {
    if (args.type === 'Editor') {
      // Create required custom elements in initial time
      if (!args.element.querySelector('.custom-field-row')) {
        let row = createElement('div', { className: 'custom-field-row' });
        let formElement = args.element.querySelector('.e-schedule-form');
        formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
// Crew field
        let container1 = createElement('div', { className: 'custom-field-container' });
        let inputEle1 = createElement('input', {
          className: 'e-field', attrs: { name: 'Crew',value:'Crew'}
        });
        container1.appendChild(inputEle1);
        row.appendChild(container1);
        let DropDownList1 = new DropDownList({
          dataSource:Crew,
          fields: { text: 'text', id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Crews'
        });
        DropDownList1.appendTo(inputEle1);
        inputEle1.setAttribute('name', 'Crew');
        

// pump field
        let container2 = createElement('div', { className: 'custom-field-container' });
        let inputEle2 = createElement('input', {
          className: 'e-field', attrs: { name: 'Pump' }
        });
        container2.appendChild(inputEle2);
        row.appendChild(container2);
        let DropDownList2 = new DropDownList({
          dataSource:Pump,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'pumps'
        });
        DropDownList2.appendTo(inputEle2);
        inputEle2.setAttribute('name', 'Pump');
// bulker field

        let container3 = createElement('div', { className: 'custom-field-container' });
        let inputEle3 = createElement('input', {
          className: 'e-field', attrs: { name: 'Bulker' }
        });
        container3.appendChild(inputEle3);
        row.appendChild(container3);
        let DropDownList3 = new DropDownList({
          dataSource:Bulker,
          fields: { text: 'text', id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'bulkers'
        });
        DropDownList3.appendTo(inputEle3);
        inputEle3.setAttribute('name', 'Bulker');

//Rig field
        let container4 = createElement('div', { className: 'custom-field-container' });
        let inputEle4 = createElement('input', {
          className: 'e-field', attrs: { name: 'Rig' }
        });
        container4.appendChild(inputEle4);
        row.appendChild(container4);
        let DropDownList4 = new DropDownList({
          dataSource:Rig,
          fields: { text: 'text', id:'id', value: 'value' }, 
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Rigs'
        });
        DropDownList4.appendTo(inputEle4);
        inputEle4.setAttribute('name', 'Rig');

//Field customer
        let container5 = createElement('div', { className: 'custom-field-container' });
        let inputEle5 = createElement('input', {
          className: 'e-field', attrs: { name: 'Customer' }
        });
        container5.appendChild(inputEle5);
        row.appendChild(container5);
        let DropDownList5 = new DropDownList({
          dataSource:Customer,
          fields: { text: 'text', id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Customers'
        });
        DropDownList5.appendTo(inputEle5);
        inputEle5.setAttribute('name', 'Customer');

        //Field Well
        let container6 = createElement('div', { className: 'custom-field-container' });
        let inputEle6 = createElement('input', {
          className: 'e-field', attrs: { name: 'Well' }
        });
        container6.appendChild(inputEle6);
        row.appendChild(container6);
        let DropDownList6 = new DropDownList({
          dataSource:Well,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Wells'
        });
        DropDownList6.appendTo(inputEle6);
        inputEle5.setAttribute('name', 'Well');


        //Field sites
        let container7 = createElement('div', { className: 'custom-field-container' });
        let inputEle7 = createElement('input', {
          className: 'e-field', attrs: { name: 'Site' }
        });
        container7.appendChild(inputEle7);
        row.appendChild(container7);
        let DropDownList7 = new DropDownList({
          dataSource:Site,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Sites'
        });
        DropDownList7.appendTo(inputEle7);
        inputEle7.setAttribute('name', 'Site');
      }
    }
  }


  const save = 'e-save-icon e-icons e-event-create e-text-ellipsis e-control e-btn e-lib e-flat e-primary';
  const saveEvent = 'e-subject-container e-control e-btn e-lib e-primary e-event-save e-flat';
  const moreDetails = 'e-event-details e-text-ellipsis e-control e-btn e-lib e-flat';
  let scheduleData={};
  function closePopup(args){
    const classNameSave = args.event.target.className
    if (args.event.target.className !== moreDetails) {
       
        scheduleData={
          title:args.data.Subject,
          description:args.data.Description,
          customerId:args.data.Customer,
          wellId:args.data.Well,
          crewId:args.data.Crew,
          siteId:args.data.Site,
          rigId:args.data.Rig,
          bulkerId:args.data.Bulker,
          pumpId:args.data.Pump,
          createdAt:new Date(),
          startDate:args.data.StartTime,
          endDate:args.data.EndTime,
       }
       
 
    console.log(scheduleData);
    CreateApoints(scheduleData);
  }
}
  
  function onPrintClick() {
     console.log(Well);
     console.log(Bulker);
     console.log(Crew);
     console.log(Pump);
     console.log(Site);
     console.log(Rig);
     console.log(Customer);
     console.log(Appointments)
  }

  function onDragStart(args) {
    args.navigation.enable = false;
  }

  let detail = '<div class="tooltip-wrap">' +
  '<div class="image ${EventType}"></div>' +
  '<div class="content-area"><div class="name"><label>Title</label>&nbsp;:&nbsp;${Subject}</></div>' +
  '${if(Description !== null && Description !== undefined)}<div class="Description"><label>Description</label>&nbsp;:&nbsp; ${Description}</div>${/if}' +
  '${if(Customer !== null && Customer !== undefined)}<div class="Customer"><label>Customer</label>&nbsp;:&nbsp;${Customer}</div>${/if}' +
  '${if(Well !== null && Well !== undefined)}<div class="Well"><label>Well</label>&nbsp;:&nbsp;${Well}</div>${/if}' +
  '${if(Site !== null && Site !== undefined)}<div class="Site"><label>Site</label>&nbsp;:&nbsp;${Site}</div>${/if}' +
  '${if(Rig !== null && Rig !== undefined)}<div class="Rig"><label>Rig</label>&nbsp;:&nbsp;${Rig}</div>${/if}' +
  '${if(Bulker !== null && Bulker !== undefined)}<div class="Bulker"><label>Bulker</label>&nbsp;:&nbsp;${Bulker}</div>${/if}' +
  '${if(Pump !== null && Pump !== undefined)}<div class="Pump"><label>Pump</label>&nbsp;:&nbsp;${Pump}</div>${/if}' +
  '<div class="time">From&nbsp;:&nbsp;${StartTime.toLocaleString()} </div>' +
  '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${EndTime.toLocaleString()} </div></div></div>';
 

  return (
    <div className='container'>
      <div className='row'>
      <div className='col-lg-10'>
      <ScheduleComponent height='100vh'  currentView='Month'  dragStart={(onDragStart.bind(this))}
        eventSettings={{ dataSource:Appointments, template:detail, enableTooltip: true,
          tooltipTemplate:detail}}   popupClose={closePopup} popupOpen={onPopupOpen.bind(this)}  
      showQuickInfo={true} 
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
      </ScheduleComponent>
      </div>
      <div col-lg-2>
        <AddEntity/>
      </div>
      </div>
      <button onClick={onPrintClick}>
        click
      </button>

     
      {/* <div className='menu-container' onClick={()=>{
          navigate("/entities");
         }}>
      
         <div className='entities' >
          <h3>Add Entities</h3>
         </div>
      


      </div> */}

    </div>


  );
}
export default Home;
