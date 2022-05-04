import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
 import NavBar from './NavBar';
import "./Signup.css";

const Signup = () => {

const navigate=useNavigate();
const [form,setForm]=useState("");

const Handlechange=(e)=>{
    const {name,value} =e.target;
    setForm({...form,[name]:value});
    console.log(value.length)
};
const Handleclick=(e)=>{
    e.preventDefault();
};














  return (

    <div>
        <NavBar />
        <div className="top-signup">
            <div className="signup_form">
                <div className="wel_Login_btn">
                    <div className="signup_title">Welcome</div>
                    <div>
                        <button onClick={()=>handleLogin()} className="Login_btn">Login</button>
                    </div>
                </div>

                <div className="signup_subtitle">Lets create your account !</div>
                <div className="signup_input-container sn_ic1">
                    <input type="text" name="Name" id="firstname" className='signup_input' placeholder=' ' />
                    <div className="signup_cut"></div>
                    <label for="firstname" className='signup_placeholder'>First name</label>
                </div>
                <div className="signup_input-container sn_ic2">
                    <input type="text"  onChange={Handlechange} name="Email"
                    id="email" className="signup_input" placeholder=" " />
                    <div className=" className='signup_cut signup_cut-short"></div>
                    <label for="email" className='signup_placeholder'>Email</label>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Signup