import React from 'react'
import PropTypes from "prop-types"

const DisplayName = (props) => {
  return (
    <div >
        My Name is {props.myName}
    </div>
  )
}
DisplayName.propTypes = {
    myName : PropTypes.string.isRequired
}

export default DisplayName