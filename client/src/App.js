import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import {Button} from 'antd'
import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Tests from './pages/Tests';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path = '/'  element= {<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path = '/test'  element= {<ProtectedRoute><Tests/></ProtectedRoute>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute(props){
    if(localStorage.getItem('expense-tracker')){
        return props.children
    }
    else{
      return <Navigate to = '/login'/>
    }
}


export default App;
