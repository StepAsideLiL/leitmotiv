import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/ui/Main";
import { useForm } from "react-hook-form";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import useFireAuth from "../../hooks/useFireAuth";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  useDynamicTitle("Login");

  const { auth, loginWithPassword } = useFireAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLoginFormSubmission = (data) => {
    console.log(data);
    const { email, password } = data;

    loginWithPassword(auth, email, password)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        if (err?.message.includes("auth/user-not-found")) {
          toast.error("User Not Found!");
        }
      });
  };

  return (
    <Main className="flex items-center justify-center">
      <div className="w-full max-w-sm shadow-2xl card bg-base-100">
        <form
          onSubmit={handleSubmit(handleLoginFormSubmission)}
          className="card-body"
        >
          <h2 className="my-5 text-2xl text-center">
            Login to{" "}
            <Link to="/" className="underline">
              Leitmotiv Academy
            </Link>
          </h2>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="mt-6 form-control">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>

          <div className="divider">OR</div>

          <div className="text-center">
            <Link to="/signup" className="text-sm text-center underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default LoginPage;
