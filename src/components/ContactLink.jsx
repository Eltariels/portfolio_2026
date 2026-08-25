import { useState } from 'react'
import { profile } from '../data/profile'

export default function ContactLink({ className = '', children = 'Contact' }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto: navigation below still fires.
    }
  }

  return (
    <a href={`mailto:${profile.email}`} onClick={handleClick} className={className}>
      {typeof children === 'function' ? children(copied) : copied ? 'Adresse copiée !' : children}
    </a>
  )
}
