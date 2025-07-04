





import React, { useState } from "react";
import {
  Drawer,
  Box,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenuDrawer = ({
  open,
  onClose,
  navItems,
  t,
  onNav,
  language,
  toggleLanguage,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: {
          mt: "72px",
          height: "calc(100% - 72px)",
          width: 260,
          backgroundColor: "rgba(255, 244, 229, 0.9)",
          backdropFilter: "blur(10px)",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        },
      }}
    >
      {/* Top Bar: Language & Close */}
      <Box px={2} py={2} display="flex" alignItems="center" justifyContent="space-between">
        {/* Language Button */}
        <Box
          onClick={() => {
            toggleLanguage();
            onClose();
          }}
          sx={{
            textAlign: "center",
            fontSize: 14,
            border: "1px solid gray",
            color: "#3B060A",
            borderRadius: "999px",
            py: 1,
            px: 2,
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#eee",
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            },
          }}
        >
          {language === "hi" ? "हिन्दी" : "English"}
        </Box>

        {/* Close Icon */}
        <IconButton onClick={onClose} sx={{ color: "#3B060A" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <Box px={2} py={1} display="flex" flexDirection="column" gap={1}>
        {navItems.map((item) =>
          item.submenu ? (
            <Box key={item.label}>
              <Box
                onClick={() => toggleSubmenu(item.label)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#3B060A",
                  py: 1,
                  px: 1,
                  borderRadius: "6px",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#fff4e5",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {t(item.label)}
                {openSubmenu === item.label ? (
                  <ExpandLessIcon sx={{ color: "#EAA64D" }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: "#EAA64D" }} />
                )}
              </Box>
              <Collapse in={openSubmenu === item.label}>
                <Box ml={2} mt={1}>
                  {item.submenu.map((sub) => (
                    <Box
                      key={sub.label}
                      onClick={() => {
                        onNav(sub.href);
                        onClose();
                      }}
                      sx={{
                        py: 0.5,
                        px: 1,
                        fontSize: 14,
                        cursor: "pointer",
                        color: "#3B060A",
                        borderRadius: "6px",
                        transition: "all 0.3s",
                        "&:hover": {
                          backgroundColor: "#fff4e5",
                          color: "#EAA64D",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      {t(sub.label)}
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Box>
          ) : (
            <Box
              key={item.label}
              onClick={() => {
                onNav(item.href);
                onClose();
              }}
              sx={{
                py: 1,
                px: 1,
                fontWeight: "medium",
                cursor: "pointer",
                color: "#3B060A",
                borderRadius: "6px",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#fff4e5",
                  color: "#EAA64D",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                },
              }}
            >
              {t(item.label)}
            </Box>
          )
        )}

        {/* Login Button */}
        <Divider sx={{ my: 2 }} />
        <Box
          onClick={() => {
            onNav("/admin-login");
            onClose();
          }}
          sx={{
            py: 1,
            textAlign: "center",
            border: "1px solid #EAA64D",
            borderRadius: "999px",
            color: "#3B060A",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#EAA64D",
              color: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            },
          }}
        >
          {t("login")}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;
