import NewPostForm from "@/src/components/givens/form/create";
import { BackButton } from "@/src/components/ui";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col">
      <BackButton title="Back" />
      <div className="flex justify-center items-center w-full mt-10 mb-48">
        <NewPostForm />
      </div>
    </div>
  );
};

export default page;
