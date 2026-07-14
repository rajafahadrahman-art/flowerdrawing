export const siteConfig = {
  name: "FlowerDrawings.com",
  url: "https://flowerdrawings.com",
  email: "ale298784@gmail.com",
  description:
    "Learn flower drawing easy step-by-step guidance, simple flowers drawing ideas, beginner tips, pencil sketch techniques and get downloadable worksheets free.",
  logo: {
    src: "/images/brand/flowerdrawings-logo.webp",
    alt: "FlowerDrawings.com",
    width: 1254,
    height: 1254,
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
