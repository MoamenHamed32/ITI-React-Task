import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section id="login">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="email d-flex flex-column gap-2 position-relative ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
            />

            {errors?.email && (
              <span className="text-danger fw-semibold ">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="password d-flex flex-column gap-2 position-relative">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
              })}
            />
            {errors?.password && (
              <span className="text-danger fw-semibold ">
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-success ">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
