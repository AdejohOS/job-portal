import { LogIn, NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";

import UserAvatar from "./userAvatar";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

const Header = async () => {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="bg-sky-50 h-16 px-4 drop-shadow">
      <div className="container flex items-center w-full h-full justify-between mx-auto">
        <Link href="/" className="text-2xl font-semibold text-sky-600">
          JobPortal
        </Link>
        <div className="flex items-center gap-4">
          {!user ? (
            <Link
              href={signInUrl}
              className="bg-sky-600 text-white flex items-center gap-2 rounded-md py-2 px-3   font-semibold hover:bg-sky-600/75 "
            >
              <NotebookPen className="shrink-0 h-4 w-4" /> Post a job
            </Link>
          ) : (
            <Link
              href="/createjob"
              className="bg-sky-600 text-white flex items-center gap-2 rounded-md py-2 px-3   font-semibold hover:bg-sky-600/75 "
            >
              <NotebookPen className="shrink-0 h-4 w-4" /> Post a job
            </Link>
          )}

          {user ? (
            <UserAvatar user={user} />
          ) : (
            <Link
              href={signInUrl}
              className="flex items-center gap-2 border-2 rounded-md py-2 px-3  font-semibold hover:bg-sky-100/75 "
            >
              <LogIn className="shrink-0 h-4 w-4" /> Signin / Signup
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
