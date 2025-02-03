import { BackButton } from "@/src/components/ui";
import NewGivenForm from "@/src/modules/givens/sub-components/form/create";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col">
      <BackButton title="Back" />
      <div className="flex justify-center items-center w-full mt-10 mb-48">
        <NewGivenForm />
      </div>
    </div>
  );
};

export default page;
