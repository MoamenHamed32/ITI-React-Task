import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import "./Register.css";

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const hoppiesOptions = [
    { value: "web-design", label: "Web Design" },
    { value: "painting", label: "Painting" },
    { value: "football", label: "Football" },
    { value: "watching-anime", label: "Watching Anime" },
    { value: "online-games", label: "Online Games" },
  ];

  const confirm = useRef("");
  const matchPasswords = (value) => {
    confirm.current = value;
  };

  const passwordMatchValidate = () => {
    const password = getValues("password");
    return password === confirm.current || "Not Matches";
  };
  return (
    <section id="register">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="email d-flex flex-column gap-2 position-relative ">
            <label htmlFor="email">* Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                  message: "Email is Not Valid",
                },
              })}
            />

            {errors?.email ? (
              <div className="validation">
                <span className="text-danger fw-semibold ">
                  {errors.email.message}
                </span>
                <div className="not-valid"></div>
              </div>
            ) : (
              <div className="valid"></div>
            )}
          </div>
          <div className="password d-flex flex-column gap-2 position-relative">
            <label htmlFor="password">* Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Atleast One Special Char, One UpperCase Char and One Number",
                },
                minLength: { value: 8, message: "Minimum Length is 8" },
                maxLength: { value: 15, message: "Maximum Length is 15" },
              })}
            />
            {errors?.password ? (
              <div className="validation">
                <span className="text-danger fw-semibold ">
                  {errors.password.message}
                </span>
                <div className="not-valid"></div>
              </div>
            ) : (
              <div className="valid"></div>
            )}
          </div>
          <div className="confirm d-flex flex-column gap-2 position-relative">
            <label htmlFor="confirm">* Confirm Password</label>
            <input
              type="password"
              {...register("confirm", {
                onChange: (e) => {
                  matchPasswords(e.target.value);
                },
                required: "Confirmation is Required",
                validate: passwordMatchValidate,
              })}
            />
            {errors?.confirm ? (
              <div className="validation">
                <span className="text-danger fw-semibold ">
                  {errors.confirm.message}
                </span>
                <div className="not-valid"></div>
              </div>
            ) : (
              <div className="valid"></div>
            )}
          </div>
          <div className="age d-flex flex-column gap-2 position-relative">
            <label htmlFor="age">* Age</label>
            <input
              type="number"
              min={18}
              max={99}
              {...register("age", {
                required: "Age is Required",
                min: { value: 18, message: "Minimum Valid Age is 18" },
                max: { value: 99, message: "You Passed The Maximum Valid Age" },
              })}
            />
            {errors?.age ? (
              <div className="validation">
                <span className="text-danger fw-semibold ">
                  {errors.age.message}
                </span>
                <div className="not-valid"></div>
              </div>
            ) : (
              <div className="valid"></div>
            )}
          </div>
          <div className="gender d-flex flex-column gap-2 position-relative">
            <label htmlFor="gender">* Gender</label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Gender is Required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={genderOptions}
                  isClearable={true}
                  isSearchable={true}
                  value={field.value}
                />
              )}
            />

            {errors?.gender && (
              <span className="text-danger fw-semibold ">
                {errors.gender.message}
              </span>
            )}
          </div>
          <div className="hoppies d-flex flex-column gap-2 position-relative">
            <label htmlFor="hoppies">Hoppies</label>
            <Controller
              name="hoppies"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  options={hoppiesOptions}
                  isClearable={true}
                  isSearchable={true}
                  value={field.value}
                  isMulti
                />
              )}
            />
          </div>

          <button type="submit" className="btn btn-success ">
            Sign UP
          </button>
        </form>
        <DevTool control={control}></DevTool>
      </div>
    </section>
  );
}
