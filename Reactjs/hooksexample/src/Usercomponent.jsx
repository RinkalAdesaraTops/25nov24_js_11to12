import React, { useState } from 'react'

const Usercomponent = () => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [id,setId] = useState('')
    const [data,setData] = useState([])
    const handleChange = (e)=>{
        console.log('name is '+e.target.name);
        setName(e.target.value)
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            //update
            let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age = age
                } 
                return i
            })
            setData(res)
        } else {
            //insert
            setData([
                ...data,
                {
                    name:name,
                    age:age
                }
            ])
        }
        
        setName('')
        setAge('')
        setId('')
    }
    const delData = (id)=>{
        //1 2  4 5 -- 3 
        let res = data.filter((i,index)=>{
                return id!=index
        })
        setData(res)
    }
    const editData = (id)=>{
        //1 2  4 5 -- 3 
        let res = data.find((i,index)=>{
                return id==index
        })
        setAge(res.age)
        setName(res.name)
        setId(id)
    }
    
  return (
    <div>
      <h3>User CRUD Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="username" id="" onInput={handleChange} value={name} /><br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="" value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <input type="submit" value="Save Data" />
      </form>
      <br /><br />
      <table border={'2'}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Usercomponent
