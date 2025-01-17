import React, { Fragment, useState } from 'react'

const StateExample = () => {
    //Hooks
    const [name,setName] = useState("ASBd")
    const [userage,setUserAge] = useState(25)
    const [email,setEmail] = useState("")
    const addName = ()=>{
        setName("TEST")
    }
    const myStyle = {
        color:"yellow",
        backgroundColor:'grey'
    }
  return (
    // <React.Fragment></React.Fragment>
    // <Fragment></Fragment>
    <>
    <div>
        
      <h3 style={{color:'blue',backgroundColor:'yellowgreen'}}>State Example</h3>
      <h4>Name is -- {name}</h4>
      <button onClick={addName}>Add</button>
      <h4 style={myStyle}>Age is -- {userage}</h4>
      <button onClick={()=>setUserAge(30)}>Add</button>

    </div>
    <div className='box'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia laboriosam velit vel aut, rerum officiis vitae fuga impedit ut optio sit quidem animi voluptas sapiente expedita eaque nam deleniti sequi.
    </div>
    </>
  )
}

export default StateExample
