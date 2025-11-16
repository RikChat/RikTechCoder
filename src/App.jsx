import React, { useEffect, useState } from 'react'

function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 1800)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <div className="splash">
      <div className="splash-card">
        <div className="logo">RC</div>
        <h1>RikTech Coder</h1>
        <p className="muted">Build, learn, and ship — mobile style</p>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="screen">
      <h2>Home</h2>
      <p>Welcome to RikTech Coder — this is a client-only demo app ready for Vercel.</p>
    </div>
  )
}

function Explore() {
  return (
    <div className="screen">
      <h2>Explore</h2>
      <p>Explore projects, tutorials, and examples.</p>
    </div>
  )
}

function Messages() {
  return (
    <div className="screen">
      <h2>Messages</h2>
      <p>No backend — messages are placeholders.</p>
    </div>
  )
}

function Profile() {
  return (
    <div className="screen">
      <h2>Profile</h2>
      <p>RikTech Coder — a neat little frontend shell.</p>
    </div>
  )
}

const routes = [
  { id: 'home', label: 'Home', icon: 'fa-solid fa-house', comp: <Home /> },
  { id: 'explore', label: 'Explore', icon: 'fa-solid fa-compass', comp: <Explore /> },
  { id: 'messages', label: 'Messages', icon: 'fa-solid fa-comments', comp: <Messages /> },
  { id: 'profile', label: 'Profile', icon: 'fa-solid fa-user', comp: <Profile /> }
]

export default function App() {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('home')

  useEffect(() => {
    // Show splash immediately and then hide after splash finishes
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Splash onFinish={() => setLoading(false)} />

  const ActiveComp = routes.find(r => r.id === active)?.comp

  return (
    <div className="app-shell">
      <div className="topbar">
        <h1>RikTech Coder</h1>
      </div>

      <main className="content">
        {ActiveComp}
      </main>

      <nav className="bottom-nav" role="navigation" aria-label="Bottom Navigation">
        {routes.map(r => (
          <button
            key={r.id}
            className={'nav-btn' + (r.id === active ? ' active' : '')}
            onClick={() => setActive(r.id)}
            aria-pressed={r.id === active}
            title={r.label}
          >
            <i className={r.icon} aria-hidden="true"></i>
            <span className="nav-label">{r.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
