import React from 'react'
import PropTypes from 'prop-types'
import StyledCharacter from '../styles/StyledCharacter'

function Character({
  translatePosition = { horizontal: 0, vertical: 0 },
  defaultPosition = { horizontal: 0, vertical: 0 },
}) {
  return (
    <StyledCharacter
      horizontal={translatePosition.horizontal}
      vertical={translatePosition.vertical}
      defaultX={defaultPosition.horizontal}
      defaultY={defaultPosition.vertical}
      fill="darkred"
      zIndex="10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280.000000 1068.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M6040 12794 c-1323 -79 -2537 -606 -3464 -1503 -465 -451 -794 -898
-1080 -1471 -303 -609 -475 -1211 -548 -1920 -8 -79 -13 -261 -12 -495 0 -380
13 -551 60 -830 163 -975 553 -1838 1165 -2580 608 -738 1379 -1285 2291
-1626 462 -173 959 -279 1491 -320 333 -25 844 -2 1202 55 850 136 1672 481
2365 994 716 531 1273 1211 1664 2032 62 129 72 178 44 206 -8 9 -100 47 -203
85 -104 38 -190 71 -193 73 -2 3 26 47 62 100 160 228 213 371 182 480 -46
157 -204 215 -1848 685 -837 239 -1128 326 -1383 413 -272 92 -477 181 -459
198 16 16 160 58 301 89 262 57 558 102 1428 216 969 127 1345 189 1639 270
322 88 410 178 407 418 -1 159 -58 342 -186 598 l-73 146 200 64 c204 65 248
88 248 131 0 33 -119 316 -220 523 -160 327 -309 572 -516 850 -169 227 -260
332 -474 546 -385 386 -762 663 -1261 929 -657 351 -1323 552 -2064 626 -146
14 -634 26 -765 18z"
          />
        </g>
      </svg>
    </StyledCharacter>
  )
}

Character.propTypes = {
  translatePosition: PropTypes.shape({
    horizontal: PropTypes.number,
    vertical: PropTypes.number,
  }).isRequired,
  defaultPosition: PropTypes.shape({
    horizontal: PropTypes.number,
    vertical: PropTypes.number,
  }).isRequired,
}

export default Character
