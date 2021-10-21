import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"

export default function HomePage(props) {
    
    const [nameR, setNameR] = useState("");
	const [passwordR, setPasswordR] = useState("");
    var history = useHistory()
    
    const checkUser = () => {
		if(nameR=='ADMIN'&& passwordR=='ADMIN'){
             history.push('/Admin')
             return
        }
        for(let i=0;i<props.users.length;i++){
            if(props.users[i].userName==nameR){
                if(props.users[i].password==passwordR){
                  history.push('/' + props.users[i].userName)  
                  return
                }
               else{
                alert('wrong password')
                return
            }
        } 
            }
            alert('wrong userNme')
            
	}


    return (
        <div>
            <h2>SV-BANK</h2>
            
			<input onChange={e => setNameR(e.target.value)} type="text" id="name" placeholder="User Name"></input>
			<br />
			<span id="nameError"></span>
			<br />
			<br />

			<input onChange={e => setPasswordR(e.target.value)} type="password" id="password" placeholder="Password"></input>
			<br />
			<span id="passwordError"></span>
			<br />
			<br />
              <Link to='/register'><button>Create new user</button></Link>
             <br />
			<button onClick={checkUser}> Sign Up </button>
        </div>
    )
}
