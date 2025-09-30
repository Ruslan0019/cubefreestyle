import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

function Clients() {
  return <div className="text-dark">Clients</div>;
}

export default Clients;
