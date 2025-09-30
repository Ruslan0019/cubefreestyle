import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

function Contacts() {
  return <div className="text-dark">Contacts</div>;
}

export default Contacts;
