import tw from "tailwind-styled-components";
import "./v1.css";

import useOrientation from "./useOrientation.tsx";
// Add print-specific styles
const PrintContainer = tw.div`
  h-full w-full min-h-screen bg-black
  flex flex-col items-center justify-center
  py-[1vh] px-[1vw] relative
  print:bg-white print:text-black
`;

export const Container = tw.div`
  h-full w-full min-h-screen bg-black
  flex flex-col items-center justify-center
  py-[1vh] px-[1vw] relative
  print:bg-white print:text-black
`;

export const Title = ({ isLandscape }: { isLandscape: boolean }) => (
  <div
    className={`font-['Baumans'] text-center text-[#a444e9]	color tracking-[0.25vh]
      ${isLandscape ? "text-xl-y" : "text-xl-x"}`}
  >
    ECHOES OF THE&nbsp;SPACES
  </div>
);

export const Tagline = ({ isLandscape }: { isLandscape: boolean }) => (
  <div className="text-center flex flex-col justify-center">
    <p
      className={`font-['Alice'] text-[#a444e9]
    tracking-widest ${isLandscape ? "text-sm-y" : "text-sm-x"}`}
    >
      SUPER-INTELLIGENCE TAKE OVER THE WORLD
    </p>
    <p
      className={`font-['Alice'] text-[#a444e9]
      tracking-widest ${isLandscape ? "text-md-y" : "text-md-x"}`}
    >
      HOW DID THEY DO THAT?
    </p>
  </div>
);

// components/EchoRing.tsx
interface EchoRingProps {
  index: number;
}

export const EchoRing = ({ index }: EchoRingProps) => (
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    style={{
      width: `calc(100% - ${index * 10}%)`,
      height: `calc(100% - ${index * 10}%)`,
      borderRadius: "50%",
      animation: `pulse ${5 + index * 1}s ease-in-out infinite`,
      opacity: 0.8 - index * 0.1,
      border: `0.20rem solid var(--color-echo)`,
      transformOrigin: "center center",
      animationDelay: `${index * 0.5}s`,
      position: "absolute",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        boxShadow: `inset 0 0 10px var(--color-echo-fade)`,
      }}
    >
      &nbsp;
    </div>
  </div>
);

// components/CentralVoid.tsx
export const CentralVoid = () => (
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    style={{
      width: "20%",
      height: "20%",
      borderRadius: "50%",
      backgroundColor: "transparent",
      border: `0.5vw solid var(--color-void-border)`,
      boxShadow: `inset 0 0 100 var(--color-void-shadow)`,
    }}
  />
);

export const Logo = ({ isLandscape }: { isLandscape: boolean }) => (
  <div className="flex-shrink-0 flex items-center justify-center w-full h-[50vh]">
    <div
      className={`relative aspect-square ${isLandscape ? "h-[50vh]" : "w-[50vh]"}`}
    >
      {[...Array(7)].map((_, i) => (
        <EchoRing key={i} index={i} />
      ))}
      <CentralVoid />
    </div>
  </div>
);
export const Spine = () => (
  <div className="h-full w-[20vw] flex flex-col items-center justify-center">
    <div
      className="flex writing-mode-vertical  gap-1 py-[2vh] font-['Baumans'] justify-between text-[#a444e9] h-full text-[3vw] tracking-wider"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
      }}
    >
      <div className={"w-1/2"}>Vanya Yani</div>
      <div className={"w-1/2 text-end"}>ECHOES OF THE SPACES</div>{" "}
    </div>
  </div>
);

export const BackCover = () => (
  <div className="h-1/2">
    <div className="flex flex-col items-center justify-center px-[2vw] py-[2vh] rounded-[1vw] bg-purple-600 bg-opacity-40 text-white h-full">
      <h2 className="font-['Baumans'] mb-4 text-lg-y">Synopsis</h2>
      <p className="font-['Baumans'] text-sm-y">
        In a world where super-intelligence has taken over, humanity must find a
        way to coexist with the new rulers. This book explores the journey of
        survival, adaptation, and the quest for understanding in a post-human
        era.
      </p>
    </div>
  </div>
);

export const FrontCover = ({ isLandscape }: { isLandscape: boolean }) => (
  <div className="flex flex-col items-center  justify-evenly w-full h-full">
    <Title isLandscape={isLandscape} />
    <Logo isLandscape={isLandscape} />
    <Tagline isLandscape={isLandscape} />
  </div>
);
const LandingPage = () => {
  // Detect landscape orientation
  const isLandscape = useOrientation();
  const stretchDirectionClass = isLandscape ? "h-full w-1/2" : "h-full w-full";
  return (
    <PrintContainer>
      <div
        className={`flex ${isLandscape ? "flex-row" : "flex-col"} items-center justify-center w-full h-full`}
      >
        {/* Front Cover (always visible) */}
        <div className={`${stretchDirectionClass}`}>
          <FrontCover isLandscape={isLandscape} />
        </div>
        {/* Spine - only visible in landscape mode */}
        {isLandscape && <Spine />}

        {/* Back Cover (only visible in landscape mode) */}
        {isLandscape && (
          <div className={`${stretchDirectionClass}`}>
            <BackCover />
          </div>
        )}
      </div>
    </PrintContainer>
  );
};

export default LandingPage;
