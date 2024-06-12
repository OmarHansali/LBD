/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../../api/axios";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e: any) => {
    setIsLoading(true)
    e.preventDefault();
    if (!userName && !password) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } else if (!password) {
      toast.warning("Please provide password.", { position: "top-right" });
    } else if (!userName) {
      toast.warning("Please provide user name.", { position: "top-right" });
    } else {

      await Axios.post("/auth/login", {
        username: userName,
        password: password
      })
        .then((res) => {
          console.log(res);

        }).finally(() => {
          setIsLoading(false)
        })
      // If the form is successfully submitted, show a success toast
      // toast.success("Signed In successfully!", { position: "top-right" });
      // setUserName("");
      // setPassword("");
    }
  };



  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="login-username"
        id="login-username"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="sign-in-checkbox-container d-flex justify-content-between">
        <div className="stay-sign-in">
          <input
            type="checkbox"
            name="sign-in-checkbox"
            id="sign-in-checkbox"
          />
          <label htmlFor="sign-in-checkbox">Stay Logged in</label>
        </div>
        <Link to="#" className="password-recovery-btn">
          Forgot Your Password?
        </Link>
      </div>

      <button type="submit" className="tl-1-banner-btn single-form-btn">
        {
          isLoading &&
          <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
          </svg>
        }
        {isLoading ? "Loading...." : "Log in"}
      </button>
    </form>
  );
};

export default LoginForm;
