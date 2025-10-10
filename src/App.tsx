import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
