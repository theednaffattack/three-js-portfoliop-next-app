import {
  Contact,
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

interface NavButtonProps {
  className: string;
  x: string;
  y: string;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

function getIcon(icon: string) {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;

    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;

    case "twitter":
      return <X className="w-full h-auto" strokeWidth={1.5} />;

    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;

    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;

    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;

    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;

    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
}

export function NavButton({
  className,
  x,
  y,
  label,
  link,
  icon,
  newTab,
}: NavButtonProps) {
  return (
    <div
      className={className}
      style={{
        transform: `translate(${x}, ${y})`,
      }}
    >
      <Link
        aria-label={label}
        className=" bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] text-foreground rounded-full flex items-center justify-center shadow-glass-inset hover:shadow-glass-sm group"
        href={link}
        target={newTab ? "_blank" : "_self"}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
          {getIcon(icon)}
        </span>
      </Link>
    </div>
    // </div>
  );
}
