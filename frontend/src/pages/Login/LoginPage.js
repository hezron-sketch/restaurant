import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./loginPage.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate("/");
  }, [user]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Login | Register" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "Email is NOT valid",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="Password"
            {...register("password", {
              required: true,
            })}
            error={errors.password}
          />
          <Button type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
}
