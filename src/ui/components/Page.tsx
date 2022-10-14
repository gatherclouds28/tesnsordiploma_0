import { useLocation } from 'react-router-dom'

import { breakpoints } from 'shared/dimensions'

import { styled } from 'ui/styles'

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0;

  height: 100%;
  max-width: ${breakpoints.tablet}px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: 100%;
  }
`

export const Page: React.FC = ({ children }) => <Content>{children}</Content>
