import React from 'react';
import './HelloComponent.css';

const HelloComponent = () =>{
    return (
        <div>
            <br/>
            <br/>
            <h1>Login Form</h1>
            <form>
                <center><h1>Tugas Pertemuan Ketiga</h1></center>
                <div className="formcontainer">
                <hr/>
                <div className="container">
                    <label for="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                </div>
                <button type="submit">Login</button>
                <div className="container" >
                    <center>
                    <label ><input type="checkbox"  name="remember"/> Remember me </label>
                    </center>
                </div>
                <center><button type="submit" className="button1">Cancel</button></center>
                </div>
            </form>
        </div>
    );
}

export default HelloComponent
// agar component ini dipakai dimana saja
// export default HelloWorld