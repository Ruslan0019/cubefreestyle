import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

function Portfolio() {
  return <div className="text-dark">Portfolio</div>;
}

export default Portfolio;
