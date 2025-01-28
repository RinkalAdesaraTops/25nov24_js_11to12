import React, { Component } from 'react'

class Lifecycleclass extends Component {
    constructor(props){
        console.log("Constructor called...");
        super(props)
        this.state = {
            name:"test123",
            age:25,
            oldPwd:'',
            newPwd:''
        }
        // this.changeName = this.changeName.bind(this)
    }
    changeName = ()=>{
        this.setState({
           name:"PQR",
           age:30
        })
    }
    componentDidMount(){
        console.log("componentDidMount called...");
        setTimeout(()=>{
            this.setState({
                name:"jklm",
                age:27
             })
        },3000)
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called..");
        console.log(props);
        console.log(state);
        return null
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called..");

        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate called..");
        console.log(prevState);
        return null
    }
    componentDidUpdate(){
        console.log("finally component updated...");
        
    }
  render() {
    console.log("render called...");

    return (
      <div>
        <h3>Name is -- {this.state.name}</h3>
        <h3>Age is -- {this.state.age}</h3>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}
export default Lifecycleclass