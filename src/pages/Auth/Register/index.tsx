import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/hooks/useRedux";
import { AppContext } from "src/contexts/app.context";
import { useForm } from "react-hook-form";
import { ErrorResponse } from "src/types/utils.type";
import { toast } from "react-toastify";
import Input from "src/components/Input";
import { Schema, SchemaRegister, schema, schemaAddUser } from "src/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { login, registerUser } from "src/store/user/userSlice";
import { isAxiosUnprocessableEntityError } from "src/utils/utils";
import { setAccessTokenToLS, setRefreshTokenToLS } from "src/utils/auth";
import { Helmet } from "react-helmet-async";
// import logo from "./logo-main.png";
import logo from "src/assets/images/logotechstore.jpg";

import Button from "../Button";
import SelectCustom from "src/components/Select";
import path from "src/constants/path";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
  } = useForm({
    resolver: yupResolver(schemaAddUser),
  });

  const onSubmit = handleSubmit(async (data) => {
    const body = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      password: data.password,
      email: data.email,
      gender: Number(data.gender),
      address: data.address,
      imageUrl: "",
    };
    try {
      await setIsSubmitting(true);
      const res = await dispatch(registerUser(body));
      unwrapResult(res);
      const d = res?.payload.data;
      if (d?.code !== 200) return toast.error("Lỗi đăng ký tài khoản");
      // await setIsAuthenticated(true);
      toast.success("Đăng ký thành công");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error: any) {
      if (
        isAxiosUnprocessableEntityError<ErrorResponse<SchemaRegister>>(error)
      ) {
        const formError = error.response?.data.data;
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof SchemaRegister, {
              message: formError[key as keyof SchemaRegister],
              type: "Server",
            });
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className=" items-start bg-white  m-auto mb-5 flex justify-center  h-screen">
      <Helmet>
        <title>Đăng ký </title>
        <meta name="description" content="Trang đăng nhập" />
      </Helmet>
      <div className="lg:col-span-2 lg:col-start-4  bg-mainColor/30 w-1/4 md:w-full justify-center m-10 rounded">
        <div className=" ">
          <Link
            to={path.home}
            className=" mt-2 rounded-[30px] p-4 text-xs  text-blue-400 hover:opacity-80"
          >
            <span className="text-2xl mt-4">Trang chủ</span>
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-2xl mt-3">
          <img
            src={logo}
            alt="logo"
            className="w-52 h-32 rounded-md md:hidden"
          ></img>
        </div>
        <form
          className="rounded p-10 md:p-2 shadow-sm"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" flex items-center justify-center text-[25px] text-black">
            Đăng ký
          </div>
          <Input
            name="fullName"
            register={register}
            type="text"
            className="mt-2"
            classNameEye="absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]"
            errorMessage={errors.fullName?.message}
            placeholder="Họ và tên"
            autoComplete="on"
          />
          <Input
            name="phoneNumber"
            register={register}
            type="text"
            className="mt-2"
            errorMessage={errors.phoneNumber?.message}
            placeholder="Số điện thoại"
          />
          <Input
            name="password"
            register={register}
            type="password"
            className="mt-2"
            classNameEye="absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]"
            errorMessage={errors.password?.message}
            placeholder="Password"
            autoComplete="on"
          />
          <Input
            name="email"
            register={register}
            type="text"
            className="mt-2"
            classNameEye="absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]"
            errorMessage={errors.email?.message}
            placeholder="Email"
            autoComplete="on"
          />
          <Input
            name="address"
            register={register}
            type="text"
            className="mt-2"
            classNameEye="absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]"
            errorMessage={errors.address?.message}
            placeholder="Địa chỉ"
            autoComplete="on"
          />

          <SelectCustom
            className={" text-black"}
            id="gender"
            placeholder="Giới tính"
            options={[
              { id: 1, name: "Nam" },
              { id: 2, name: "Nữ" },
            ]}
            register={register}
          >
            {errors.gender?.message}
          </SelectCustom>
          <div className="mt-3 flex justify-center space-x-2 items-center ">
            <Button
              // isNext
              type="submit"
              className="flex w-full items-center justify-center mt-2 rounded bg-mainColor py-3 px-2 text-sm uppercase text-white hover:opacity-80"
            >
              {isSubmitting ? (
                <span className="text-2xl mt-4">Loading...</span>
              ) : (
                <span className="text-2xl mt-4">Đăng ký</span>
              )}
            </Button>
          </div>
          <div className="mt-3 flex justify-center space-x-2 items-center ">
            <Button
              // isNext
              onClick={() => navigate(path.login)}
              type="button"
              className="flex w-full items-center justify-center mt-2 rounded bg-buyColor py-3 px-2 text-sm uppercase text-white hover:opacity-80"
            >
              <span className="text-2xl mt-4">Đăng nhập</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

