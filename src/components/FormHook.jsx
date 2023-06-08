// import { createContext } from "react";
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example")); // watch input value by passing the name of it

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 class="text-xl font-bold text-black  capitalize dark:text-black ">
              Account settings
            </h1>
            <div className="mb-5">
              <label class="text-black  dark:text-gray-200" for="username">
                Username
              </label>
              <input
                {...register("Username", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.Username && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mb-5">
              {" "}
              <label class="text-black  dark:text-gray-200" for="emailAddress">
                Email Address
              </label>
              <input
                {...register("Email", { required: true })}
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.Email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mb-5">
              <label class="text-black  dark:text-gray-200" for="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.Email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mb-5">
              <label
                class="text-black  dark:text-gray-200"
                for="passwordConfirmation"
              >
                Password Confirmation
              </label>
              <input
                {...register("Confirmation", { required: true })}
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.Confirmation && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mb-5">
              <label
                class="text-black  dark:text-gray-200"
                for="passwordConfirmation"
              >
                Date
              </label>
              <input
                {...register("date", { required: true })}
                id="date"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.Confirmation && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="mb-5">
              <label
                class="text-black  dark:text-gray-200"
                for="passwordConfirmation"
              >
                Text Area
              </label>
              <textarea
                {...register("textarea", { required: true })}
                id="textarea"
                type="textarea"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
              {errors.textarea && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <input
              type="submit"
              className="py-4 px-20 bg-blue-500 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormHook;
