import React from 'react'
import PropTypes from 'prop-types'
import StyledCharacter from '../styles/StyledCharacter'

function Target({ positionX, positionY }) {
  return (
    <StyledCharacter defaultX={positionX} defaultY={positionY} fill="darkgreen">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280.000000 1231.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1231.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M6130 12304 c-19 -2 -84 -9 -145 -15 -700 -67 -1430 -353 -2000 -783
-233 -175 -534 -465 -707 -681 -709 -884 -1016 -1994 -857 -3100 136 -946 604
-1817 1309 -2438 141 -124 340 -275 478 -365 l93 -60 -53 -12 c-142 -33 -472
-125 -628 -176 -1667 -538 -2896 -1531 -3385 -2733 -150 -369 -235 -788 -235
-1161 0 -105 33 -638 46 -737 l5 -43 6349 0 6349 0 5 43 c13 98 46 631 46 732
0 316 -60 668 -167 980 -436 1276 -1666 2326 -3398 2900 -192 64 -561 170
-665 190 -19 4 -41 10 -48 14 -7 4 41 43 130 104 376 254 691 554 960 912 97
129 185 262 241 361 24 43 66 117 92 164 68 118 162 328 229 507 242 655 307
1374 186 2078 -74 431 -242 900 -461 1289 -84 148 -249 391 -365 536 -138 173
-441 476 -614 614 -140 112 -386 279 -525 358 -377 213 -789 368 -1210 453
-250 51 -410 66 -725 70 -162 2 -311 1 -330 -1z"
          />
        </g>
      </svg>
    </StyledCharacter>
  )
}

Target.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
}

export default Target
