import React from 'react'

export const Link = ({children, active, onClick}) => {
  return (
    <button className={`nav-button ${active ? 'active' : ''}`} onClick={onClick}>{children}</button>
  )
}
