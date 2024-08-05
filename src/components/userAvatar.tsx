"use client";
import Image from "next/image";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogOut, Settings2 } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { User } from "@/types";
import { signOut } from "@workos-inc/authkit-nextjs";
import { logOut } from "@/actions/actions";
import { useRouter } from "next/navigation";

interface UserAvaterProps {
  user: User;
}
const UserAvatar = ({ user }: UserAvaterProps) => {
  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center shadow-sm ring-1 ring-inset ring-gray-300 rounded-full">
            <Image
              src={user.profilePictureUrl}
              alt="userAvater"
              height={45}
              width={45}
              className="rounded-full object-cover"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <>
                <p className="px-4 py-1 font-semibold text-gray-700">
                  {user.firstName && user.lastName
                    ? `${user.firstName}  ${user.lastName}`
                    : null}
                </p>
                <p className="truncate px-4 text-sm">{user.email}</p>
              </>
            </MenuItem>
          </div>
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                <Settings2 className="h-4 w-4 shrink-0" /> Settings
              </a>
            </MenuItem>
          </div>

          <div className="py-1">
            <MenuItem>
              <button
                onClick={() => handleLogout()}
                className="w-full flex gap-2 items-center px-4 py-2  text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                <LogOut className="h-4 w-4 shrink-0" /> Logout
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};

export default UserAvatar;
