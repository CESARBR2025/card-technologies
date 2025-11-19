import profile from "../src/assets/profile-image.jpg";
import { SocialButton } from "./components/SocialButton";
import { CardCourses } from "./components/CardCourses";
import { TimeLine } from "./pages/TimeLine";
import { CardProject } from "./components/CardProject";

function App() {
  const buttons = ["linkedin", "github", "instagram"] as const;
  const courses = ["react", "css", "node", "html"] as const;
  const project = ["coolviz", "coolview"] as const;

  return (
    <section
      className="
      w-full
bg-linear-to-b from-black via-sky-950 to-gray-800
      
       "
    >
      <div
        className="mx-auto
      max-w-3xl
      min-h-dvh
       px-4 sm:px-6"
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
          <p
            className="text-center mt-4 text-base
         text-balance text-white pb-4 leading-tight"
          >
            Ingeniero en Sistemas Computacionales con 1 año de experiencia en
            desarrollo web Full Stack y más de 3 años de trayectoria en
            infraestructura empresarial en TI
          </p>
        </header>

        <main className="pt-4 px-4  flex flex-col">
          <section>
            <h2 className="text-2xl text-white font-semibold pb-4 pt-4">
              Experiencia
            </h2>
            <TimeLine />
          </section>

          <section className="gap-4 flex flex-col">
            <h2 className="text-2xl text-white font-bold pb-4">Tecnologias</h2>
            <div
              className="
              grid
              grid-cols-1 /* mobile */
              sm:grid-cols-3 /* tablets pequeñas */
              md:grid-cols-3 /* tablets grandes / desktop */
              gap-4"
            >
              {courses.map((item) => (
                <CardCourses key={item} name={item} />
              ))}
            </div>
          </section>

          <section className="gap-4 flex flex-col pt-12">
            <h2 className="text-2xl text-white font-bold pb-4">
              Proyectos recientes
            </h2>

            <div
              className="
              grid
              grid-cols-1 /* mobile */
              sm:grid-cols-4 /* tablets pequeñas */
              md:grid-cols-4 /* tablets grandes / desktop */
              gap-4"
            >
              {project.map((item) => (
                <CardProject key={item} name={item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

export default App;
