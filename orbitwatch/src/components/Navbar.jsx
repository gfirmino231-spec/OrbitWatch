import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/problema', label: 'O Problema' },
    { to: '/tecnologia', label: 'Tecnologia' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/impacto', label: 'Impacto' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#6C63FF" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="6" fill="#6C63FF" />
              <ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00C896" strokeWidth="1.5" transform="rotate(30 16 16)" />
              <circle cx="26" cy="10" r="2" fill="#00C896" />
            </svg>
          </div>
          <span className={styles.logoText}>
            Orbit<span className={styles.logoAccent}>Watch</span>
          </span>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/dashboard"
            className={styles.ctaBtn}
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.ctaBtnDot} />
            Live Monitor
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  )
}
