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
  { label: "Worksheets", href: "/worksheets/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerLegalLinks = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
] as const;

export const importantPages = [
  {
    path: "/about/",
    title: "About FlowerDrawings.org | Drawing Tutorials and Worksheets",
    description:
      "Learn about FlowerDrawings.org, beginner-friendly flower drawing tutorials, printable worksheets, and creator AlexArts.",
  },
  {
    path: "/contact/",
    title: "Contact FlowerDrawings.org",
    description:
      "Contact FlowerDrawings.org for questions about flower drawing tutorials and printable practice worksheets.",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | FlowerDrawings.org",
    description:
      "Read the FlowerDrawings.org privacy policy explaining how this static tutorial website is served and used.",
  },
  {
    path: "/disclaimer/",
    title: "Disclaimer | FlowerDrawings.org",
    description:
      "Read the FlowerDrawings.org disclaimer for educational flower drawing tutorials and printable practice worksheets.",
  },
  {
    path: "/terms-and-conditions/",
    title: "Terms and Conditions | FlowerDrawings.org",
    description:
      "Read the FlowerDrawings.org terms for personal, family, classroom, and educational use of tutorials and worksheets.",
  },
] as const;
