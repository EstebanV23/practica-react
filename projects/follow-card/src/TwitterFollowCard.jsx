import { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollow }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollow)

  const urlImage = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'is-following' : ''

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={urlImage}
          alt="Here be avatar"
          className='tw-followCard-avatar'
        />
        <div className='tw-followCard-info'>
          {children}

          <span className='tw-followCard-infoUsername'>@{userName}</span>

        </div>
      </header>

      <aside>
        <button className={`tw-followCard-button ${buttonClassName}`} onClick={handleClick}>
          <span className="tw-followCard-Follow">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
