import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useRef, useState } from "react";

const Login = () => {
  const { userLogin, mediasignin, passwordreste } = useAuth();
  const [success, setSuccess] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const emailref = useRef();
  const handlelog = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setSuccess("");
    seterror("");

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("login success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        seterror("password not match");
      });
  };

  const handlemidia = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetPass = () => {
    const email = emailref.current.value;
    passwordreste(email).then().then();
  };
  return (
    <>
      <div className="flex justify-center items-center my-20">
        <form onSubmit={handlelog} className="flex flex-col gap-3 border p-10">
          <h1 className="text-4xl font-rancho text-[#FF4512] text-center mb-5">
            Login{" "}
          </h1>
          <label htmlFor="email">
            <h1 className=" font-semibold">Email :</h1>
            <input
              ref={emailref}
              className="outline-none border p-2 text-[#FF4512] md:w-[500px] my-3"
              type="email"
              name="email"
              id="8"
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className=" font-semibold">Password :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[500px] mt-3"
              type="password"
              name="password"
              id="9"
              required
            />
          </label>
          <div>
            <h1
              onClick={resetPass}
              className="text-xs text-red-500 cursor-pointer hover:border-b inline-block border-red-500"
            >
              forget password?
            </h1>
          </div>
          <div>
            <input
              className="w-full p-2 bg-[#FF4512] hover:bg-opacity-90 text-white font-rancho text-2xl"
              type="submit"
              value="Login"
            />
          </div>
          {error && <h1 className="text-xs text-red-500">{error}</h1>}
          {success && <h1 className="text-xs text-green-500">{success}</h1>}
          <div className="flex justify-center items-center gap-5">
            <div className="border-2 w-40 border-black"></div>
            <div className="text-3xl font-rancho">or</div>
            <div className="border-2 w-40 border-black"></div>
          </div>
          <div className="flex justify-center gap-5 text-3xl">
            <BsFacebook className="text-blue-700 hover:scale-125 duration-300 cursor-pointer"></BsFacebook>
            <FcGoogle
              onClick={() => handlemidia(mediasignin)}
              className="hover:scale-125 duration-300 cursor-pointer"
            ></FcGoogle>
            <BsGithub className="hover:scale-125 duration-300 cursor-pointer"></BsGithub>
          </div>
          <h1 className="mt-5">
            Yue have not a account?{" "}
            <Link to={"/register"} className="text-red-500 font-bold">
              Register
            </Link>
          </h1>
        </form>
      </div>
    </>
  );
};

export default Login;
