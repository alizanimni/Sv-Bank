import React, {useState} from 'react'

export default function Admin(props) {
 

    return (
        <div>
            <h2>Manager</h2>
            {props.users.map((element,i)=>{
          return(
            <div style={{border:'1px black solid'}}>
                {element.id}
                {element.userName}
                <button>+</button>
                <div>
                    {element.spend.map((element, idx)=>{
                        return(
                            <div>
                            {element.company}
                            {element.pay}
                            <button onClick={()=>props.deleteSpend(i,idx)}>X</button>
                            </div>
                        )
                        
                    })}
                    <button onClick={()=>props.deleteUser(i)} >Cancel</button>
                </div>
               
            </div>
           )

          })}
          
        </div>
    )
}
