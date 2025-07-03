
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
// import { NavLink, useLocation } from "react-router-dom";
// import navItems from "../../data/navItems";
// import logo from "../../../src/assets/logo.png";
// import HoverPopover from "../UI/HoverPopover";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18n.language || "hi");
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

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
//     <nav className="flex justify-between items-center py-4 px-4 md:px-10 bg-[#fad59a]/30 backdrop-blur-lg border-b border-white/30 shadow-md rounded-xl relative z-50">
//       {/* Logo */}
//       <NavLink to="/" className="flex items-center gap-3">
//         <img
//           src={logo}
//           alt="Chaukhat Logo"
//           className="h-10 w-10 rounded-full object-cover bg-black"
//         />
//         <span className="text-3xl font-bold text-[#3B060A]">चौखट</span>
//       </NavLink>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6 font-medium text-[#3B060A]">
//         {navItems.map((item) => (
//           <li key={item.label} className="relative">
//             {item.submenu ? (
//               <HoverPopover
//                 trigger={
//                   <span
//                     className={`flex items-center gap-1 transition cursor-pointer ${
//                       isSubmenuActive(item.submenu)
//                         ? "text-pink-600 font-semibold underline underline-offset-4"
//                         : "hover:text-pink-600"
//                     }`}
//                   >
//                     {t(item.label)} <span className="text-sm">▼</span>
//                   </span>
//                 }
//               >
//                 <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50 bg-white">
//                   {item.submenu.map((subItem) => (
//                     <li key={subItem.label}>
//                       <NavLink
//                         to={subItem.href}
//                         className={({ isActive }) =>
//                           `block px-2 py-1 rounded hover:bg-pink-100 transition ${
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

//       {/* Right controls */}
//       <div className="hidden md:flex items-center gap-4">
//         <NavLink to="/admin-login">
//           <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
//             {t("login")}
//           </button>
//         </NavLink>

//         <button
//           onClick={toggleLanguage}
//           className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
//         >
//           {language === "hi" ? "हिन्दी" : "English"}
//         </button>
//       </div>

//       {/* Hamburger Icon */}
//       <div className="md:hidden">
//         <button onClick={() => setDrawerOpen(true)}>
//           <MenuIcon fontSize="large" />
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {drawerOpen && (
//         <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg p-4 flex flex-col gap-4 overflow-y-auto">
//           <div className="flex justify-between items-center mb-4">
//             <span className="text-2xl font-bold text-[#3B060A]">चौखट</span>
//             <button onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </button>
//           </div>

//           {navItems.map((item) => (
//             <div key={item.label}>
//               {item.submenu ? (
//                 <>
//                   <button
//                     className="w-full text-left font-medium text-[#3B060A] py-2"
//                     onClick={() =>
//                       setOpenSubmenu(openSubmenu === item.label ? null : item.label)
//                     }
//                   >
//                     {t(item.label)} <span className="float-right">▾</span>
//                   </button>
//                   {openSubmenu === item.label && (
//                     <ul className="ml-4 flex flex-col gap-1">
//                       {item.submenu.map((subItem) => (
//                         <li key={subItem.label}>
//                           <NavLink
//                             to={subItem.href}
//                             className="block px-2 py-1 rounded hover:bg-pink-100 text-[#3B060A]"
//                             onClick={() => setDrawerOpen(false)}
//                           >
//                             {t(subItem.label)}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <NavLink
//                   to={item.href}
//                   className="block font-medium text-[#3B060A] py-2 hover:text-pink-600"
//                   onClick={() => setDrawerOpen(false)}
//                 >
//                   {t(item.label)}
//                 </NavLink>
//               )}
//             </div>
//           ))}

//           {/* Login and Language Buttons */}
//           <NavLink to="/admin-login" onClick={() => setDrawerOpen(false)}>
//             <button className="border border-pink-500 w-full py-2 rounded-full hover:bg-pink-500 hover:text-white transition mt-4">
//               {t("login")}
//             </button>
//           </NavLink>
//           <button
//             onClick={() => {
//               toggleLanguage();
//               setDrawerOpen(false);
//             }}
//             className="text-sm px-3 py-2 rounded-full border border-gray-400 hover:bg-gray-200 transition"
//           >
//             {language === "hi" ? "हिन्दी" : "English"}
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png";
import HoverPopover from "../UI/HoverPopover";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileDropdown from "../UI/MobileDrawer";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "hi");
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLanguage(savedLang);
    } else if (!savedLang) {
      localStorage.setItem("lang", "hi");
      i18n.changeLanguage("hi");
      setLanguage("hi");
    }
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
    <div className="relative z-50">
      <nav className="flex justify-between items-center py-4 px-4 md:px-10 bg-[#fad59a]/30 backdrop-blur-lg border-b border-white/30 shadow-md rounded-xl">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Chaukhat Logo"
            className="h-10 w-10 rounded-full object-cover bg-black"
          />
          <span className="text-3xl font-bold text-[#3B060A]">चौखट</span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-[#3B060A]">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.submenu ? (
                <HoverPopover
                  trigger={
                    <span
                      className={`flex items-center gap-1 transition cursor-pointer ${
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
                            `block px-2 py-1 rounded hover:bg-pink-100 transition ${
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

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <MobileDropdown
          navItems={navItems}
          t={t}
          language={language}
          toggleLanguage={toggleLanguage}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
