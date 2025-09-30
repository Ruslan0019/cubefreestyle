import React from "react";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

function Profile() {
  return <div className="text-dark">Profile</div>;
}

export default Profile;
