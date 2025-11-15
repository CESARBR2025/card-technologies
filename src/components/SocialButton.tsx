const SOCIAL_COLORS = {
  github: {
    color: "bg-black",
    url: "https://github.com/CESARBR2025",
    label: "GitHub",
  },
  linkedin: {
    color: "bg-white",
    url: "https://www.linkedin.com/in/cesar-ivan-barcenas-rosales-a74a83378",
    label: "Linkedin",
  },
  instagram: {
    color: "bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600 ",
    url: "https://www.instagram.com/br_cesarx/",
    label: "Instagram",
  },
} as const;

type SocialName = keyof typeof SOCIAL_COLORS;

type SocialButtonProps = {
  name: SocialName;
};

export const SocialButton = ({ name }: SocialButtonProps) => {
  const { color, url, label } = SOCIAL_COLORS[name];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title="Ir a Twitch de Cesar"
      className={`${color} p-1 flex
            justify-center size-12 sm:size-13 rounded-full items-center
            hover:scale-110 transition-transform`}
    >
      <svg width={28} height={28}>
        <use href={`assets/sprite.svg#${name}`} />
      </svg>
    </a>
  );
};
