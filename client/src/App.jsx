import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Chats from './pages/Chats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="chats" element={<Chats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
