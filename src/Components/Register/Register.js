import React, {useState} from 'react'
import { useHistory } from "react-router-dom"


export default function Register(props) {

    var history = useHistory()

    const[id,setId]=useState('');
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[passAgain,setPassAgain]=useState('');
    const[money,setMoney]=useState('');

    const createUser = () => {
        
         if(id.length!=9){
             alert('id must be 9 numbers')
             return
         }
        for(let i=0;i<id.length;i++){
            if(id[i]>=0 && id[i]<=9){
                continue
            }
            else{
                alert('id must be numbers only')
            }
         }
        
        
        if(userName.length<4){
            alert('User Name must be mininum 4 tabs')
            return
        }
        if(password.length<6){
            alert('password must be mininum 6 tabs')
            return
        }
        if(password != passAgain){
            alert('confirm password must be the same')
            return
        }
        if(money<0 || money>1000000){
            alert('money nust be betwin 0-1000000')
            return
        }
       
        

       {props.saveUser(id,userName,password,money)}

       history.push('/'+ userName)

	}
    







    return (
        <div>
            <h2>Register</h2>
            <br />
            <input onChange={e => setId(e.target.value)} type="number"  placeholder="ID"></input>
            <br/>
            <input onChange={e => setUserName(e.target.value)} type="text"  placeholder="User Name"></input>
            <br/>
            <input onChange={e => setPassword(e.target.value)} type="password"  placeholder="Password"></input>
            <br/>
            <input onChange={e => setPassAgain(e.target.value)} type="password"  placeholder="Confirm Pass"></input>
            <br/>
            <input onChange={e => setMoney(e.target.value)} type="number"  placeholder="Money"></input>
             <br/>
             <br/>
             <button onClick={createUser}>Create</button>


        </div>
    )
}
