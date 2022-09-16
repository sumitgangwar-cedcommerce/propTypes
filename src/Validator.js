import React from 'react'
import PropTypes from "prop-types"
const Validator = (props) => {  
  return (
    <div>
        {JSON.stringify(props)}
    </div>
  )
}

Validator.propTypes = {
    string : PropTypes.string,
    object : PropTypes.object,
    number : PropTypes.number,
    symbol : PropTypes.symbol,
    fun : PropTypes.func,
    boolean : PropTypes.bool
}

export default Validator