import styled from 'styled-components'

const StyledCharacter = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: ${(props) => `${props.defaultY * 4}rem`};
  left: ${(props) => `${props.defaultX * 4}rem`};
  z-index: ${(props) => props.zIndex || 2};
  transform: ${(props) => {
    return `translate(${props.horizontal * 4}rem, ${props.vertical * 4}rem)`
  }};
  transition: transform 200ms ease-out;
  svg {
    height: 4rem;
    width: 4rem;
    fill: ${(props) => props.fill};
  }
`

export default StyledCharacter
