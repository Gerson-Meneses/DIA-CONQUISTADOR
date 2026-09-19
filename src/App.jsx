import AudioPlayer from './components/AudioPlayer.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Counter from './components/Counter.jsx'
import Emblem from './components/Emblem.jsx'
import Personal from './components/Personal.jsx'
import Badges from './components/Badges.jsx'
import SpeakLord from './components/SpeakLord.jsx'
import Letter from './components/Letter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <AudioPlayer />
      <Hero />
      <Timeline />
      <Counter />
      <Emblem />
      <Personal />
      <Badges />
      <Letter />
      <Footer />
    </div>
  )
}
