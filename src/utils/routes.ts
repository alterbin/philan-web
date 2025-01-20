const routes = {
  home: {
    path: "/",

    hash: {
      aboutUs: "about-us",
      contactUs: "contact-us",
      events: "events",
      initiatives: "initiatives",
    },
  },

  auth: {
    path: "/auth",

    forgotPassword: {
      path: "/auth/forgot-password",
    },

    resetPassword: {
      path: "/auth/reset-password",
    },
  },

  dashboard: {
    path: "/dashboard",
  },
};

export default routes;
