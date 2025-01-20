import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export function BackArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="vuesax/linear/arrow-left">
        <g id="arrow-left">
          <path
            id="Vector"
            d="M7.97502 4.94141L2.91669 9.99974L7.97502 15.0581"
            stroke="#000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M17.0834 10H3.05835"
            stroke="#000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
