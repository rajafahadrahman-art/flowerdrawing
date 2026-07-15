export const siteConfig = {
  name: "FlowerDrawings.org",
  url: "https://flowerdrawings.org",
  email: "ale298784@gmail.com",
  description:
    "Learn flower drawing easy step-by-step guidance, simple flowers drawing ideas, beginner tips, pencil sketch techniques and get downloadable worksheets free.",
  logo: {
    src: "/images/brand/flowerdrawings-logo.webp",
    alt: "FlowerDrawings.org",
    width: 1254,
    height: 1254,
  },
  author: {
    name: "AlexArts",
    bio: "AlexArts creates beginner-friendly flower drawing tutorials and printable practice worksheets designed to make drawing feel clear, creative, and approachable.",
    image: "/images/authors/alexarts-placeholder.svg",
    imageAlt: "AlexArts",
  },
} as const;

export const homepageSeo = {
  title: "Easy Flower Drawing Step-by-Step Guide for Beginners to Intermediate",
  description:
    "Learn flower drawing easy step-by-step guidance, simple flowers drawing ideas, beginner tips, pencil sketch techniques and get downloadable worksheets free.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Drawing Tutorials", href: "/flower-drawing/" },
  { label: "Worksheets", href: "/#worksheets" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: `mailto:${siteConfig.email}` },
] as const;
