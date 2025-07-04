
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink, useLocation } from "react-router-dom";
// import navItems from "../../data/navItems";
// import logo from "../../../src/assets/logo.png";
// import HoverPopover from "../UI/HoverPopover";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18n.language || "hi");
//   const location = useLocation();

//   useEffect(() => {
//     const savedLang = localStorage.getItem("lang");
//     if (savedLang && savedLang !== i18n.language) {
//       i18n.changeLanguage(savedLang);
//       setLanguage(savedLang);
//     } else if (!savedLang) {
//       localStorage.setItem("lang", "hi");
//       i18n.changeLanguage("hi");
//       setLanguage("hi");
//     }
//   }, [i18n]);

//   const toggleLanguage = () => {
//     const newLang = language === "hi" ? "en" : "hi";
//     i18n.changeLanguage(newLang);
//     setLanguage(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   // Utility: check if current route is inside submenu
//   const isSubmenuActive = (submenu) =>
//     submenu?.some((item) => location.pathname === item.href);

//   return (
//     <nav
//       className="flex justify-between items-center py-4 px-8 md:px-10 
//       text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
//       border-b border-white/30 shadow-md rounded-xl"
//     >
//       {/* Logo and Brand */}
//       <div className="flex items-center gap-3 cursor-pointer">
//         <img
//           src={logo}
//           alt="Chaukhat Logo"
//           className="h-10 w-10 rounded-full object-cover bg-black"
//         />
//         <span className="text-4xl font-bold">चौखट</span>
//       </div>

//       {/* Navigation Items */}
//       <ul className="hidden md:flex gap-6 font-medium">
//         {navItems.map((item) => (
//           <li key={item.label} className="relative">
//             {item.submenu ? (
//               <HoverPopover
//                 trigger={
//                   <span
//                     className={`flex items-center gap-1 transition ${
//                       isSubmenuActive(item.submenu)
//                         ? "text-pink-600 font-semibold underline underline-offset-4"
//                         : "hover:text-pink-600"
//                     }`}
//                   >
//                     {t(item.label)} <span className="text-sm">▼</span>
//                   </span>
//                 }
//               >
//                 <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50">
//                   {item.submenu.map((subItem) => (
//                     <li key={subItem.label}>
//                       <NavLink
//                         to={subItem.href}
//                         className={({ isActive }) =>
//                           `block px-2 py-1 rounded text-left hover:bg-pink-100 transition ${
//                             isActive
//                               ? "text-pink-600 font-semibold underline"
//                               : ""
//                           }`
//                         }
//                       >
//                         {t(subItem.label)}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </HoverPopover>
//             ) : (
//               <NavLink
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `transition hover:text-pink-600 ${
//                     isActive
//                       ? "text-pink-600 font-bold underline underline-offset-4"
//                       : ""
//                   }`
//                 }
//               >
//                 {t(item.label)}
//               </NavLink>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Controls */}
//       <div className="flex items-center gap-4">
       
//         <NavLink to="/admin-login">
//   <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
//     {t("login")}
//   </button>
// </NavLink>

//         <button
//           onClick={toggleLanguage}
//           className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
//         >
//           {language === "hi" ? "हिन्दी" : "English"}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import navItems from "../../data/navItems";
// import logo from "../../../src/assets/logo.png";
// import HoverPopover from "../UI/HoverPopover";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import MobileMenuDrawer from "../UI/MobileDrawer";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18n.language || "hi");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const savedLang = localStorage.getItem("lang");
//     if (savedLang && savedLang !== i18n.language) {
//       i18n.changeLanguage(savedLang);
//       setLanguage(savedLang);
//     } else if (!savedLang) {
//       localStorage.setItem("lang", "hi");
//       i18n.changeLanguage("hi");
//       setLanguage("hi");
//     }
//   }, [i18n]);

//   const toggleLanguage = () => {
//     const newLang = language === "hi" ? "en" : "hi";
//     i18n.changeLanguage(newLang);
//     setLanguage(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   const isSubmenuActive = (submenu) =>
//     submenu?.some((item) => location.pathname === item.href);

