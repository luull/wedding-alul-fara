"use client";
import { Check, Copy } from "lucide-react";
import MusicPlayer from "./components/MusicPlayer";
import Slide from "./components/Slide";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  const [copied, setCopied] = useState(false);
  const rekening = "6880458742";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening);
    setCopied(true);
    toast.success("Copy Successful!");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <main
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <Slide image="/images/slide1.png">
        <p
          style={{
            fontSize: "22px",
            fontWeight: 600,
            marginTop: "550px",
            color: "#000",
            textAlign: "center",
          }}
        >
          {guestName}
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#6a6a6aff",
            fontSize: "16px",
          }}
        >
          you are invited to our wedding
        </h2>
      </Slide>

      <Slide image="/images/slide2.png"></Slide>

      <Slide image="/images/slide3.png">
        <MusicPlayer />
      </Slide>

      <Slide image="/images/slide4.png"></Slide>

      <Slide image="/images/slide5.png">
        <a
          href="https://maps.app.goo.gl/zRv5wuhWT2aSQ2qR7"
          target="_blank"
          style={btnStyle2}
        >
          Show Location
        </a>
      </Slide>
      <Slide image="/images/slide6.png"></Slide>
      <Slide image="/images/slide7.png">
        <button onClick={handleCopy} style={btnStyle4}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </Slide>
      <Slide image="/images/slide8.png"></Slide>
      <Toaster position="top-center" />
    </main>
  );
}

const btnStyle2: React.CSSProperties = {
  background: "#9e1001",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: "12px",
  border: "none",
  marginTop: "480px",
  fontSize: "16px",
  cursor: "pointer",
};
const btnStyle4: React.CSSProperties = {
  background: "#9e1001",
  color: "#fff",
  padding: "10px",
  borderRadius: "12px",
  border: "none",
  position: "absolute",
  fontSize: "14px",
  marginTop: "100px",
  marginLeft: "20px",
  cursor: "pointer",
};
