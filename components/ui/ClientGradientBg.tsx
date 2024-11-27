"use client";
import dynamic from "next/dynamic";
import { BackgroundGradientAnimation } from "./GradientBg";

const ClientGradientBg = dynamic(
  () => Promise.resolve(BackgroundGradientAnimation),
  { ssr: false }
);

export default ClientGradientBg;
