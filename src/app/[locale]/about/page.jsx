import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}
export const metadata = {
  title: "test title about gape",
  description: "Описание страницы",
};
function About() {
  return <div className="text-dark">About</div>;
}

export default About;
