"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Typography from "../typography";
import config from "@/src/utils/config";
import routes from "@/src/utils/routes";
import { Message, Call } from "../../svgs/icons";
import Socials from "../socials";
import "./styles.css";

const { WEB_APP_URL: MAIN_WEB_APP_URL } = config.services.google.sheets;

const footerItems = [
  {
    name: "Contact Us",
    hash: "#",
  },
  {
    name: "Give an Item",
    hash: "#",
  },
  {
    name: "How it works",
    hash: "#",
  },
];

function FooterBtm() {
  return (
    <>
      <Typography variant="span" className="tablet:text-white text-[#08846B]">
        Copyright © {new Date().getFullYear()} Alterbin Technologies
      </Typography>
    </>
  );
}

function FooterC() {
  const [loading, setLoading] = useState(false);

  const WEB_APP_URL = MAIN_WEB_APP_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput =
      document.querySelector('form input[name="Email"]') || ({} as any);

    const formData = new FormData();
    formData.append("Email", emailInput.value);

    try {
      setLoading(true);

      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      if (typeof response === "object") {
        toast.success("Successful", { position: "bottom-right" });
        emailInput.value = "";
      } else {
        throw new Error("Failed");
      }
    } catch (error: any) {
      toast.error("Failed", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="app_footer">
      <div className="app_footer__content app_landing_page__px">
        <div className="app_footer__content__item">
          <Image
            className="app__header__logo"
            src="/media/logos/h-logo-light.svg"
            width={147}
            height={35}
            alt=""
            priority
          />

          <Typography variant="span">Give Old items a new story</Typography>
        </div>

        {footerItems?.map((item) => (
          <div key={item.name} className="app_footer__content__item">
            <Typography fontWeight="md" variant="h5">
              {item.name}
            </Typography>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 app_landing_page__footer__px">
        <div className="">
          <Socials />
        </div>

        <div className="app_landing_page__px app_footer__btm">
          <FooterBtm />
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <div className="relative">
      <FooterC />

      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
}
