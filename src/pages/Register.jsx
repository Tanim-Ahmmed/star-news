
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createNewUser, setUser,  updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister= (e) =>{
        e.preventDefault();

        const form   = new FormData(e.target);
        const name   = form.get("name");
        const photo  = form.get("photo");
        const email  = form.get("email");
        const pass   = form.get("password");
        console.log({name, email, photo,pass});

        createNewUser(email,pass)
        .then(res=> {
            const user = res.user;
            setUser(user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
              navigate("/")
            })
            .catch((err)=>console.log(err.code));
        } )
        .catch((error) => console.log(error.code));
    }

    return (
        <div className= "min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered"
                  required
                />
              </div>

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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Register</button>
              </div>
            </form>
            <p className="text-center py-2">already have account? <Link className="text-red-500 font-bold " to="/auth/login">Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;