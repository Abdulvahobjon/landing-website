import './App.css';
import Analytics from './components/Analytics';
import AnalyticsTwo from './components/AnalyticsTwo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>  
      <AnalyticsTwo/>
      <Footer/>
    </div>
  )
}