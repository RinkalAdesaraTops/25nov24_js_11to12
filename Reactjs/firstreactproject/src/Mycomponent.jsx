const Mycomponent = (props)=>{
    let a=10
    let b=20
    var name="Test"
    const abc=(a,b)=>{
        console.log("abc func called.."+(a*b));       
    }
    let data = props.arr.map((i,index)=><li key={index}>{i}</li>)
    
    return (
        <div>
            <h4>Component created by me...</h4>
            <h3>Addition is  -- {a+b}</h3>
            <h3>Name is -- {name}</h3>
            <h4>My name is -- {props.myname}</h4>
            <h4>My Age is -- {props.myage}</h4>
            <button onClick={()=>abc(2,3)}>Add</button>
            <ul>{data}</ul>
        </div>
    )
}
export default Mycomponent