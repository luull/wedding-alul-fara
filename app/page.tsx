import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("./components/LandingPage"), {
  ssr: false,
});

export default function Page({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  return <LandingPage guestName={searchParams.to || ""} />;
}
