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
    let id = document.userfrm.userid.value
    let age = document.getElementById('age').value
    if(id==''){
        //insert 
        let obj = {
            id:len,
            name:nm,
            age:age
        }
        allData.push(obj)
        // localStorage.setItem("userinfo",JSON.stringify(allData))

    } else {
        //update
        let res = getData.map((i)=>{
            if(i.id == id){
                i.name = nm
                i.age = age
            }
            return i
        })
        allData = res
        // localStorage.setItem("userinfo",JSON.stringify(res))
    }
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
                    <td>
                    <button onclick="editData(${i.id})">Edit</button>
                    <button onclick="delData(${i.id})">Delete</button>
                    </td>
                </tr>
        `
    })

    document.getElementById("userdata").innerHTML = tr
}
const delData = (id)=>{
    let getData = JSON.parse(localStorage.getItem("userinfo"))
    let res = getData.filter((i)=>{
        return i.id != id //1  3 4== 2 
    })
    localStorage.setItem("userinfo",JSON.stringify(res))
    disp()
}

const editData = (id)=>{
    let getData = JSON.parse(localStorage.getItem("userinfo"))
    let res = getData.find((i)=>{
        return i.id == id //1  3 4== 2 
    })
    document.userfrm.name.value = res.name
    document.userfrm.userid.value = res.id
    document.getElementById('age').value = res.age
    
    
}

disp()