//   return (
//     <>
//       <nav
//         className="flex justify-between items-center py-4 px-4 md:px-10 
//         text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
//         border-b border-white/30 shadow-md rounded-xl mt-2"
//       >
//         {/* Logo and Brand */}
//         <div className="flex items-center gap-3 cursor-pointer">
//           <img
//             src={logo}
//             alt="Chaukhat Logo"
//             className="h-10 w-10 rounded-full object-cover bg-black"
//           />
//           <span className="text-4xl font-bold">चौखट</span>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-6 font-medium">
//           {navItems.map((item) => (
//             <li key={item.label} className="relative">
//               {item.submenu ? (
//                 <HoverPopover
//                   trigger={
//                     <span
//                       className={`flex items-center gap-1 transition ${
//                         isSubmenuActive(item.submenu)
//                           ? "text-pink-600 font-semibold underline underline-offset-4"
//                           : "hover:text-pink-600"
//                       }`}
//                     >
//                       {t(item.label)} <span className="text-sm">▼</span>
//                     </span>
//                   }
//                 >
//                   <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50 bg-white">
//                     {item.submenu.map((subItem) => (
//                       <li key={subItem.label}>
//                         <NavLink
//                           to={subItem.href}
//                           className={({ isActive }) =>
//                             `block px-2 py-1 rounded text-left hover:bg-pink-100 transition ${
//                               isActive
//                                 ? "text-pink-600 font-semibold underline"
//                                 : ""
//                             }`
//                           }
//                         >
//                           {t(subItem.label)}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </HoverPopover>
//               ) : (
//                 <NavLink
//                   to={item.href}
//                   className={({ isActive }) =>
//                     `transition hover:text-pink-600 ${
//                       isActive
//                         ? "text-pink-600 font-bold underline underline-offset-4"
//                         : ""
//                     }`
//                   }
//                 >
//                   {t(item.label)}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Right Controls for Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           <NavLink to="/admin-login">
//             <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
//               {t("login")}
//             </button>
//           </NavLink>
//           <button
//             onClick={toggleLanguage}
//             className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
//           >
//             {language === "hi" ? "हिन्दी" : "English"}
//           </button>
//         </div>

//         {/* Hamburger / Close Icon (Mobile Only) */}
//         <div className="md:hidden">
//           <button onClick={() => setDrawerOpen((prev) => !prev)}>
//             {drawerOpen ? (
//               <CloseIcon fontSize="large" sx={{ color: "#EAA64D" }} />
//             ) : (
//               <MenuIcon fontSize="large" sx={{ color: "#EAA64D" }} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Drawer with Collapse */}
//       <MobileMenuDrawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         navItems={navItems}
//         t={t}
//         onNav={(href) => navigate(href)}
//         language={language}
//         toggleLanguage={toggleLanguage}
//       />
//     </>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import navItems from "../../data/navItems";
// import logo from "../../../src/assets/logo.png";
// import HoverPopover from "../UI/HoverPopover";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import MobileMenuDrawer from "../UI/MobileDrawer";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState("hi"); // Default Hindi
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const savedLang = localStorage.getItem("lang");
//     const defaultLang = savedLang || "hi";
//     i18n.changeLanguage(defaultLang);
//     setLanguage(defaultLang);
//     if (!savedLang) localStorage.setItem("lang", "hi");
//   }, [i18n]);

//   const toggleLanguage = () => {
//     const newLang = language === "hi" ? "en" : "hi";
//     i18n.changeLanguage(newLang);
//     setLanguage(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   const isSubmenuActive = (submenu) =>
//     submenu?.some((item) => location.pathname === item.href);

