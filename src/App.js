import React, { useEffect, useRef, useState } from 'react'
import Character from './components/Character'
import Container from './components/Container'
import Target from './components/Target'

function App() {
  // a translate state to move the character
  const [translatePosition, setTranslatePosition] = useState({
    horizontal: 0,
    vertical: 0,
  })

  // count score
  const [score, setScore] = useState(0)
  // width of the board
  const [width, setWidth] = useState(0)
  // height of the board
  const [height, setHeight] = useState(0)
  // default position of the character
  const [defaultPosition, setDefaultPacPosition] = useState({
    horizontal: 0,
    vertical: 0,
  })

  // targets and their positions
  const [targets, setTargets] = useState([])

  // initial mount pointer
  const isInitialMount = useRef(true)

  // update targets based on position
  const updateTargets = () => {
    const index = targets.findIndex(
      (target) =>
        target.horizontal ===
          defaultPosition.horizontal + translatePosition.horizontal &&
        target.vertical ===
          defaultPosition.vertical + translatePosition.vertical,
    )

    if (index !== -1) {
      const newTargets = [
        ...targets.slice(0, index),
        ...targets.slice(index + 1),
      ]

      setTargets(newTargets)
    }
  }

  // check score and if game is over
  useEffect(() => {
    if (!isInitialMount.current) {
      if (targets.length === 0) {
        window.alert(`Game over. Total move to save princess :  ${score}`)
      }
    }
  }, [score])

  // update score on every move
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else if (targets.length !== 0) {
      setScore(score + 1)
    }
  }, [translatePosition])

  // check targets on every move and at first,i.e when targets are generated
  useEffect(() => {
    updateTargets()
  }, [translatePosition, targets])

  // run at initialization
  useEffect(() => {
    // get width and height from user prompt
    let newWidth = ''
    let newHeight = ''

    while (Number.isNaN(parseInt(newWidth, 10))) {
      newWidth = window.prompt('Enter the Width of the board')
    }
    while (Number.isNaN(parseInt(newHeight, 10))) {
      newHeight = window.prompt('Enter the Height of the board')
    }

    // set width, height and default positions
    setWidth(newWidth)
    setHeight(newHeight)
    setDefaultPacPosition({
      horizontal: Math.floor(newWidth / 2),
      vertical: Math.floor(newHeight / 2),
    })

    // generate targets
    const maxTargets = Math.floor(Math.random() * newWidth * newHeight) + 1
    const xList = []
    const yList = []
    const newTargets = []
    for (let i = 0; i < maxTargets; i += 1) {
      const x = Math.floor(Math.random() * newWidth)
      const y = Math.floor(Math.random() * newHeight)

      if (!xList.includes(x) && !yList.includes(y)) {
        xList.push(x)
        yList.push(y)
        newTargets.push({ horizontal: x, vertical: y })
      }
    }
    setTargets(newTargets)
    // focus the document to capture key presses
    document.getElementsByClassName('App')[0].focus()
  }, [])

  /* 
  handle an arrow key press by the user
  */
  const handleMove = (e) => {
    let newTranslatePosition = translatePosition
    /*
    change position based on the pressed arrow key
    key code 37 = ArrowLEFT
    key code 38 = ArrowUP
    key code 39 = ArrowRIGHT
    key code 40 = ArrowDOWN

    */
    switch (e.keyCode) {
      case 37:
        {
          const newHorizontalPosition = translatePosition.horizontal - 1
          newTranslatePosition = {
            ...translatePosition,
            horizontal:
              newHorizontalPosition + defaultPosition.horizontal >= 0
                ? newHorizontalPosition
                : translatePosition.horizontal,
          }
        }
        break
      case 38:
        {
          const newVerticalPosition = translatePosition.vertical - 1
          newTranslatePosition = {
            ...translatePosition,
            vertical:
              newVerticalPosition + defaultPosition.vertical >= 0
                ? newVerticalPosition
                : translatePosition.vertical,
          }
        }
        break
      case 39:
        {
          const newHorizontalPosition = translatePosition.horizontal + 1
          newTranslatePosition = {
            ...translatePosition,
            horizontal:
              newHorizontalPosition + defaultPosition.horizontal < width
                ? newHorizontalPosition
                : translatePosition.horizontal,
          }
        }
        break
      case 40:
        {
          const newVerticalPosition = translatePosition.vertical + 1
          newTranslatePosition = {
            ...translatePosition,
            vertical:
              newVerticalPosition + defaultPosition.vertical < height
                ? newVerticalPosition
                : translatePosition.vertical,
          }
        }

        break
      default:
    }
    if (
      !Object.keys(newTranslatePosition).every(
        (key) => translatePosition[key] === newTranslatePosition[key],
      )
    ) {
      setTranslatePosition(newTranslatePosition)
    }
  }

  return (
    <div
      tabIndex={0}
      role="button"
      className="App"
      onKeyUp={(e) => handleMove(e)}
    >
      <Container width={width} height={height} />
      {width > 0 && height > 0 && (
        <Character
          translatePosition={translatePosition}
          defaultPosition={defaultPosition}
        />
      )}

      {width > 0 &&
        height > 0 &&
        targets.map((position, index) => (
          <Target
            key={index}
            positionX={position.horizontal}
            positionY={position.vertical}
          />
        ))}
    </div>
  )
}

export default App
