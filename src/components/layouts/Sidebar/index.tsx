"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSchedule,
  AiOutlineUsergroupAdd,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBuilding, BsGear } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const router = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineHome className="mr-2 text-lg" />
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineUsergroupAdd className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineClipboardList className="mr-2 text-lg" />
              Job Listing
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineSchedule className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsGear className="mr-2 text-lg" />
              Setting
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start text-red-500 rounded-none hover:bg-red-200 hover:text-red-500"
            >
              <AiOutlineLogout className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
