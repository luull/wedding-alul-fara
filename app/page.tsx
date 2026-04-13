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

      <Slide image="/images/slide4.png"></Slide>

      <Slide image="/images/slide5.png">
        <button style={btnStyle2}>Open Location</button>
      </Slide>
      <Slide image="/images/slide6.png"></Slide>
    </main>
  );
}

const textStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "24px",
};

const btnStyle: React.CSSProperties = {
  background: "#9e1001",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "12px",
  border: "none",
  marginTop: "600px",
  fontSize: "16px",
  cursor: "pointer",
};
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
