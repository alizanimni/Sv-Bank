import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js';
import Register from './Components/Register/Register.js';
import Name from './Components/Name/Name.js';
import Admin from './Components/Admin/Admin.js';

function App() {
  const [users, setUsers]=useState([{id:147852369,userName:'ELDAD',password:14228,money:1452,spend:[{pay:52,company:'ebay'}]},{id:582963147,userName:'ASAF',password:'ASAF12',money:2563,spend:[{pay:52,company:'ebay'},{pay:852,company:'NIKE'}]}])
  
  const saveUser=(id,userName,password,money)=>{
        setUsers([...users,{id:id,userName:userName,password:password,money:money,spend:[]}])
  }

  const deleteUser=(i)=>{
    debugger
    let temp=users
    temp.splice(i,1);
    setUsers(temp)
  }

  const deleteSpend=(i,idx)=>{
    debugger
    let temp=users
    temp[i].spend.splice(idx,1);
    setUsers(temp)
  }
  
  const addPay=(pay,company,idx)=>{
    debugger
      let tempusers= users;
     let tempspend= tempusers[idx].spend;
     tempspend.push({pay:pay,company:company})
     tempusers[idx].spend=tempspend
     tempusers[idx].money= tempusers[idx].money-pay
     setUsers(tempusers);
  }

  return (
    <div className="App">
   <Router>

<Switch>
 
 <Route exact path='/' component={() => {return <HomePage  users={users}/>}}/>
 <Route exact path='/register' component={() => {return <Register saveUser={saveUser}  />}}/>
 {users.map((element,i)=>{
          return(
            <Route exact path = {`/${element.userName}`} component={()=>{return <Name element={element} i={i} addPay={addPay}/>}} />
           )

          })}
 <Route exact path='/Admin' component={() => {return <Admin deleteSpend={deleteSpend} deleteUser={deleteUser}  users={users}/>}}/>
 <Route exact path='/Edit' component={() => {return <Register  users={users}/>}}/>
</Switch>


</Router>
    </div>
  );
}

export default App;
