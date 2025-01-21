import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import "./styles.css";
import { NodataIcon } from "../../svgs/icons";

type IProps = {
  title: string;
  description: string;
  cta?: string;
  noDataTo?: string;
};

export const EmptyState = (props: IProps) => {
  const { cta, title, description, noDataTo } = props;
  return (
    <div>
      <div className="nodata">
        <div>
          <NodataIcon />
        </div>
        <p className="head">{title}</p>
        <p>{description}</p>
        {cta && (
          <Link href={`${noDataTo}`}>
            <Button>{cta}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
