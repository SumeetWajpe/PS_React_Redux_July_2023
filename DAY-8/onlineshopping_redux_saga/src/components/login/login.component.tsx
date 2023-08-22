import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuthenticated } from "../../redux/slices/auth.slice";

type LoginInput = {
  uname: string;
  pwd: string;
};
const Login: React.FC = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form
          onSubmit={handleSubmit((data: LoginInput) => {
            // console.log(data);
            // hash password & send
            fetch("http://localhost:5555/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then(res => res.json())
              .then(response => {
                // console.log(response);
                sessionStorage["jwt-token"] = response.token;
                dispatch(
                  setUserAuthenticated({
                    isUserAuthenticated: true,
                    uname: data.uname,
                    token: response.token,
                  }),
                );
                // dispatch an (redux) action (payload : token,username,isUserAuthenticated)
                navigate(location.state ?? "/dashboard", { replace: true }); // replace the entry in history
              });
          })}
        >
          <input
            type="text"
            className="fadeIn second login-input"
            placeholder="login"
            {...register("uname")}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third login-input"
            placeholder="password"
            {...register("pwd")}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
