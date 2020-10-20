import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from '../styles/StyledContainer'

function Container({ width = 0, height = 0 }) {
  return (
    <StyledContainer width={width} height={height}>
      {new Array(width * height).fill(null).map((_, index) => (
        <div key={index} />
      ))}
    </StyledContainer>
  )
}

Container.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Container
