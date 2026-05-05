import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=> {
    function handleScroll (){
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
      setIsScrolled(false) 
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-30 border-b border-space-navy px-6 py-4 flex items-center justify-between 
    transition-all duration-500 ${isScrolled ? 'bg-space-card/80 backdrop-blur-md' : 'bg-transparent'}`}>

      <Link to="/" className="text-xl font-bold text-accent-purple">
        Movies
      </Link>

      <p className="text-sm text-moon-gray">
        Let's watch a movies!
      </p>

    </nav>
  )
}

export default Navbar