import { FB, IG, Linkedin, Twitter } from "../svgs/socials";
import "./footer/styles.css";

const socials = [
  {
    icon: (props: any) => <FB {...props} />,
    href: "https://www.facebook.com/alterbin",
  },
  {
    icon: (props: any) => <Twitter {...props} />,
    href: "https://twitter.com/alterbin_hq",
  },
  {
    icon: (props: any) => <Linkedin {...props} />,
    href: "https://www.linkedin.com/company/alterbin",
  },
  {
    icon: (props: any) => <IG {...props} />,
    href: "https://www.instagram.com/alterbin_hq",
  },
];

export default function Socials({ dark = false }) {
  const color = "var(--main-color)";

  const props = dark ? { fill: color, stroke: color } : {};

  return (
    <div className="app_footer__btm__socials app_landing_page__social__px">
      {socials.map((item) => (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          key={item.href}
          className="my-auto"
        >
          {item.icon(props)}
        </a>
      ))}
    </div>
  );
}
