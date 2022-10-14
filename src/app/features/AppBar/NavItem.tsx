import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 8px;
`

const Item = styled(Link)`
  color: white;
  opacity: 0.8;
  cursor: pointer;
`

type Props = {
  name: string
  path: string
}

export const NavItem: FC<Props> = ({ name, path }) => {
  return (
    <Wrapper>
      <Item to={path}>
        <Text variant="t6">{name}</Text>
      </Item>
    </Wrapper>
  )
}
