import React, { useState } from "react";
import MessagePopup from "./messages/MessagePopup";

const HeroComponent = () => {
  const [showBrandMessagePopup, setShowBrandMessagePopup] = useState(false);
  const [showPeopleMessagePopup, setShowPeopleMessagePopup] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/hero-background.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animation: "zoomFade 15s infinite ease-in-out",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 0 3px rgb(243 244 249)"
          }}
        >
          Let your{" "}
          <span
            style={{
              color: "white",
              textShadow: "0 0 22px rgb(243 244 249)",
              animation: "blink 2s infinite",
            }}
          >
            Brand
          </span>{" "}
          make the next move.
        </h1>
        <p
          style={{
            color: "white",
            margin: "10px 0 20px 0",
            lineHeight: "1.25rem",
            fontSize: "0.81rem"
          }}
        >
          Join as an early bird - be the first to match!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          transform: "translateY(60%)",
        }}
      >
        <button
          onClick={() => setShowBrandMessagePopup(true)}
          className="px-8 py-3 rounded-full font-bold bg-white text-[#005BF7] transition-colors duration-200 hover:bg-[#ffffffe2]"
        >
          Brands
        </button>
        <button
          onClick={() => setShowPeopleMessagePopup(true)}
          className="px-8 py-3 rounded-full font-bold bg-white text-[#005BF7] transition-colors duration-200 hover:bg-[#ffffffe2]"
        >
          People
        </button>
      </div>
      {/* Style for animations */}
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.9; }
          100% { opacity: 1; }
        }

        @keyframes zoomFade {
          0% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
          25% { transform: translate(-50%, -50%) scale(3.2); opacity: 0.9; }
          50% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
          75% { transform: translate(-50%, -50%) scale(2.7); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
        }
      `}</style>

      {showBrandMessagePopup && (
        <MessagePopup messageType="brand" onClose={() => setShowBrandMessagePopup(false)} />
      )}
      {showPeopleMessagePopup && (
        <MessagePopup messageType="people" onClose={() => setShowPeopleMessagePopup(false)} />
      )}
    </div>
  );
};

export default HeroComponent;
