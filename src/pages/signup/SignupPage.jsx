import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/ui/Main";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import useFireAuth from "../../hooks/useFireAuth";
import api from "../../utils/apiInstance";

const SignupPage = () => {
  useDynamicTitle("Sign Up");

  const { auth, createUser, logout } = useFireAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  if (errors?.password?.type === "minLength") {
    toast.error("Password must be at least 6 characters!");
  }

  const handleSignUpFormSubmission = (data) => {
    const { email, password } = data;

    createUser(auth, email, password)
      .then((userInfo) => {
        if (userInfo) {
          api
            .post("/users/register", data)
            .then((res) => {
              console.log(res.data);
              toast.success("Account Created! Login Now!");
              logout(auth);
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err?.message);
        if (err?.message.includes("email-already-in-use")) {
          toast.error("Email already in use!");
        }
      });
  };

  return (
    <Main className="flex items-center justify-center">
      <div className="w-full max-w-sm shadow-2xl card bg-base-100">
        <form
          onSubmit={handleSubmit(handleSignUpFormSubmission)}
          className="card-body"
        >
          <h2 className="my-5 text-2xl text-center">Make An Account</h2>

          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="image">
              <span className="label-text">Image URL</span>
            </label>

            <input
              type="url"
              id="image"
              {...register("image", { required: true })}
              placeholder="Enter Your Image URL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter Email"
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
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Enter Password"
              className="input input-bordered"
            />
          </div>

          <div className="mt-6 form-control">
            <button className="btn btn-primary" type="submit">
              Create Account
            </button>
          </div>

          <div className="divider">OR</div>

          <div className="text-center">
            <Link to="/login" className="text-sm text-center underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default SignupPage;
