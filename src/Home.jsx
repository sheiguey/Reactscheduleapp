import React, { useEffect,useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize, Schedule } from '@syncfusion/ej2-react-schedule';
import { DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns'
import { createElement, extend } from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import datasource from './services/datasource';
import './App.css';
 
 
function Home() {

  const [Well,setWell]=useState([]);
  const [Crew,setCrew]= useState([]);
  const [Bulker,setBulker]=useState([]);
  const [Pump,setPump]=useState([]);
  const [Rig,setRig]  = useState([]);
  const [Customer,setCustomer] = useState([]);
  const [Site, setSite] = useState([])

  async function Bulkers(){
   await datasource.getBulkers().then((res)=>{
      return setBulker(()=>res.data.elements.map(item=>{
       return { text: item.name, Id: item.id ,value:item.name}
       }));
    })
  }

 async function Wells(){
   await datasource.getWells().then((res) => {
      return setWell(()=>res.data.elements.map(item=>{
      return { text: item.name, Id: item.id ,value:item.name}
      }))
     })
  }

 async function Crews(){
  await  datasource.getCrews().then((res)=>{
      return setCrew(()=>res.data.elements.map(item=>{
       return { text: item.name, Id: item.id ,value:item.name}
       }))
    })
  }

 async function Pumps(){
  await  datasource.getPumps().then((res)=>{
      return setPump(()=>res.data.elements.map(item=>{
        return { text: item.name, Id: item.id ,value:item.name}
      }))
    }
   )
  }

  async  function Sites(){
   await datasource.getSites().then((res)=>{
      return setSite(()=>res.data.elements.map(item=>{
        return { text: item.name, Id: item.id ,value:item.name}
      }
      ))
    }
    )
  }

 
  useEffect(() => {
    Bulkers();
    Pumps();
    Crews();
    Sites();
    Wells();
  }, []);
  
  const save = 'e-event-create e-text-ellipsis e-control e-btn e-lib e-flat e-primary';
  const saveEvent = 'e-control e-btn e-lib e-primary e-event-save e-flat';
  const moreDetails = 'e-event-details e-text-ellipsis e-control e-btn e-lib e-flat';
  const scheduleData=[];



   

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
          className: 'e-field', attrs: { name: 'Crew' }
        });
        container1.appendChild(inputEle1);
        row.appendChild(container1);
        let multiSelect1 = new MultiSelect({
          dataSource:Crew,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Crews'
        });
        multiSelect1.appendTo(inputEle1);
        inputEle1.setAttribute('name', 'Crew');

// pump field
        let container2 = createElement('div', { className: 'custom-field-container' });
        let inputEle2 = createElement('input', {
          className: 'e-field', attrs: { name: 'Pump' }
        });
        container2.appendChild(inputEle2);
        row.appendChild(container2);
        let multiSelect2 = new MultiSelect({
          dataSource:Pump,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'pumps'
        });
        multiSelect2.appendTo(inputEle2);
        inputEle2.setAttribute('name', 'Pump');
// bulker field

        let container3 = createElement('div', { className: 'custom-field-container' });
        let inputEle3 = createElement('input', {
          className: 'e-field', attrs: { name: 'Bulker' }
        });
        container3.appendChild(inputEle3);
        row.appendChild(container3);
        let multiSelect3 = new MultiSelect({
          dataSource:Bulker,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'bulkers'
        });
        multiSelect3.appendTo(inputEle3);
        inputEle3.setAttribute('name', 'Bulker');

//Rig field
        let container4 = createElement('div', { className: 'custom-field-container' });
        let inputEle4 = createElement('input', {
          className: 'e-field', attrs: { name: 'Pump' }
        });
        container4.appendChild(inputEle4);
        row.appendChild(container2);
        let multiSelect4 = new MultiSelect({
          dataSource:Rig,
          fields: { text: 'text', id:'id', value: 'value' }, 
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Rigs'
        });
        multiSelect4.appendTo(inputEle4);
        inputEle4.setAttribute('name', 'Rig');


        
//Field customer
        let container5 = createElement('div', { className: 'custom-field-container' });
        let inputEle5 = createElement('input', {
          className: 'e-field', attrs: { name: 'Customer' }
        });
        container5.appendChild(inputEle5);
        row.appendChild(container5);
        let multiSelect5 = new MultiSelect({
          dataSource:Customer,
          fields: { text: 'text', id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Customers'
        });
        multiSelect5.appendTo(inputEle5);
        inputEle5.setAttribute('name', 'Customer');


        //Field Well
        let container6 = createElement('div', { className: 'custom-field-container' });
        let inputEle6 = createElement('input', {
          className: 'e-field', attrs: { name: 'Well' }
        });
        container6.appendChild(inputEle6);
        row.appendChild(container6);
        let multiSelect6 = new MultiSelect({
          dataSource:Well,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Wells'
        });
        multiSelect6.appendTo(inputEle6);
        inputEle5.setAttribute('name', 'Well');


        //Field sites
        let container7 = createElement('div', { className: 'custom-field-container' });
        let inputEle7 = createElement('input', {
          className: 'e-field', attrs: { name: 'Customer' }
        });
        container7.appendChild(inputEle7);
        row.appendChild(container7);
        let multiSelect7 = new MultiSelect({
          dataSource:Site,
          fields: { text: 'text',id:'id', value: 'value' },
          value: args.data.EventType,
          floatLabelType: 'Always', placeholder: 'Sites'
        });
        multiSelect7.appendTo(inputEle7);
        inputEle7.setAttribute('name', 'Site');
      }
    }
  }

  function onclosePopup(args) {
    const classNameSave = args.event.target.className

    if (args.event.target.className !== moreDetails) {
      if (classNameSave === save || classNameSave === saveEvent) {
        scheduleData.push({
          Id: scheduleData.length + 1,
          Subject: args.data.Subject,
          Location: args.data.Location,
          Description:args.data.Description,
          Crew:args.data.Crew,
          Pump:args.data.Pump,
          Bulker:args.data.Bulker,
          Client:args.data.Customer,
          Site:args.data.Site,
          Well:args.data.Well,
        })
        
      }
    }
    console.log(scheduleData);
  }

 
 
  function onPrintClick() {
     console.log(Well);
     console.log(Bulker);
     console.log(Crew);
  }

  function onDragStart(args) {
    args.navigation.enable = true;
  }



  return (
    <div className='content'>
      <ScheduleComponent height='90vh' currentView='Month' dragStart={(onDragStart.bind(this))}
        eventSettings={{ dataSource: scheduleData }}  popupClose={onclosePopup.bind(this)} popupOpen={onPopupOpen.bind(this)}  
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
      <div className='menu-container'>

        <button onClick={onPrintClick}>Print</button>


      </div>

    </div>


  );
}
export default Home;
