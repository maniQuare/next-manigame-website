"use clinet";

import { MdOutlineNotificationsActive } from "react-icons/md";

import { IoWalletOutline } from "react-icons/io5";

import { LiaFileDownloadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-black text-white h-14">
      <div className="p-4 font-semibold">
        <h1>MANIGAME</h1>
      </div>

      <div className="flex gap-4 p-3.5">
        <div className="text-2xl">
          <MdOutlineNotificationsActive />
        </div>
        <div className="text-2xl">
          <IoWalletOutline />
        </div>
        <div className="text-2xl">
          <LiaFileDownloadSolid />
        </div>
      </div>
    </div>
  );
}
