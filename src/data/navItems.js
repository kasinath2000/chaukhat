

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
       { label: "audioBooks", href: "/libery/audio-books" }, // ऑडियो पुस्तकें
      { label: "textBooks", href: "/libery/text-books" }, // पाठ्यक्रम की पुस्तकें
      { label: "bookReviews", href: "/libery/book-reviews" }, // पुस्तक समीक्षाएं
    ],
  },
  { label: "media", href: "/media" },
  { label: "news", href: "/newus" },
  { label: "thought", href: "/thought" },
  { label: "allIssue", href: "/allissue" },
  { label: "specialIssue", href: "/Specialissu" },
  { label: "archive", href: "/archive" }, // ✅ fixed
  { label: "rulesbook", href: "/rulesbook" }, // ✅ fixed
  { label: "contactUs", href: "/contact-us" },
];

export default navItems;
