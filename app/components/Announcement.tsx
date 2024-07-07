/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Announcement() {
  return (
    <div className=" relative">
      <img
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-700 via-amber-950 to-amber-950 opacity-80"></div>
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        <div className="flex justify-center" data-aos="zoom-in-up">
          <a
            className="group  flex justify-center items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="../figma.html"
          >
            <p className="me-2 inline-block text-white text-sm">
              Ready to Get Started?
            </p>
            <span className="group-hover:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>

        <div
          className="max-w-4xl text-center mx-auto flex flex-col justify-center items-center"
          data-aos="zoom-in-down"
        >
          <h1 className="block font-semibold leading-tight w-3/4 text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
            Transform Your Ideas into Reality with Our Professional Writing
            Services
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-amber-500"></p>
        </div>

        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-amber-700 to-amber-600 shadow-lg shadow-transparent hover:shadow-amber-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6"
            href="#"
            data-aos="zoom-in-up"
          >
            Get Started
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
