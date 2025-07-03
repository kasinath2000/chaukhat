import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileDropdown = ({ navItems, t, language, toggleLanguage, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div className="absolute top-full left-0 w-full bg-[#fff4e5]/90 backdrop-blur-md shadow-md z-40 transition-all duration-300">
      <div className="p-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <div key={item.label}>
            {item.submenu ? (
              <>
                <button
                  className="w-full text-left font-medium text-[#3B060A] py-2"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                  }
                >
                  {t(item.label)} <span className="float-right">▾</span>
                </button>
                {openSubmenu === item.label && (
                  <ul className="ml-4 flex flex-col gap-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink
                          to={subItem.href}
                          className="block px-2 py-1 rounded hover:bg-pink-100 text-[#3B060A]"
                          onClick={onClose}
                        >
                          {t(subItem.label)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                to={item.href}
                className="block font-medium text-[#3B060A] py-2 hover:text-pink-600"
                onClick={onClose}
              >
                {t(item.label)}
              </NavLink>
            )}
          </div>
        ))}

        {/* Login and Language */}
        <NavLink to="/admin-login" onClick={onClose}>
          <button className="border border-pink-500 w-full py-2 rounded-full hover:bg-pink-500 hover:text-white transition mt-4">
            {t("login")}
          </button>
        </NavLink>
        <button
          onClick={() => {
            toggleLanguage();
            onClose();
          }}
          className="text-sm px-3 py-2 rounded-full border border-gray-400 hover:bg-gray-200 transition"
        >
          {language === "hi" ? "हिन्दी" : "English"}
        </button>
      </div>
    </div>
  );
};

export default MobileDropdown;