//   return (
//     <>
//       <nav
//         className="flex justify-between items-center py-4 px-4 md:px-10 
//         text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
//         border-b border-white/30 shadow-md rounded-xl mt-2"
//       >
//         {/* Logo and Brand */}
//         <div className="flex items-center gap-3 cursor-pointer">
//           <img
//             src={logo}
//             alt="Chaukhat Logo"
//             className="h-10 w-10 rounded-full object-cover bg-black"
//           />
//           <span className="text-4xl font-bold">चौखट</span>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-6 font-medium">
//           {navItems.map((item) => (
//             <li key={item.label} className="relative">
//               {item.submenu ? (
//                 <HoverPopover
//                   trigger={
//                     <span
//                       className={`flex items-center gap-1 transition ${
//                         isSubmenuActive(item.submenu)
//                           ? "text-pink-600 font-semibold underline underline-offset-4"
//                           : "hover:text-pink-600"
//                       }`}
//                     >
//                       {t(item.label)} <span className="text-sm">▼</span>
//                     </span>
//                   }
//                 >
//                   <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50 bg-white">
//                     {item.submenu.map((subItem) => (
//                       <li key={subItem.label}>
//                         <NavLink
//                           to={subItem.href}
//                           className={({ isActive }) =>
//                             `block px-2 py-1 rounded text-left hover:bg-pink-100 transition ${
//                               isActive
//                                 ? "text-pink-600 font-semibold underline"
//                                 : ""
//                             }`
//                           }
//                         >
//                           {t(subItem.label)}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </HoverPopover>
//               ) : (
//                 <NavLink
//                   to={item.href}
//                   className={({ isActive }) =>
//                     `transition hover:text-pink-600 ${
//                       isActive
//                         ? "text-pink-600 font-bold underline underline-offset-4"
//                         : ""
//                     }`
//                   }
//                 >
//                   {t(item.label)}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Right Controls */}
//         <div className="hidden md:flex items-center gap-4">
//           <NavLink to="/admin-login">
//             <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
//               {t("login")}
//             </button>
//           </NavLink>
//           <button
//             onClick={toggleLanguage}
//             className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
//           >
//             {language === "hi" ? "हिन्दी" : "English"}
//           </button>
//         </div>

//         {/* Mobile Hamburger / Close */}
//         <div className="md:hidden">
//           <button onClick={() => setDrawerOpen((prev) => !prev)}>
//             {drawerOpen ? (
//               <CloseIcon fontSize="large" sx={{ color: "#EAA64D" }} />
//             ) : (
//               <MenuIcon fontSize="large" sx={{ color: "#EAA64D" }} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       <MobileMenuDrawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         navItems={navItems}
//         t={t}
//         onNav={(href) => navigate(href)}
//         language={language}
//         toggleLanguage={toggleLanguage}
//       />
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png";
import HoverPopover from "../UI/HoverPopover";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenuDrawer from "../UI/MobileMenuDrawer";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("hi"); // Default Hindi
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    const defaultLang = savedLang || "hi";
    i18n.changeLanguage(defaultLang);
    setLanguage(defaultLang);
    if (!savedLang) localStorage.setItem("lang", "hi");
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = language === "hi" ? "en" : "hi";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const isSubmenuActive = (submenu) =>
    submenu?.some((item) => location.pathname === item.href);

  return (
    <>
      <nav
        className="flex justify-between items-center py-4 px-4 md:px-10 
        text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
        border-b border-white/30 shadow-md rounded-xl mt-2"
      >
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Chaukhat Logo"
            className="h-10 w-10 rounded-full object-cover bg-black"
          />
          <span className="text-4xl font-bold">चौखट</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.submenu ? (
                <HoverPopover
                  trigger={
                    <span
                      className={`flex items-center gap-1 transition ${
                        isSubmenuActive(item.submenu)
                          ? "text-pink-600 font-semibold underline underline-offset-4"
                          : "hover:text-pink-600"
                      }`}
                    >
                      {t(item.label)} <span className="text-sm">▼</span>
                    </span>
                  }
                >
                  <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50 bg-white">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink
                          to={subItem.href}
                          className={({ isActive }) =>
                            `block px-2 py-1 rounded text-left hover:bg-pink-100 transition ${
                              isActive
                                ? "text-pink-600 font-semibold underline"
                                : ""
                            }`
                          }
                        >
                          {t(subItem.label)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </HoverPopover>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `transition hover:text-pink-600 ${
                      isActive
                        ? "text-pink-600 font-bold underline underline-offset-4"
                        : ""
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/admin-login">
            <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
              {t("login")}
            </button>
          </NavLink>
          <button
            onClick={toggleLanguage}
            className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
          >
            {language === "hi" ? "हिन्दी" : "English"}
          </button>
        </div>

        {/* Mobile Hamburger / Close */}
        <div className="md:hidden">
          <button onClick={() => setDrawerOpen((prev) => !prev)}>
            {drawerOpen ? (
              <CloseIcon fontSize="large" sx={{ color: "#EAA64D" }} />
            ) : (
              <MenuIcon fontSize="large" sx={{ color: "#EAA64D" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenuDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
        t={t}
        onNav={(href) => navigate(href)}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  );
};

export default Navbar;
