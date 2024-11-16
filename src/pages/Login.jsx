import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log({email,pass})

        userLogin(email,pass)
        .then((res)=>{
            const user = res.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) =>{
            alert(error.code);
        })
    }
  return (
    <div className= "min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
            </form>
            <p className="text-center py-2">don't have account? <Link className="text-red-500 font-bold " to="/auth/register">Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
