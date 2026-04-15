"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import MusicPlayer from "./components/MusicPlayer";
import Slide from "./components/Slide";
export const dynamic = "force-dynamic";
function Content() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const [copied, setCopied] = useState(false);
  const rekening = "6880458742";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening);
    setCopied(true);
    toast.success("Copy Successful!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={outerWrapper}>
      <div style={phoneWrapper}>
        <main style={innerWrapper}>
          <Slide image="/images/slide1.png">
            <p
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#000",
                marginTop: "550px",
                textAlign: "center",
              }}
            >
              {guestName}
            </p>

            <h2
              style={{
                textAlign: "center",
                fontSize: "16px",
                color: "#7d7d7dff",
              }}
            >
              you are invited to our wedding
            </h2>
          </Slide>

          <Slide image="/images/slide2.png" />
          <Slide image="/images/slide3.png">
            <MusicPlayer />
          </Slide>
          <Slide image="/images/slide4.png" />

          <Slide image="/images/slide5.png">
            <a
              href="https://maps.app.goo.gl/zRv5wuhWT2aSQ2qR7"
              target="_blank"
              style={btnStyle2}
            >
              Show Location
            </a>
          </Slide>

          <Slide image="/images/slide6.png" />

          <Slide image="/images/slide7.png">
            <button onClick={handleCopy} style={btnStyle4}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </Slide>

          <Slide image="/images/slide8.png" />
          <Toaster position="top-center" />
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}

const btnStyle2: React.CSSProperties = {
  background: "#9e1001",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: "12px",
  fontSize: "16px",
  position: "absolute",
  marginTop: "200px",
  right: "120px",
  cursor: "pointer",
};

const btnStyle4: React.CSSProperties = {
  background: "#9e1001",
  color: "#fff",
  padding: "10px",
  borderRadius: "12px",
  position: "absolute",
  marginTop: "100px",
  marginLeft: "20px",
  cursor: "pointer",
};

const outerWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  background: "#f8f4f3",
};

const phoneWrapper: React.CSSProperties = {
  transform: "scale(0.85)",
  transformOrigin: "center",
};

const innerWrapper: React.CSSProperties = {
  width: "100%",
  maxWidth: "420px",
  height: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
  background: "#fff",
};
