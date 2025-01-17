import React, { Suspense } from "react";
import "./App.css";
import v1 from "./components/v1";


const App: React.FC = () => {
  // const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  const CurrentLanding = v1;

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-[#a444e9] text-xl">Loading...</div>
    </div>
  );

  // Version selector component
  // const VersionSelector = () => (
  //   <div className="fixed top-4 right-4 z-50 print:hidden">
  //     <select
  //       className="bg-black text-[#a444e9] border border-[#a444e9] rounded p-2"
  //       value={currentVersionIndex}
  //       onChange={(e) => setCurrentVersionIndex(Number(e.target.value))}
  //     >
  //       {versions.map((version, index) => (
  //         <option key={index} value={index}>
  //           {version.versionString}
  //         </option>
  //       ))}
  //     </select>
  //   </div>
  // );

  return (
    <div className="w-full h-screen">
      {/* <VersionSelector /> */}
      <Suspense fallback={<LoadingFallback />}>
        <CurrentLanding />
      </Suspense>
    </div>
  );
};

export default App;
