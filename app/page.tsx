import Slide from "./components/Slide";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <Slide image="/images/slide1.png">
        <button style={btnStyle}>Open Invitation</button>
      </Slide>

      <Slide image="/images/slide2.png"></Slide>

      <Slide image="/images/slide3.png"></Slide>

      <Slide image="/images/slide4.png">
        <button style={btnStyle}>Lihat Lokasi</button>
      </Slide>

      <Slide image="/images/slide5.png"></Slide>
      <Slide image="/images/slide6.png"></Slide>
    </main>
  );
}

const textStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "24px",
};

const btnStyle: React.CSSProperties = {
  background: "#c1121f",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "12px",
  border: "none",
  marginTop: "600px",
  fontSize: "16px",
  cursor: "pointer",
};
