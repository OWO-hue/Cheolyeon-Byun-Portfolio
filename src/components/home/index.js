import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ',' ','B','y', 'u', 'n']
  const jobArray = ['W', 'E', 'B', ' ', 'D', 'E', 'V']
  const nameArray2 = ['C','h','e','o','l','y','e','o','n']

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
  },[])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray2}
            idx={1}
          ></AnimatedLetters>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={10}
          ></AnimatedLetters>
        </h1>
        <h3>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={16}
          ></AnimatedLetters>
        </h3>
        <h2>Aspiring Fullstack Javascript Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
