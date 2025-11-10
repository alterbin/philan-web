/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "next-pwa" {
  import type { NextConfig } from "next";
  function withPWA(config?: any): (nextConfig: any) => NextConfig;
  export default withPWA;
}
