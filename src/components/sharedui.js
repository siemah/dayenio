import React, { Children } from 'react'
import { Link } from 'gatsby'

export const LinkItem = ({ containerClass, to, label, className, Children, ...restProps}) => {
  return (
    <li className={containerClass}>
      <Link to={to} className={className}>
        {label}
        {Children}
      </Link>
    </li>
  )
}
