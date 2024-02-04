"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function page() {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      <div className="h-[70vh] w-[100%] flex  flex-col justify-around items-center ">
        <h1 className="text-[24px] font-semibold flex  self-start pl-9">
          Titanium Agencies
        </h1>
        <div className="h-[50vh] w-[95%] ">
          <div className="glide-06 relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
           
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/f5ba29e9-2b9c-487c-b1cc-10ed30ce3f87/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Saiban Associates
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/094dd865-c8a6-4fdd-935a-24b8cde04d4a/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        OLX Real Estate
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/146b63f3-9397-4090-83b5-a6fac3bc0a74/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Javed Associates
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/0a581bb7-5162-45b1-8657-dbd00e42e88c/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Bin Noor Associates &
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/2934fd34-2c34-445e-9d45-4fcdb2d6e61d/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Pak Property Network
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/f5ba29e9-2b9c-487c-b1cc-10ed30ce3f87/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Saiban Associates
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/f2b24e66-1367-4e86-8737-1113b7f10c8a/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Harum Real Estate & Bu
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/be07047e-42d1-40a0-94b9-e439648fb36c/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Muhammadi Associate
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/f5ba29e9-2b9c-487c-b1cc-10ed30ce3f87/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Leads Estates
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/8fcb9b96-bd00-42a9-80d9-a10d0953c691/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Property View
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  justify-center   gap-2">
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/d6b0c040-b998-4862-ab4f-17d68e837bd0/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        Hafiz Brothers Estate & Bui
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                  <div className="h-[20vh] w-[100%] flex   justify-around  items-center ">
                    <div className="h-[13vh] w-[30%] ">
                      <img
                        src="https://zameen-images-live.s3-eu-west-1.amazonaws.com/agency_logo/bf5dacf1-5425-46ee-a040-623b4d4f9750/thumbnail.jpg"
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[58%] flex flex-col justify-center ">
                      <h1 className="text-[14px] font-semibold">
                        New Hira Estate & Builder
                      </h1>
                      <p>Lahore</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
           
            <div
              className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
              data-glide-el="controls"
            >
              <button
                className="btn"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>prev slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="btn"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {/*    <!-- Indicators --> */}
          </div>
        </div>
      </div>
    </>
  );
}
