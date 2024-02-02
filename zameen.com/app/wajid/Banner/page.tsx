
import { IoIosArrowDown } from "react-icons/io";
import React from "react";

const page = () => {
  return (
    <>
      <div className="back flex justify-center items-center h-[80vh] w-[100%] ">
        <div className=" w-[50%] ">
          <div className="h-[100px]  flex  items-center flex-col  w-[100%]">
            <h1 className="text-2xl text-white mt-3 ">
              Search properties for sale in Pakistan
            </h1>
            <div className="w-[50%] flex justify-around items-center  ">
              <button className="text-black text-[18px] font bg-white h-[40px] w-[100px]">
                Buy
              </button>
              <button className="text-white text-[18px] border h-[40px] w-[100px]">
                Rent
              </button>
              <button className="text-white border  text-[18px] h-[40px] w-[100px]">
                Projects
              </button>
            </div>
          </div>
          <div className="h-[130px] w-[100%] bg-[#00000099]  p-1">
            <div className="flex justify-around items-center">
              <select className="h-[60px]  rounded-md pl-3 w-[180px] bg-[white]">
                <option value="">Lahore </option>
                <option value="">CITY</option>
                <option value="">Islamabad</option>
                <option value="">Koitta</option>
                <option value="">Karachi</option>
              </select>
              <input
                type="text"
                className="h-[60px] rounded-sm w-[300px] bg-[white] pl-5"
                placeholder="Location"
              />
              <button className="h-[60px] w-[100px] rounded-sm text-[17px] text-white bg-[#33A137]">
                Find
              </button>
            </div>
            <div className="h-[50px] w-[100%] mt-3">
                <div className="flex ">

            <IoIosArrowDown className="text-[silver] ml-2"/>
                <li  className="list-none ml-2 text-[silver]">More Options</li>

                    <li className="border-r-white text-sm border-l-2 pl-1   list-none text-[#1084B7] ml-3">Change Currency</li>
                    <li className="border-r-white text-sm border-l-2 pl-1   list-none text-[#1084B7] ml-3"> Change Area Unit </li>
                    <li className="border-r-white text-sm border-l-2 pl-1   list-none text-[#1084B7] ml-3"> Reset Search </li>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
