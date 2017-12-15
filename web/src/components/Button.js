import React from 'react'

function Button({ 
    title, 
    primary = false, 
    magic = false,
    href 
}) {
  
    let className = 'btn'

if (primary) {
  className += ' btn--primary'
}

if (magic) {
  className += ' btn--rainbow'
}

const renderLink = !!href
const Component = renderLink ? 'a' : 'button'

  return (
    <Component href={ href }  className={ className }>
      { title } 
    </Component>
  )
}

export default Button


