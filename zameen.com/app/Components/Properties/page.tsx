"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsBuildingLock } from "react-icons/bs";

const page = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const [secondTabSelected, setSecondTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });
  const [thirdTabSelected, setThirdTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
      const newTab =
        e.keyCode === 39
          ? (tabSelected.currentTab % tabSelected.noTabs) + 1
          : e.keyCode === 37
          ? ((tabSelected.currentTab - 2 + tabSelected.noTabs) %
              tabSelected.noTabs) +
            1
          : tabSelected.currentTab;

      setTabSelected({
        ...tabSelected,
        currentTab: newTab,
      });
    }
  };
  const handleKeyDowns = (e) => {
    if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
      const newTab =
        e.keyCode === 39
          ? (secondTabSelected.currentTab % secondTabSelected.noTabs) + 1
          : e.keyCode === 37
          ? ((secondTabSelected.currentTab - 2 + secondTabSelected.noTabs) %
              secondTabSelected.noTabs) +
            1
          : secondTabSelected.currentTab;

      setSecondTabSelected({
        ...secondTabSelected,
        currentTab: newTab,
      });
    }
  };
  const handleKeyDownss = (e) => {
    if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
      const newTab =
        e.keyCode === 39
          ? (thirdTabSelected.currentTab % thirdTabSelected.noTabs) + 1
          : e.keyCode === 37
          ? ((thirdTabSelected.currentTab - 2 + thirdTabSelected.noTabs) %
              thirdTabSelected.noTabs) +
            1
          : thirdTabSelected.currentTab;

      setThirdTabSelected({
        ...thirdTabSelected,
        currentTab: newTab,
      });
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // });
  return (
    <>
      <div className="h-[60vh] w-[100%] flex flex-col justify-between  items-center ">
        <h1 className="text-[24px] font-semibold flex  self-start pl-9">Browse Properties</h1>
        <div className="h-[50vh] w-[95%] flex justify-between  ">
          <div className="h-[50vh] w-[30%] box  ">
            <div className="h-[8vh] w-[60%] flex gap-3 items-center text-[green] text-[16px] pl-5 ">
              <IoHome />
              <h1 className="text-[black] font-semibold">Homes</h1>
            </div>
            <section className="max-w-full" aria-multiselectable="false">
              <ul
                className="flex items-center border-b border-slate-200"
                role="tablist"
                ref={wrapperRef}
              >
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 1
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-1a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="1"
                    tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                    aria-controls="tab-panel-1a"
                    aria-selected={`${
                      tabSelected.currentTab === 1 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 1 })
                    }
                  >
                    <span className=" font-semibold">Popular</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 2
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-2a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="2"
                    tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                    aria-controls="tab-panel-2a"
                    aria-selected={`${
                      tabSelected.currentTab === 2 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 2 })
                    }
                  >
                    <span className=" font-semibold">Type</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 3
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-3a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="3"
                    tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                    aria-controls="tab-panel-3a"
                    aria-selected={`${
                      tabSelected.currentTab === 3 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 3 })
                    }
                  >
                    <span className=" font-semibold">Area Size</span>
                  </button>
                </li>
              </ul>
              <div className="">
                <div
                  className={`px-6 py-4 ${
                    tabSelected.currentTab === 1 ? "" : "hidden"
                  }`}
                  id="tab-panel-1a"
                  aria-hidden={`${
                    tabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-1a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">5 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">10 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">3 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">New</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Low Price</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Small</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    tabSelected.currentTab === 2 ? "" : "hidden"
                  }`}
                  id="tab-panel-2a"
                  aria-hidden={`${
                    tabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-2a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Houses</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Flats</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                          Upper Portion
                        </h6>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                          Lower Porition
                        </h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Farmhouse</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Penthouse</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    tabSelected.currentTab === 3 ? "" : "hidden"
                  }`}
                  id="tab-panel-3a"
                  aria-hidden={`${
                    tabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-3a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">5 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">3 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">7 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">8 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">10 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">1 Kanal</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="h-[50vh] w-[30%] box ">
            <div className="h-[8vh] w-[60%] flex gap-3 items-center text-[green] text-[16px] pl-5 ">
              <FaMapLocationDot />
              <h1 className="text-[black] font-semibold">Plots</h1>
            </div>
            <section className="max-w-full" aria-multiselectable="false">
              <ul
                className="flex items-center border-b border-slate-200"
                role="tablist"
                ref={wrapperRef}
              >
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      secondTabSelected.currentTab === 1
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-1a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="1"
                    tabindex={`${
                      secondTabSelected.currentTab === 1 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-1a"
                    aria-selected={`${
                      secondTabSelected.currentTab === 1 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setSecondTabSelected({
                        ...secondTabSelected,
                        currentTab: 1,
                      })
                    }
                  >
                    <span className=" font-semibold">Popular</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      secondTabSelected.currentTab === 2
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-2a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="2"
                    tabindex={`${
                      secondTabSelected.currentTab === 2 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-2a"
                    aria-selected={`${
                      secondTabSelected.currentTab === 2 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setSecondTabSelected({
                        ...secondTabSelected,
                        currentTab: 2,
                      })
                    }
                  >
                    <span className=" font-semibold">Type</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      secondTabSelected.currentTab === 3
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-3a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="3"
                    tabindex={`${
                      secondTabSelected.currentTab === 3 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-3a"
                    aria-selected={`${
                      secondTabSelected.currentTab === 3 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setSecondTabSelected({
                        ...secondTabSelected,
                        currentTab: 3,
                      })
                    }
                  >
                    <span className=" font-semibold">Area Size</span>
                  </button>
                </li>
              </ul>
              <div className="">
                <div
                  className={`px-6 py-4 ${
                    secondTabSelected.currentTab === 1 ? "" : "hidden"
                  }`}
                  id="tab-panel-1a"
                  aria-hidden={`${
                    secondTabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-1a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">5 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">10 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">3 Maria</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">New</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Low Price</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Small</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    secondTabSelected.currentTab === 2 ? "" : "hidden"
                  }`}
                  id="tab-panel-2a"
                  aria-hidden={`${
                    secondTabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-2a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Houses</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Flats</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                          Upper Portion
                        </h6>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                          Lower Porition
                        </h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Farmhouse</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Penthouse</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    secondTabSelected.currentTab === 3 ? "" : "hidden"
                  }`}
                  id="tab-panel-3a"
                  aria-hidden={`${
                    secondTabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-3a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">5 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">3 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">7 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">8 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">10 Marla</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                      <div className="h-[10vh] w-[22%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">1 Kanal</h6>
                        <p className="text-[14px]">Houses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="h-[50vh] w-[30%] box ">
            <div className="h-[8vh] w-[60%] flex gap-3 items-center text-[green] text-[16px] pl-5 ">
              <BsBuildingLock />
              <h1 className="text-[black] font-semibold">Commercial</h1>
            </div>
            <section className="max-w-full" aria-multiselectable="false">
              <ul
                className="flex items-center border-b border-slate-200"
                role="tablist"
                ref={wrapperRef}
              >
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      thirdTabSelected.currentTab === 1
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-1a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="1"
                    tabindex={`${
                      thirdTabSelected.currentTab === 1 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-1a"
                    aria-selected={`${
                      thirdTabSelected.currentTab === 1 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setThirdTabSelected({
                        ...thirdTabSelected,
                        currentTab: 1,
                      })
                    }
                  >
                    <span className=" font-semibold">Popular</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      thirdTabSelected.currentTab === 2
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-2a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="2"
                    tabindex={`${
                      thirdTabSelected.currentTab === 2 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-2a"
                    aria-selected={`${
                      thirdTabSelected.currentTab === 2 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setThirdTabSelected({
                        ...thirdTabSelected,
                        currentTab: 2,
                      })
                    }
                  >
                    <span className=" font-semibold">Type</span>
                  </button>
                </li>
                <li className="flex-1" role="presentation ">
                  <button
                    className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                      thirdTabSelected.currentTab === 3
                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                    }`}
                    id="tab-label-3a"
                    role="tab"
                    aria-setsize="3"
                    aria-posinset="3"
                    tabindex={`${
                      thirdTabSelected.currentTab === 3 ? "0" : "-1"
                    }`}
                    aria-controls="tab-panel-3a"
                    aria-selected={`${
                      thirdTabSelected.currentTab === 3 ? "true" : "false"
                    }`}
                    onClick={() =>
                      setThirdTabSelected({
                        ...thirdTabSelected,
                        currentTab: 3,
                      })
                    }
                  >
                    <span className=" font-semibold">Area Size</span>
                  </button>
                </li>
              </ul>
              <div className="">
                <div
                  className={`px-6 py-4 ${
                    thirdTabSelected.currentTab === 1 ? "" : "hidden"
                  }`}
                  id="tab-panel-1a"
                  aria-hidden={`${
                    thirdTabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-1a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Small</h6>
                        <p className="text-[14px]">Offices</p>
                      </div>
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">New</h6>
                        <p className="text-[14px]">Offices</p>
                      </div>
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">On Installemt</h6>
                        <p className="text-[14px]">Shop</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Small</h6>
                        <p className="text-[14px]">Shops</p>
                      </div>
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">New</h6>
                        <p className="text-[14px]">Shops</p>
                      </div>
                      <div className="h-[10vh] w-[30%] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Running</h6>
                        <p className="text-[14px]">SHops</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    thirdTabSelected.currentTab === 2 ? "" : "hidden"
                  }`}
                  id="tab-panel-2a"
                  aria-hidden={`${
                    thirdTabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-2a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Office</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Shop</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                          Building
                        </h6>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">
                         Warehouse
                        </h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Factory</h6>
                      </div>
                      <div className="h-[10vh] w-[25] flex flex-col justify-center items-center ">
                        <h6 className="text-[14px] font-semibold">Others</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-6 py-4 ${
                    thirdTabSelected.currentTab === 3 ? "" : "hidden"
                  }`}
                  id="tab-panel-3a"
                  aria-hidden={`${
                    thirdTabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  role="tabpanel"
                  aria-labelledby="tab-label-3a"
                  tabindex="-1"
                >
                  <div className="h-[30vh] w-[100%] ">
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[11px] font-semibold">Less than 100 sq...</h6>
                        <p className="text-[14px]">Commercial</p>
                      </div>
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[12px] font-semibold">100-200 sq ft</h6>
                         <p className="text-[14px]">Commercial</p>
                      </div>
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[12px] font-semibold">200-300 sq ft</h6>
                         <p className="text-[14px]">Commercial</p>
                      </div>
                    </div>
                    <div className="h-[15vh] w-[100%] flex   justify-around items-center ">
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[12px] font-semibold">300-400 sq ft</h6>
                         <p className="text-[14px]">Commercial</p>
                      </div>
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[12px] font-semibold">400-500 sq ft</h6>
                         <p className="text-[14px]">Commercial</p>
                      </div>
                      <div className="h-[10vh] w-[35%] flex flex-col justify-center items-center ">
                        <h6 className="text-[12px] font-semibold">More than 500s...</h6>
                         <p className="text-[14px]">Commercial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
