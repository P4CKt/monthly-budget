import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
<div className="bg-[#FFFDE7] h-screen font-sans flex flex-col md:flex-row">
  <div className="flex-1 flex flex-col justify-between">
    <div className="flex h-full items-center md:ml-[55px]">
      <p className="italic font-[400] text-xl md:text-4xl">
        Calculate Smarter, <br />
        Spend Wiser ...
      </p>
    </div>
    <img src="./img/login-il.png" className="object-fill" alt="Login Image" />
  </div>
  <div className="flex-1 flex flex-col items-center text-red-400 bg-[#1E1E1E] justify-center">
    <div className="flex text-[20px] md:text-[30px] xl:text-[60px]">
      <h1 className=" text-[#FFFDE7]">Monthly</h1>
      <h1 className=" text-[#51D289]">Budget</h1>
    </div>
    <form className="flex flex-col w-2/3 text-[12px] sm:text-[20px] xl:text-[30px]">
      <input
        id="income"
        type="text"
        placeholder="Insert Your Income"
        className="my-2 sm:my-3 xl:my-4 h-12 sm:h-16 xl:h-20 border-b-2 text-center bg-inherit border-[#A3A3A3]"
      />
      <input
        id="name"
        type="text"
        placeholder="Insert Your Name"
        className="my-2 sm:my-3 xl:my-4 h-12 sm:h-16 xl:h-20 border-b-2 text-center bg-inherit border-[#A3A3A3]"
      />
      <input
        id="goals"
        type="text"
        placeholder="Insert Your Goals"
        className="my-2 sm:my-3 xl:my-4 h-12 sm:h-16 xl:h-20 border-b-2 text-center bg-inherit border-[#A3A3A3]"
      />
      <button className="bg-[#FFE600] text-black text-[12px] sm:text-xl my-2 sm:my-3 py-1 sm:py-3 rounded-[4px]">
        Start Your Calculation
      </button>
    </form>
  </div>
</div>

  
  );
}
