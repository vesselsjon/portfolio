import { LightWave, DarkWave } from "./ui/background/wave";
import ThemeToggle from "./ui/nav/theme-toggle";

export default function Home() {
  return (
    <>
      { /* nav */ }
      <nav className="p-3">
        <ThemeToggle></ThemeToggle>
      </nav>

      { /* when the screen is small */ }
      <div className="block md:hidden"></div>
      { /* when the screen is md / large */ }
      <div className="hidden md:block">
        <div className="fixed flex mx-auto w-screen h-screen items-center justify-center z-0">
          <div className="pointer-events-auto group/window">
            <div className="absolute flex flex-col transform-(--translate)">
              <div className="justify-center items-center flex flex-col bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-black rounded-b-xl m-0 shadow-flat w-(--window-width) h-(--window-height)">
                <p className="text-center font-medium font-body text-(length:--title-size) pt-(--title-padding)">
                  hi!&nbsp;
                  <span className="text-primary font-bold">i'm jonathan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* background */ }
      <div className="bg">
        <div>
          <LightWave />
          <DarkWave />
        </div>
      </div>
    </>
  );
}
