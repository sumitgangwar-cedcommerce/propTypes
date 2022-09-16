import React from 'react'
import PropTypes from 'prop-types'  


const Display = (props) => {
  return (
    <div>
        <h3>Name = {props.name}</h3>
        <h3>Marks = {props.marks}</h3>
        <h3>Score = {props.total}</h3>
    </div>
  )
}

Display.propTypes = {
    name : PropTypes.string.isRequired,
    marks : PropTypes.number,
    score : PropTypes.number
}

export default Display