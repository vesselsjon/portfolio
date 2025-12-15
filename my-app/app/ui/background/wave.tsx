import Wave from "react-wavify";

export function LightWave() {
  return (
    <Wave
      fill="url(#gradient)"
      paused={false}
      style={{ width: "100%", display: "inline-block", height: "100%" }}
      className="visible dark:invisible duration-400 fixed top-0 -z-1 pointer-events-none w-screen h-screen"
      options={{
        height: 650,
        amplitude: 7,
        speed: 0.35,
        points: 3,
      }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="30%" stopColor="#DECBB7"></stop>
          <stop offset="90%" stopColor="#EBE4DD"></stop>
        </linearGradient>
      </defs>
    </Wave>
  );
}

export function DarkWave() {
  return (
    <Wave
      fill="url(#gradient-dark)"
      paused={false}
      style={{ width: "100%", display: "inline-block", height: "100%" }}
      className="invisible dark:visible duration-400 fixed top-0 -z-1 pointer-events-none w-screen h-screen"
      options={{
        height: 650,
        amplitude: 7,
        speed: 0.35,
        points: 3,
      }}
    >
      <defs>
        <linearGradient id="gradient-dark" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#978B7E"></stop>
          <stop offset="5%" stopColor="#6F665D"></stop>
          <stop offset="90%" stopColor="#514B45"></stop>
        </linearGradient>
      </defs>
    </Wave>
  );
}
