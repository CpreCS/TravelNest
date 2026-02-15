import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import WelcomePage from './pages/WelcomePage';
import ExplorePage from './pages/ExplorePage';
import MyPicksPage from './pages/MyPicksPage';
import PlansPage from './pages/PlansPage';
import worldmap from './assets/WorldMap.jpg';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <BrowserRouter>
      <div
        className='w-full min-h-screen overflow-hidden'
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.97), rgba(255,255,255,0.99)), url(${worldmap})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundPositionX : 'center',
          backgroundAttachment: 'scroll',
          backgroundSize: 'auto',
        }}
      >
        <TopNav setIsOpen={setIsOpen} />

        <div className="flex pt-16 justify-center">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex-1 text-[#333333] max-w-[1280px] w-full">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/mypicks" element={<MyPicksPage />} />
              <Route path="/plans" element={<PlansPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App

