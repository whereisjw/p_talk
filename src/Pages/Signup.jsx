import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const From = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    input {
      color: var(--text);
      background-color: transparent;
      padding: 15px 0;
      width: 100%;
      border: none;
      font-size: 18px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 25px;
      transition: border-color 0.5s ease-in-out;
      &.active::placeholder {
        color: red;
      }
    }
    input::placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-size: 0.8rem;
    }
    input:focus {
      outline: none;
      border-color: var(--accent);
    }
    input[type="submit"],
    input[type="button"] {
      background-color: var(--accent);
      cursor: pointer;
      padding: 20px 0;
      border: none;
      border-radius: 5px;
    }
    a {
      text-align: center;
      font-size: 14px;
    }
  }
`;
const Signup = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const onValid = (data) => {
    console.log(data);
    setValue("id", "");
    setValue("pass", "");
    setValue("name", "");
    axios
      .post(`http://127.0.0.1:4845/signup`, data)
      .then((res) => alert("회원가입 완료"));
    navigate("/");
  };

  return (
    <From onSubmit={handleSubmit(onValid)} action="/singup" method="post">
      <fieldset>
        <input
          className={errors.id && "active"}
          {...register("id", { required: true, minLength: 4, maxLength: 8 })}
          type="text"
          placeholder="4-8 자리 아이디를 입력해주세요"
        />
        {errors.id && setValue("id", "")}

        <input
          className={errors.pass && "active"}
          {...register("pass", { required: true, minLength: 4, maxLength: 12 })}
          type="password"
          placeholder="4-12자리 비밀번호를 입력해주세요"
        />
        {errors.pass && setValue("pass", "")}
        <input
          className={errors.name && "active"}
          {...register("name", { required: true, maxLength: 4 })}
          type="text"
          placeholder="4자리 이내 닉네임을 입력해주세요"
        />
        {errors.name && setValue("name", "")}
        <input type="file" placeholder="4자리 이내 닉네임을 입력해주세요" />
        <input type="submit" value="Sign Up" />

        <Link to="/">로그인 페이지로 가기</Link>
      </fieldset>
    </From>
  );
};

export default Signup;
