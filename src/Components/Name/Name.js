import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Name(props) {

    const[flag,setFlag] = useState(false);
    const[pay,setPay]=useState();
    const[company,setCompany]=useState('');

    const savepay=()=>{

      {props.addPay(pay,company,props.i)}
      {change()}

    }
    
    const show=()=>{
        
        if(flag == true){
        return(<div>
            <div>
           <br />
            <input onChange={e => setPay(e.target.value)} type="number"  placeholder="paymant"></input>
            <br/>
            <input onChange={e => setCompany(e.target.value)} type="text"  placeholder="Company"></input>
            <br/>
            <button onClick={savepay}>Pay</button>
           
        </div>
            </div>
        )
        }

    }



    const change=()=>{
     setFlag(!flag);
    }



    const showMoney=()=>{
        alert('you have '+ props.element.money + ' in your acount')
    }




    return (
        <div>
           <h2>welcome</h2>
           <h2>{props.element.userName}</h2> 
           <br />
           <button onClick={showMoney}>BALANCE</button>
           <button onClick = {change}>Action</button>
           <br/>
         
           <Link to='/'><button>EXIT</button></Link> 
           <br />
           {show()}
        </div>
    )
}
