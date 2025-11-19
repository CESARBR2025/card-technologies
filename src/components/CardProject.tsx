import dashboards from "../assets/dashboards.webp";
import coolview from "../assets/coolview.webp";

const IMAGES = {
  dashboards,
  coolview,
};

const PROJECTS_CONFIG = {
  coolviz: {
    label: "Modulo CoolViz",
    description: "Dashboards interactivos para visualización de metricas KPIS",
    img: "dashboards",
    size: "col-span-2 sm:col-span-2 md:col-span-2",
  },
  coolview: {
    label: "Modulo CoolView",
    description:
      "Graficas automaticas para visualizar funcionamiento de enfriadores",
    img: "coolview",
    size: "col-span-2 sm:col-span-2 md:col-span-2",
  },
} as const;

type ProjectName = keyof typeof PROJECTS_CONFIG;
type ProjectProps = {
  name: ProjectName;
};

export const CardProject = ({ name }: ProjectProps) => {
  const { label, description, img, size } = PROJECTS_CONFIG[name];

  return (
    <section
      className={`${size}
      overflow-hidden
           min-h-[180px]
    bg-sky-800/40  rounded-2xl border
     border-gray-300/10 shadow-sm
     hover:scale-105 transition-transform
     p-4`}
    >
      <img
        src={IMAGES[img]}
        alt=""
        className="max-h-40 object-cover w-full rounded-lg"
      />

      <h2 className="text-xl text-white font-bold mt-4">{label}</h2>

      <p className="pt-2 text-gray-400 font-semibold text-sm pb-4">
        {description}
      </p>
    </section>
  );
};
