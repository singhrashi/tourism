import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-lg shadow-card">
      <img src={props.image} alt="card" className="w-full rounded-l-8"></img>
      <div className="p-6 flex flex-col gap-1.5">
        <p className="font-bold text-2xl leading-5 text-teal">{props.title}</p>
        <p>{props.description}</p>
        <div className="flex justify-end">
          <svg
            className="cursor-pointer hover:shadow-card rounded-[20px]"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#E6F2F2" />
            <path
              d="M20 28L18.575 26.6L24.175 21H12V19H24.175L18.575 13.4L20 12L28 20L20 28Z"
              fill="#008080"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
