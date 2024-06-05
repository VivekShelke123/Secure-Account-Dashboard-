"use client";

import Image from "next/image";
import Menu from "../../menu-outline.svg";
import Link from "next/link";

export default function DashHeader() {
  function toggleMenu() {
    const target = document.querySelector(".dash-link");
    target?.classList.toggle("!left-0");
  }

  return (
    <div>
      <div className="flex bg-dash">
        <div className="w-[10%] m-2">
          <button onClick={toggleMenu}>
            <Image className="md:w-8 w-6cursor-pointer" src={Menu} alt="Menu" />
          </button>
        </div>
        <div className="w-[80%] text-center font-merriweather md:text-2xl text-xl">
          <h1 className="p-2 m-1">DashBoard</h1>
        </div>
      </div>
      <div className="dash-link absolute list-none duration-500 md:w-[20%] w-[45%] text-sm px-3 md:text-lg text-left bg-dash left-[-100%] min-h-[40vh] flex items-center md:px-5">
        <div className="flex flex-col gap-3 m-3">
          <Link href={'/UserDashboard'} className="hover:underline hover:cursor-pointer">Home</Link>
          <Link href={'/UserDashboard/DeviceManagement'} className="hover:underline hover:cursor-pointer">Manage Device</Link>
          <li className="hover:underline hover:cursor-pointer">Logs</li>
          <li className="hover:underline hover:cursor-pointer">Profile</li>
          <li className="hover:underline hover:cursor-pointer">LogOut</li>
        </div>
      </div>
    </div>
  );
}
