import { LogIn, NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserAvatar from "./userAvatar";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="bg-sky-50 h-16 px-4 drop-shadow">
      <div className="container flex items-center w-full h-full justify-between mx-auto">
        <Link href="/" className="text-2xl font-semibold text-sky-600">
          JobPortal
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/create"
            className="bg-sky-600 text-white flex items-center gap-2 rounded-md py-2 px-3   font-semibold hover:bg-sky-600/75 "
          >
            <NotebookPen className="shrink-0 h-4 w-4" /> Post a job
          </Link>
          {user ? (
            <UserAvatar user={user} />
          ) : (
            <LoginLink className="flex items-center gap-2 border-2 rounded-md py-2 px-3  font-semibold hover:bg-sky-100/75 ">
              <LogIn className="shrink-0 h-4 w-4" /> Login
            </LoginLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
