import LandingPage from "./components/LandingPage";

export default function Page({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  return <LandingPage guestName={searchParams.to || ""} />;
}
