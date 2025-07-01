const navItems = [
  { label: "home", href: "/" },
  { label: "introduction", href: "/intro" },
  {
    label: "elibry",
    href: "/libery",
    submenu: [
      { label: "books", href: "/libery/books" },
      { label: "magazines", href: "/libery/magazines" },
      { label: "journals", href: "/libery/journals" },
    ],
  },
  { label: "media", href: "/media" },
  { label: "news", href: "/newus" },
  { label: "newInfo", href: "/newinfo" },
  { label: "thought", href: "/thought" },
  { label: "allIssue", href: "/allissue" },
  { label: "specialIssue", href: "/Specialissu" },
  { label: "Archive", href: "/archive" },
  { label: "contactUs", href: "/contact-us" },
];

export default navItems;
