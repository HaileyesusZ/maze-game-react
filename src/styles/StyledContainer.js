import styled from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => '4rem '.repeat(props.width || 5)};
  grid-template-rows: ${(props) => '4rem '.repeat(props.width || 5)};
  border: none;
  div {
    border: 2px solid black;
  }
`

export default StyledContainer
