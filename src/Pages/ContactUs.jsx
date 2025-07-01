// pages/ContactUs.jsx
import { Box, Typography, Link } from "@mui/material";
import ContactForm from "../components/Form/ContactForm";
import CustomBox from "../components/UI/CustomBox";
import SocialLinks from "../components/SocialLinks/SocialLinks";

// Dynamic contact details
const contactDetails = {
  phones: ["8178401687", "9560836978", "8929995706"],
  email: "chaukhathindipatrika@gmail.com",
};

const addresses = {
  permanent: "मकान न: 4033, गली न: 17, अजीत नगर, गांधी नगर, दिल्ली - 110031",
  current:
    "रुम नंबर 31, बिरसामुंडा छात्रावास, महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय, वर्धा, महाराष्ट्र - 442001",
};

const ContactUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        // color: "#000",
      }}
    >
      {/* Left Side */}
      <CustomBox
        sx={{
          flex: 1,
          backgroundColor: "#EAA64D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 1, color: "#4682A9" }}
        >
          संपर्क करें
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#E5E0D8", textAlign: "center", mb: 4 }}
        >
          कृपया नीचे दिए गए फॉर्म के ज़रिये हमें अपनी बात लिखें। हम आपकी टिप्पणी और सवालों के उत्तर जल्द-अज़-जल्द देने की कोशिश करेंगे।
        </Typography>

        <CustomBox
          sx={{
            borderColor: "#EAD8A4",
            width: "100%",
            maxWidth: 500,
          }}
        >
          <ContactForm />
        </CustomBox>
      </CustomBox>

      {/* Right Side */}
      <CustomBox
        sx={{
          flex: 1,
          backgroundColor: "#EAA64D",
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#4682A9" }}>
          संपर्क जानकारी
        </Typography>

        {contactDetails.phones.map((phone, index) => (
          <Typography key={phone} sx={{ mb: 1,color:"#000" }}>
            📞 मोबाइल {index + 1}:{" "}
            <Link href={`tel:${phone}`} underline="hover" color="inherit">
              {phone}
            </Link>
          </Typography>
        ))}

        <Typography sx={{color:'#000'}}>
          📧 ई-मेल:{" "}
          <Link href={`mailto:${contactDetails.email}`} underline="hover" color="inherit">
            {contactDetails.email}
          </Link>
        </Typography>

        {/* Address Section */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mt: 5, mb: 2, color: "#4682A9" }}
        >
          पते की जानकारी
        </Typography>

        <CustomBox sx={{ borderColor: "#EAD8A4", mb: 3 }}>
          <Typography className="font-medium mb-1 text-black">🏠 स्थायी पता</Typography>
          <Typography sx={{color:'#000'}}>{addresses.permanent}</Typography>
        </CustomBox>

        <CustomBox sx={{ borderColor: "#EAD8A4" }}>
          <Typography className="font-medium mb-1 text-black">🏡 वर्तमान पता</Typography>
          <Typography sx={{color:'#000'}}>{addresses.current}</Typography>
        </CustomBox>

        {/* Social Media */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mt: 5, mb: 2, color: "#4682A9" }}
        >
          सोशल मीडिया
        </Typography>

        <Box
          sx={{
            mt: 2,
            border: 2,
            borderRadius: 2,
            borderColor: "#EAD8A4",
            p: 1,
          }}
        >
          <SocialLinks />
        </Box>
      </CustomBox>
    </Box>
  );
};

export default ContactUs;
