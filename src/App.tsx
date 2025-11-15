import profile from "../src/assets/profile-image.jpg";
import { SocialButton } from "./components/SocialButton";
import { CardCourses } from "./components/CardCourses";

function App() {
  const buttons = ["linkedin", "github", "instagram"] as const;
  const courses = ["react", "css", "node", "html"] as const;

  return (
    <section
      className="w-full
      max-w-3xl
       mx-auto 
       min-h-screen
       px-4 sm:px-6
        border border-white 

     bg-linear-to-b from-black via-sky-950 to-gray-800"
    >
      <header className="flex flex-col justify-center items-center">
        <img
          src={profile}
          alt="Hola soy Cesar"
          className="h-85 object-contain
          mask-radial-at-center mask-radial-from-40% mask-radial-to-85%"
        />

        <div
          className="flex px-3 py-1 -mt-4  bg-black/70 z-10 border border-sky-500/50  rounded-full
        items-center justify-center space-x-2 "
        >
          <span
            className="text-sky-400 
           font-mono 
          "
          >
            @br_cesarx
          </span>

          <svg className=" fill-blue-500 w-5 h-5 sm:h-8 md:w-10">
            <use href={"assets/sprite.svg#verified"}></use>
          </svg>
        </div>

        <section className="flex justify-center space-x-4 pb-4 pt-4">
          {buttons.map((item) => (
            <SocialButton key={item} name={item} />
          ))}
        </section>
        <p className="text-center mt-4 text-sm text-balance text-white">
          Ingeniero en Sistemas con experiencia en desarrollo web y mesa de
          soporte de TI
        </p>
      </header>
      <main className="pt-4 px-4 ">
        <div
          className="grid
        grid-cols-1 /* mobile */
        sm:grid-cols-3 /* tablets pequeñas */
        md:grid-cols-3 /* tablets grandes / desktop */
        gap-4
         "
        >
          {courses.map((item) => (
            <CardCourses key={item} name={item} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default App;
