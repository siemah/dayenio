import React from 'react'
import { Link } from 'gatsby'

export const LinkItem = ({ containerClass, to, label, alt, className, Children, ...props}) => {
  return (
    <li className={containerClass || ''}>
      {
        <Link to={"/" + to} alt={alt || ''} className={className} {...props}>{label}</Link>
      }
    </li>
  )
}

export const SocialContactItem = ({className, href, label, alt, source}) => (
    <li className={className}>
      <a href={href} title={label || ''} >
        <img src={source} alt={alt||''} />
      </a>
    </li>
)
