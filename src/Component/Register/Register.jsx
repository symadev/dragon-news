

const Register = () => {
    return (
       
        <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control items-center mt-6 ml-8">
              <button className="btn btn-wide btn-accent">Login</button>
            </div>
          </form>
         
        </div>
      </div>
    );
};

export default Register;