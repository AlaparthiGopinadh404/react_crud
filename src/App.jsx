import React, { useState } from 'react';
import './App.css';

function App() {
  var [ar,setAr]=useState([{
    id:"",
    name:"",
    email:"",
    contact:""
  }])
 var[index,setindex]=useState([''])
  var [data,setdata]=useState([
    { id: 1, name: "Tania", email: "mailto:tania@abc.com", contact: 989898757 },
    { id: 2, name: "Craig", email: "mailto:craig@abc.com", contact: 999898757 },
    { id: 3, name: "Ben", email: "mailto:ben@abc.com", contact: 979898757 }
  ])

  function del(i){
    var temp=[...data]
    temp.splice(i,1)
    setdata(temp)
  }
 
 function asd(){
  setdata([...data,ar])
  console.log(ar)
  
 }
 function abc(e){
  ar.id=e.target.value

 }
 function xyz(e){
  ar.name=e.target.value

 }function fgh(e){
  ar.email=e.target.value
  
 }function ikl(e){
   ar.contact=e.target.value
  
 }
 function edi(p,i){
  
    setAr({id:p.id,name:p.name,email:p.email,contact:p.contact})
    setindex(i)
    console.log(p)
    console.log(i)
 }
 function zyx(e){
  ar.id=e.target.value
  setAr({...ar})
 }
 function uvw(e){
  ar.name=e.target.value
  setAr({...ar})
 }
 function pqr(e){
  ar.email=e.target.value
  setAr({...ar})
 }
 function rst(e){
  ar.contact = e.target.value
  setAr({...ar})
 }
 function update(){
   var tem=[...data]
   tem[index]=ar
   setdata(tem)
   console.log(tem)
 }
  return (
    <div >
      <button  className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >AddNewDetails</button>
     <table className='table'>
      <thead>
        <tr>
          
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile no.</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((p,i)=>{
            return <tr>
            
              <td>{p?.id}</td>
              <td>{p?.name}</td>
              <td>{p?.email}</td>
              <td>{p?.contact}</td>
              <td><button  className='btn btn-danger' onClick={()=>{del(i)}}>Delete</button></td>
              <td><button   className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"  onClick={()=>{edi(p,i)}}>Edit</button></td>
            </tr>
          })
        }
      </tbody>
     </table>
    

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">id</label>
            <input type="number" class="form-control" id="recipient-name" required value={ar.id} maxLength="2" onKeyUp={(e)=>{abc(e)}}/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">name</label>
            <input  type="text"  class="form-control" id="message-text" required  value={ar.name}onKeyUp={(e)=>{xyz(e)}} />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">email</label>
            <input  type="email"  class="form-control" id="message-text" required  value={ar.email}onKeyUp={(e)=>{fgh(e)}}/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">contact</label>
            <input  type="number"  class="form-control" id="message-text" required  value={ar.contact}onKeyUp={(e)=>{ikl(e)}} />
          </div>

        
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={asd}>add</button>
      </div>
    </div>
  </div>
</div>
{/* edit */}

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Updatedata</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">id</label>
            <input type="number" class="form-control" id="recipient-name" value={ar.id} onChange={zyx}/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">name</label>
            <input  type="text"  class="form-control" id="message-text" value={ar.name} onChange={uvw} />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">email</label>
            <input  type="email"  class="form-control" id="message-text" value={ar.email} onChange={pqr}/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">contact</label>
            <input  type="number"  class="form-control" id="message-text" value={ar.contact} onChange={rst} />
          </div>

        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={update} >Update</button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;