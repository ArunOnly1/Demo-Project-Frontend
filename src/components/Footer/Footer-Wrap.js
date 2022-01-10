import styled from 'styled-components'

export const FooterWrapper = styled.div`
  background: aliceblue;
  grid-column: span 2;
  height: 60px;
  color: #626262;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    li {
      padding: 1rem;
    }
  }
`
