import React, { useEffect, useState } from 'react'
import httpInstance, { httpInstance1 } from '../axiosConfig/axiosConfig'

function Home() {

const [data,setData]=useState([])
const [data1,setData1]=useState([])
const [showInput,setShowInput]=useState(false)
const [id,setId]=useState('')
const [newData,setNewData]=useState( {
    userId: '',
    id: '',
    title: ""
  })
useEffect(()=>{
    fetchData()
},[])

let i=0;

const fetchData=async()=>{
    while(i<10000000){
        i++
    }
    const response=await httpInstance.get('posts')
    const response1=await httpInstance1.get('photos')
    setData(response.data)
    setData1(response1.data)
}

const editData=(id)=>{
setId(id)
setShowInput(true)
}
const changeData=(e)=>{
    const dataCopy={...newData}
     dataCopy[e.target.name]=e.target.value
setNewData(dataCopy)
}

const fetchUpdateData=async()=>{
    const response=await httpInstance.put(`posts/${id}`,newData)
    console.log(response);
    fetchData()
    //setData(response.data)
}

  return (
    <div>
        {showInput && <div><input name='title' value={newData.title} onChange={changeData}></input><button onClick={()=>{fetchUpdateData()}}>done</button></div>}
         {data.map(ele=><p key={ele.id}>{ele.title}<button onClick={()=>{editData(ele.id)}}>edit</button></p>)}
      
    </div>
  )
}

export default Home