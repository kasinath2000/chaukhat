

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Hero";
import Intro from "./Pages/Intro";
import Libery from "./Pages/Libery";
import Thought from "./Pages/Thought";
import AllIssue from "./Pages/AllIssue";
import SpecialIssue from "./Pages/SpecialIssue";
import Archive from "./Pages/archive";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CopyrightPolicy from "./Pages/CopyrightPolicy";

// Sidebar Pages
import Founder from "./Pages/Founder";
import AdvisoryBoard from "./Pages/advisory-board";
import EditorialBoard from "./Pages/EditorialBoard";
import Patron from "./Pages/patron";
import ExpertCommittee from "./Pages/ExpertCommittee";
import ActiveMembers from "./Pages/ActiveMembers";


//libery
import AudioBooks from "./Pages/AudioBooks";
import TextBooks from "./Pages/TextBooks";
import BookReviews from "./Pages/BookReviews";

// Thought Layout
import Patwar from "./Pages/patwar";
import Lantern from "./Pages/lantern";
import Idioms from "./Pages/idioms";
import ThoughtLayout from "./Layout/ThoughtLayout";

// Archive Layout
import ArchiveLayout from "./Layout/ArchiveLayout";
import AuthorsHome from "./Pages/Archive/AuthorsHome";
import AuthorsMemories from "./Pages/Archive/AuthorsMemories";
import Past from "./Pages/Archive/Past";
import MuseumMemories from "./Pages/Archive/MuseumMemories";

// Media Layout
import MediaLayout from "./Layout/MediaLayout";
import CulturalEvents from "./Pages/media/CulturalEvents";
import Interview from "./Pages/media/Interview";
import Theatre from "./Pages/media/Theatre";
import Cinema from "./Pages/media/Cinema";
import Discussions from "./Pages/media/Discussions";
import Workshop from "./Pages/media/Workshop";
import ArtCorner from "./Pages/media/ArtCorner";

// News Layout
import NewsLayout from "./Layout/NewsLayout";
import ChaukhatPar from "./Pages/news/ChaukhatPar";
import KhabarSahityaKi from "./Pages/news/KhabarSahityaKi";

// Rules Layout
import RulesLayout from "./Layout/RulesLayout";
import Membership from "./Pages/RulesBook/Membership";
import Publication from "./Pages/RulesBook/Publication";
import Confirmation from "./Pages/RulesBook/Confirmation";

//notice 
import AllNotices from "./Pages/AllNotices";
import NoticePage from "./Pages/NoticePage";

// Admin Dashboard
import AdminLogin from "./Pages/Login/Login";
import DashboardLayout from "./components/Admin/Layout/DashboardLayout";
import Overview from "./Pages/Dashboard/Overview";
import Users from "./Pages/Dashboard/Users";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// Admin Dashboard Pages
import Notices from "./Pages/Dashboard/Notices";
import Issues from "./Pages/Dashboard/Issues";
import Media from "./Pages/Dashboard/Media";
import Library from "./Pages/Dashboard/Library";
import Archives from "./Pages/Dashboard/Archives";
import Rules from "./Pages/Dashboard/Rules";
import Messages from "./Pages/Dashboard/Messages";
import Settings from "./Pages/Dashboard/Settings";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div
      className="bg-[#FAD59A] min-h-screen flex flex-col"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {!isDashboard && <Navbar />}
      <main style={{ flex: 1 }}>{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/libery" element={<Libery />} />
          <Route path="/libery/books" element={<div>Books Page</div>} />
          <Route path="/libery/magazines" element={<div>Magazines Page</div>} />
          <Route path="/libery/journals" element={<div>Journals Page</div>} />
          <Route path="/libery/audio-books" element={<AudioBooks />} />
<Route path="/libery/text-books" element={<TextBooks />} />
<Route path="/libery/book-reviews" element={<BookReviews />} />

          <Route path="/thought" element={<Thought />} />
          <Route path="/allissue" element={<AllIssue />} />
          <Route path="/Specialissu" element={<SpecialIssue />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />

          {/* Sidebar Pages */}
          <Route path="/founder" element={<Founder />} />
          <Route path="/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/patron" element={<Patron />} />
          <Route path="/expert-committee" element={<ExpertCommittee />} />
          <Route path="/active-members" element={<ActiveMembers />} />

          {/* Thought Layout */}
          <Route path="/thought" element={<ThoughtLayout />}>
            <Route index element={<Patwar />} />
            <Route path="patwar" element={<Patwar />} />
            <Route path="lantern" element={<Lantern />} />
            <Route path="idioms" element={<Idioms />} />
          </Route>

          {/* Archive Layout */}
          <Route path="/archive" element={<ArchiveLayout />}>
            <Route index element={<AuthorsHome />} />
            <Route path="authors-home" element={<AuthorsHome />} />
            <Route path="authors-memories" element={<AuthorsMemories />} />
            <Route path="past" element={<Past />} />
            <Route path="museum-memories" element={<MuseumMemories />} />
          </Route>

          {/* Media Layout */}
          <Route path="/media" element={<MediaLayout />}>
            <Route index element={<Interview />} />
            <Route path="interview" element={<Interview />} />
            <Route path="cultural-events" element={<CulturalEvents />} />
            <Route path="theatre" element={<Theatre />} />
            <Route path="cinema" element={<Cinema />} />
            <Route path="discussions" element={<Discussions />} />
            <Route path="workshop" element={<Workshop />} />
            <Route path="art-corner" element={<ArtCorner />} />
          </Route>

          {/* News Layout */}
          <Route path="/newus" element={<NewsLayout />}>
            <Route index element={<ChaukhatPar />} />
            <Route path="chaukhat-par" element={<ChaukhatPar />} />
            <Route path="khabar-sahitya-ki" element={<KhabarSahityaKi />} />
          </Route>

          {/* Rules Layout */}
          <Route path="/rulesbook" element={<RulesLayout />}>
            <Route path="membership" element={<Membership />} />
            <Route path="publication" element={<Publication />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
          {/* 🆕 Notice Pages */}
          <Route path="/all-notices" element={<AllNotices />} />
          <Route path="/notice/:id" element={<NoticePage />} />


          {/* Admin Login & Dashboard */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
  <Route path="users" element={<Users />} />
  <Route path="notices" element={<Notices />} />
  <Route path="issues" element={<Issues />} />
  <Route path="media" element={<Media />} />
  <Route path="library" element={<Library />} />
  <Route path="archives" element={<Archives />} />
  <Route path="rules" element={<Rules />} />
  <Route path="messages" element={<Messages />} />
  <Route path="settings" element={<Settings />} />
            {/* Add more dashboard pages here */}
          </Route>
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
