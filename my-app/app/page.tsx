import { LightWave, DarkWave } from "./ui/background/wave";
import ThemeToggle from "./ui/nav/theme-toggle";
import { AboutMe, Links, Work, ContactMe } from "./ui/body/buttons";

export default function Home() {
  return (
    <>
      {/* nav */}
      <nav className="p-3">
        <ThemeToggle></ThemeToggle>
      </nav>

      {/* when the screen is small */}
      <div className="block md:hidden"></div>
      {/* when the screen is md / large */}
      <div className="hidden md:block">
        <div className="fixed flex mx-auto w-screen h-screen items-center justify-center z-0">
          <div className="pointer-events-auto group/window">
            <div className="absolute flex flex-col transform-(--translate)">
              <div className="rounded-t-lg font-mono flex [background-color:var(--bg-gray)] dark:border-x-2 dark:border-t-2 text-white dark:[background-color:var(--background)] dark:border-white text-xl top-0 left-0 px-6 py-3">
                <div className="flex grow flex-row justify-between">&nbsp;</div>
              </div>
              <div className="justify-center items-center flex flex-col bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-white rounded-b-xl m-0 shadow-flat w-(--window-width) h-(--window-height)">
                <p className="text-center font-medium font-body text-(length:--title-size) pt-(--title-padding)">
                  hi!&nbsp;
                  <span className="text-primary font-bold">i'm jonathan</span>
                </p>
                <h2 className="text-center">
                  front-end, back-end, and cybersecurity
                </h2>
                <div className="flex flex-wrap flex-row justify-center m-(--icon-container-margin) min-w-xs">
                  <div className="m-4">
                    <AboutMe></AboutMe>
                  </div>
                  <div className="m-4">
                    <Links></Links>
                  </div>
                  <div className="m-4">
                    <Work></Work>
                  </div>
                  <div className="m-4">
                    <ContactMe></ContactMe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background */}
      <div className="bg">
        <div>
          <LightWave />
          <DarkWave />
        </div>
      </div>
    </>
  );
}
