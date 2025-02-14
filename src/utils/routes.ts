const routes = {
  home: {
    path: "/",

    hash: {
      home: "home",
      contactUs: "contact-us",
      features: "features",
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
