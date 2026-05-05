import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-space-card border-b border-space-navy px-6 py-4 flex items-center justify-between">

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