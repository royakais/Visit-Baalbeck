import Sky from '../components/Sky.jsx'
import Hero from '../components/scenes/Hero.jsx'
import SixColumns from '../components/scenes/SixColumns.jsx'
import Trilithon from '../components/scenes/Trilithon.jsx'
import Quarry from '../components/scenes/Quarry.jsx'
import Bacchus from '../components/scenes/Bacchus.jsx'
import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle('Visit Baalbek', 'Explore Baalbek, Lebanon: the Roman temples of Heliopolis, the giant stones, local food, places to stay and hidden gems.')
  return (
    <main className="home">
      <Sky />
      <Hero />
      <SixColumns />
      <Trilithon />
      <Quarry />
      <Bacchus />
    </main>
  )
}
