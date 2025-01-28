import React, { useEffect, useState } from 'react'

const Lifecyclefunc = () => {
    const [name,setName]=useState("ABC")
    useEffect(()=>{
        setTimeout(()=>{
            setName("PQR")

        },3000)
    })
  return (
    <div>
        <h4>Name is -- {name}</h4>
    </div>
  )
}

export default Lifecyclefunc
