import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SingUp = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [success,setSuccess] = useState(false);
    const [showPassword,setShowPassword] = useState(false);

    const handleSingUp = (e)=>{
        e.preventDefault();
        // value collect
        const email = (e.target.email.value);
        const password = (e.target.password.value);
        const terms = (e.target.checkbox.checked);
        console.log(email,password,terms)
        // first error message empty
        setErrorMessage('')
        setSuccess(false)

        // password length check
        if(password.length < 6){
            setErrorMessage("Password should be 6 character no longer")
            return;
        }

        // password character check
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if(!passwordRegex.test(password)){
            setErrorMessage("Al least one uppercase, one lowercase and special number")
            return;
        }

        // terms check
        if(!terms){
            setErrorMessage("Please accept out terms and condition")
            return;
        }

        // create email and password
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error=>{
            console.log(error.message)
            setErrorMessage(error.message)
            setSuccess(false)
        })
    }
    return (
       
                <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
                <h1 className="text-3xl font-bold text-center">Sing Up</h1>
                    <form className="card-body" onSubmit={handleSingUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                            name="email"
                            placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? 'text':'password'} 
                            name="password"
                            placeholder="password" className="input input-bordered" required />

                            <button
                            onClick={()=>setShowPassword(!showPassword)}
                             className="absolute  left-[280px] top-[52px]">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                                
                            </button>

                            <label className="label justify-start gap-2">
                            <input type="checkbox" name="checkbox" className="checkbox text-xs" />
                            
                                <a href="#" className="label-text-alt link link-hover">Accept Our Terms And Condition?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing Up</button>
                            
                        </div>
                        {
                            errorMessage && <p className="text-red-500">{errorMessage}</p>
                        }

                        {
                            success && <p className="text-green-500">Sing Up is successful.</p>
                        }
                    </form>
                </div>
            
    );
};

export default SingUp;