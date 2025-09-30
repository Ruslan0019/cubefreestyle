import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

function Service() {
  return <div className="text-dark">Service</div>;
}

export default Service;
