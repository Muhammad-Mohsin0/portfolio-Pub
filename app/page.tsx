"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
("use client");

import dynamic from "next/dynamic";

const ClientPage = dynamic(() => import("./client-page"), {
  ssr: false,
});

export default function Home() {
  return <ClientPage />;
}
