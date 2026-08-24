import { profile } from '../data/profile'

export default function CvButtons({ primary = false }) {
  return (
    <>
      <a href={profile.cvUrl} download className={primary ? 'hud-btn-primary' : 'hud-btn-ghost'}>
        CV — Écran
      </a>
      <a href={profile.cvPrintUrl} download className="hud-btn-ghost">
        CV — Impression
      </a>
    </>
  )
}
