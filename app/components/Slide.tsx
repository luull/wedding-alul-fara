type SlideProps = {
  image: string;
  children?: React.ReactNode;
};

export default function Slide({ image, children }: SlideProps) {
  return (
    <section
      style={{
        height: "auto",
        width: "100%",
        position: "relative",
        backgroundColor: "#f8f4f3",
      }}
    >
      <img
        src={image}
        alt="slide"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>{children}</div>
      </div>
    </section>
  );
}
