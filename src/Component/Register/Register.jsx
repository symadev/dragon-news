import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
//import create user
const {createUser,setUser,updateUserProfile} = useContext(AuthContext);



//this is for localhost a provided information gulo dekhar jonne
  const handleRegister= (event)=>{
    event.preventDefault();
    const form = new FormData(event.target);
    const email=form.get("email");
    
    const password=form.get("password");
    
     console.log(email,password);




//for create user
     createUser(email,password)
     .then(result =>{
       const user= result.user
       setUser(user);
       updateUserProfile({
        displayName: name,});

      
     })
     .catch(error=>{
        console.log('Error', error.message);
     })

  }
    return (
       
        <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form  onSubmit={ handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control items-center mt-6 ml-8">
              <button className="btn btn-wide btn-accent">Register</button>
            </div>
          </form>
         
        </div>
      </div>
    );
};

export default Register;