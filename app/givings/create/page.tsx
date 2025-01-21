import NewPostForm from "@/src/components/posts/create";
import { BackButton } from "@/src/components/ui";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col">
      <BackButton title="Back" />
      <div className="flex justify-center items-center w-full mt-10">
        <NewPostForm />
      </div>
    </div>
  );
};

export default page;
