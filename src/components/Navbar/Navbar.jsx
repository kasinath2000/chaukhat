
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import navItems from "../../data/navItems";
// import logo from "../../../src/assets/logo.png";
// import HoverPopover from "../UI/HoverPopover";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18n.language || "hi");

//   // Sync with localStorage and i18n
//   useEffect(() => {
//     const savedLang = localStorage.getItem("lang");
//     if (savedLang && savedLang !== i18n.language) {
//       i18n.changeLanguage(savedLang);
//       setLanguage(savedLang);
//     } else if (!savedLang) {
//       // Default to Hindi if nothing saved
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

//   return (
//     <nav
//       className="flex justify-between items-center py-4 px-8 md:px-10 
//       text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
//       border-b border-white/30 shadow-md rounded-xl "
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
//       <ul className="hidden md:flex gap-6 font-medium cursor-pointer">
//         {navItems.map((item) => (
//           <li key={item.label} className="cursor-pointer">
//             {item.submenu ? (
//               <HoverPopover
//                 trigger={
//                   <button className="flex items-center gap-1 hover:text-pink-600 transition">
//                     {t(item.label)} <span className="text-sm">▼</span>
//                   </button>
//                 }
//               >
//                 <ul className="flex flex-col gap-1  rounded-md shadow-md p-2 min-w-[150px]">
//                   {item.submenu.map((subItem) => (
//                     <li key={subItem.label} className="cursor-pointer">
//                       <button className="text-left w-full px-2 py-1 rounded hover:bg-pink-100 hover:text-pink-600 transition">
//                         {t(subItem.label)}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </HoverPopover>
//             ) : (
//               <button className="hover:text-pink-600 transition">
//                 {t(item.label)}
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Controls */}
//       <div className="flex items-center gap-4">
//         <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
//           {t("login")}
//         </button>

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


import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png";
import HoverPopover from "../UI/HoverPopover";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "hi");
  const location = useLocation();

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

  // Utility: check if current route is inside submenu
  const isSubmenuActive = (submenu) =>
    submenu?.some((item) => location.pathname === item.href);

  return (
    <nav
      className="flex justify-between items-center py-4 px-8 md:px-10 
      text-[#3B060A] bg-[#fad59a]/30 backdrop-blur-lg 
      border-b border-white/30 shadow-md rounded-xl"
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

      {/* Navigation Items */}
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
                <ul className="flex flex-col gap-1 rounded-md shadow-md p-2 min-w-[160px] z-50">
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

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button className="border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
          {t("login")}
        </button>

        <button
          onClick={toggleLanguage}
          className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 transition"
        >
          {language === "hi" ? "हिन्दी" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

