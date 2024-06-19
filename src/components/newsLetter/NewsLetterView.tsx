import React from "react";
import Button from "../button/Button";

const NewsLetterView = () => {
  return (
    <div className="flex bg-neutral-white w-full h-52 my-10 justify-around items-center">
      <div className="flex flex-col">
        <label className="font-bold text-2xl text-neutral-900">
          Join Our Newsletter
        </label>
        <label className="text-sm text-neutral-500 mt-5">
          We love to surprise our subscribers with occasional gifts.
        </label>
      </div>
      <div className="flex space-x-4 w-96">
        <input
          type="email"
          id="email"
          className="border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Your email address"
        />
        <Button icon={false} label="Subscribe" />
      </div>
    </div>
  );
};

export default NewsLetterView;
