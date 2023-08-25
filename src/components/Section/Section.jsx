import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children, className, title, classNameText}) => {
  return (
    <section className={className} >
      {title ? <h1 className={`${classNameText} text-3xl font-bold tracking-tight text-gray-900`}>{title}</h1> : null}
      {children}
    </section>
  )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    classNameText: PropTypes.string,
}

export default Section
