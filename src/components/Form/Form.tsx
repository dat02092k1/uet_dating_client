import React from "react";
import "./Form.css";
import { useCreateUser, useGetUsers } from "../../hook/useUsers";
import { isError } from "@tanstack/react-query";

export default function Form() {
  const { data, isLoading, isError } = useGetUsers();

  const create_user = useCreateUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    console.log(data.user);
    await create_user.mutateAsync({ name: data.user as string });
    form.reset();
  };
  return (
    <>
      {isLoading && <span>fetching a character...</span>}
      {isError && <span>Oops, something went wrong</span>}
      <div className="form-container rounded-[10px] flex flex-col items-center justify-center h-[700px] w-[450px] m-auto">
        <div className="form-content flex flex-col text-center items-center">
          <h2 className="text-white text-[55px] mt-[6px]">
            <a href="">DateSpace</a>
          </h2>

          <h3 className="text-[#ffffff] text-[25px] italic mt-[120px] uppercase">
            Login
          </h3>

          <p>
            By continuing you agree to our terms and conditions of use as well
            as our cookie policy.
          </p>

          <form action="" className="mt-[20px] w-full" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <input className="btn-login" type="submit" value="Login" />
          </form>

          <p>
            Don't you have an account ?<a href="">Register</a>
          </p>
        </div>
      </div>
    </>
  );
}
