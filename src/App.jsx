// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Hero"; // or your actual Home component
// Pages
import Intro from "./Pages/Intro";
import Libery from "./Pages/Libery";
import Media from "./Pages/Media";
import News from "./Pages/News";
import NewInfo from "./Pages/NewInfo";
import Thought from "./Pages/Thought";
import AllIssue from "./Pages/AllIssue";
import SpecialIssue from "./Pages/SpecialIssue";
import Archive from "./Pages/archive";
import ContactUs from "./Pages/ContactUs";

// Pages from Right Sidebar (LinkChipCard)
import Founder from "./Pages/Founder";
import AdvisoryBoard from "./Pages/advisory-board";
import EditorialBoard from "./Pages/EditorialBoard";
import Patron from "./Pages/patron";
import ExpertCommittee from "./Pages/ExpertCommittee";
import ActiveMembers from "./Pages/ActiveMembers";

//thought pages link
import Patwar from "./Pages/patwar";
import Lantern from "./Pages/lantern";
import Idioms from "./Pages/idioms";
import ThoughtLayout from "./Layout/ThoughtLayout";

//Achive pages link
import ArchiveLayout from "./Layout/ArchiveLayout";
import AuthorsHome from "./Pages/Archive/AuthorsHome";
import AuthorsMemories from "./Pages/Archive/AuthorsMemories";
import Past from "./Pages/Archive/Past";
import MuseumMemories from "./Pages/Archive/MuseumMemories";

function App() {
  return (
    <Router>
      <div
        className="bg-[#FAD59A] min-h-screen flex flex-col"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/libery" element={<Libery />} />
            <Route path="/libery/books" element={<div>Books Page</div>} />
            <Route
              path="/libery/magazines"
              element={<div>Magazines Page</div>}
            />
            <Route path="/libery/journals" element={<div>Journals Page</div>} />
            <Route path="/media" element={<Media />} />
            <Route path="/newus" element={<News />} />
            <Route path="/newinfo" element={<NewInfo />} />
            <Route path="/thought" element={<Thought />} />
            <Route path="/allissue" element={<AllIssue />} />
            <Route path="/Specialissu" element={<SpecialIssue />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Right Sidebar Links */}
            <Route path="/founder" element={<Founder />} />
            <Route path="/advisory-board" element={<AdvisoryBoard />} />
            <Route path="/editorial-board" element={<EditorialBoard />} />
            <Route path="/patron" element={<Patron />} />
            <Route path="/expert-committee" element={<ExpertCommittee />} />
            <Route path="/active-members" element={<ActiveMembers />} />

            {/**thought pages link */}
            <Route path="/thought" element={<ThoughtLayout />}>
              <Route index element={<Patwar />} />
              <Route path="patwar" element={<Patwar />} />
              <Route path="lantern" element={<Lantern />} />
              <Route path="idioms" element={<Idioms />} />
            </Route>

            {/* Archive Layout with Nested Routes */}
            <Route path="/archive" element={<ArchiveLayout />}>
              <Route index element={<AuthorsHome />} />
              <Route path="authors-home" element={<AuthorsHome />} />
              <Route path="authors-memories" element={<AuthorsMemories />} />
              <Route path="past" element={<Past />} />
              <Route path="museum-memories" element={<MuseumMemories />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
