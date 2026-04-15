import LandingPage from "./components/LandingPage";

export default function Page({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  const guestName = searchParams.to || "Tamu Undangan";

  return <LandingPage guestName={guestName} />;
}
