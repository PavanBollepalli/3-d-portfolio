import { useEffect } from "react";

const SkillVector = () => {
  useEffect(() => {
    window.location.href = "https://skill-vector-kyzv.vercel.app";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>Redirecting to SkillVector...</p>
    </div>
  );
};

export default SkillVector;
