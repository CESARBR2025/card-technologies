const COURSES_CONFIG = {
  react: {
    label: "React",
    color: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600",
    img: "react",
    description: "Curso de React",
    size: "col-span-2",
  },
  css: {
    label: "CSS",
    color: "bg-gradient-to-br from-purple-800 via-purple-700 to-purple-500",
    img: "css",
    description: "Curso de CSS",
    size: "col-span-1",
  },
  node: {
    label: "Node",
    color: "bg-gradient-to-br from-lime-600 via-lime-500 to-lime-400",
    img: "node",
    description: "Curso de Node",
    size: "col-span-1",
  },
  html: {
    label: "HTML",
    color: "bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400",
    img: "html",
    description: "Curso de HTML",
    size: "col-span-2",
  },
} as const;

type CourseName = keyof typeof COURSES_CONFIG;
type CourseProps = {
  name: CourseName;
};

export const CardCourses = ({ name }: CourseProps) => {
  const { label, color, img, description, size } = COURSES_CONFIG[name];

  return (
    <a
      className={`${size} ${color} 
      relative rounded-3xl overflow-hidden           
          border border-cyan-900
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition-transform
          cursor-pointer
          min-h-[180px]
          group`}
    >
      <span
        className="absolute bottom-2 left-3
            font-bold text-2xl text-white"
      >
        {label}
      </span>
      <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5 text-white">
        {description}
      </span>

      <svg
        width={100}
        height={100}
        className="absolute -right-4 -bottom-4
              -rotate-6 size-28
              group-hover:-rotate-180
              group-hover:-scale-125
              transition-transform"
      >
        <use href={`assets/sprite.svg#${img}`}></use>
      </svg>
    </a>
  );
};
