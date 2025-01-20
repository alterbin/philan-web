"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { BackArrow } from "../svgs/icons";

interface IProps {
  title: string;
  goto?: string;
  disable?: boolean;
}

export const BackButton: React.FC<IProps> = ({ title, goto, disable }) => {
  const router = useRouter();

  const goBack = () => {
    if (disable) {
      return;
    }

    if (goto) {
      router.push(goto);
    } else {
      router.back();
    }
  };

  return (
    <div>
      <button className="backwrap" onClick={goBack}>
        <BackArrow />
        <h3 className="title">{title}</h3>
      </button>
    </div>
  );
};
