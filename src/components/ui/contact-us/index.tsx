import React from "react";
import Typography from "../typography";
import routes from "@/src/utils/routes";
import { Call, Message } from "../../svgs/icons";
import config from "@/src/utils/config";
import "./styles.css";

export const ContactUs = () => {
  return (
    <div>
      <div className="app_footer__contact_us">
        <div
          className="app_footer__contact_us__con"
          id={routes.home.hash.contactUs}
        >
          <div className="w-1/2">
            <Typography
              className="text-4xl mb-6"
              color="main-color"
              fontWeight="bd"
              variant="h1"
            >
              Get In Touch
            </Typography>
            <Typography
              className="text-xl text-sec_text_color"
              fontWeight="rg"
              variant="p"
            >
              Have questions? We will love to hear from you. Send us a message
              and we'll respond as soon as possible
            </Typography>
          </div>

          <div className="app_footer__contact_us__con__info">
            <div className="app_footer__contact_us__con__info__item">
              <div className="my-auto">
                <Message />
              </div>

              <div>
                <Typography color="sub-text-color">Email</Typography>
                <a
                  href={`mailto:${config.CONTACT_US.email}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    color="main-color"
                    variant="h4"
                    fontWeight="md"
                    className="text-xl"
                  >
                    {config.CONTACT_US.email}
                  </Typography>
                </a>
              </div>
            </div>

            <div className="app_footer__contact_us__con__info__item">
              <div className="my-auto">
                <Call />
              </div>

              <div>
                <Typography color="sub-text-color">Phone</Typography>
                <Typography
                  color="main-color"
                  variant="h4"
                  fontWeight="md"
                  className="text-xl"
                >
                  +234 903 988 7841
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
