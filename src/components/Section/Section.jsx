import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children, classSection, title, classNameText}) => {
  return (
    <section className={classSection} >
      {title ? <h1 className={`${classNameText} text-3xl font-bold tracking-tight text-gray-900 mb-[20px]`}>{title}</h1> : null}
      {children}
    </section>
  )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    classSection: PropTypes.string,
    classNameText: PropTypes.string,
}

export default Section
