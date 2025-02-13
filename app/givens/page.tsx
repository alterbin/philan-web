import Givens from "@/src/modules/givens";
import { CreateGivenButton } from "@/src/modules/givens/sub-components/create-given-button";
import React, { Suspense } from "react";

const GivensPage = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="items-center app_landing_page__px min-h-screen pb-20 pt-28 gap-16 ">
        <Givens />
        <CreateGivenButton />
      </div>
    </Suspense>
  );
};

export default GivensPage;
