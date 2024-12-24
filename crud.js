let allData =  []
const saveData = ()=>{
    let getData = JSON.parse(localStorage.getItem("userinfo"))
    // let len = getData!=null? getData.length+1:1
    let len
    if(getData != null){
        len = getData.length + 1
    } else {
        len = 1
    }

    let nm = document.userfrm.name.value
    let age = document.getElementById('age').value
    let obj = {
        id:len,
        name:nm,
        age:age
    }
    allData.push(obj)
    localStorage.setItem("userinfo",JSON.stringify(allData))
    disp()
    document.userfrm.reset()
}
const disp = ()=>{
    let getData = JSON.parse(localStorage.getItem("userinfo"))
    let tr =''
    getData.map((i)=>{
        tr += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>Delete</td>
                </tr>
        `
    })

    document.getElementById("userdata").innerHTML = tr
}

disp()