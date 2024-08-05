import React from "react";
import {
  AutoPaginatable,
  OrganizationMembership,
  WorkOS,
} from "@workos-inc/node";

import { TriangleAlert } from "lucide-react";
import { getUser } from "@workos-inc/authkit-nextjs";

const CreatePost = async () => {
  const { user } = await getUser();

  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user?.id,
    });

  return (
    <section className="w-full px-4">
      <div className="container mx-auto my-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your Companies</h2>
          <p>Select a company to create a Job for!</p>

          <p className="bg-gray-100 py-2 px-3 w-max rounded-md flex items-center gap-2">
            <TriangleAlert className="h-5 w-5 animate-pulse" /> No company
            assigned to you.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold">Create a new company</h3>
          <p>To create a job, you first need to create a company</p>
          <form
            action={async (data) => {
              "use server";
              await workos.organizations.createOrganization({
                name: data.get("companyName") as string,
              });
            }}
            className="flex gap-2 items-center mt-4"
          >
            <input
              type="text"
              name="companyName"
              placeholder="company name..."
              className="py-2 px-3 rounded-md bg-gray-100 border-2"
            />
            <button
              type="submit"
              className="bg-sky-600 text-white flex items-center gap-2 rounded-md py-2 px-3   font-semibold hover:bg-sky-600/75 "
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
