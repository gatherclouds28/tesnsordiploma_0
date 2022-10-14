import { FC } from 'react'

import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 250px;
`
const Cover = styled.img`
  width: 170px;
  height: 170px;
`

const TextWrapper = styled.div`
  width: 100%;
`

type Props = {
  name: string
  bandName: string
  listeners: string
  coverUrl: string
  path: string
}

export const ReleaseBar: FC<Props> = ({ name, bandName, listeners, coverUrl, path }) => (
  <Wrapper href={path}>
    <Cover src={coverUrl} height="170" width="170" alt={name} />
    <TextWrapper>
      <Text variant='t7'>{name}</Text>
      <Text variant='t7' color='grey'>{bandName}</Text>
      <Text variant='t7' color='lightgrey'>{`${listeners} прослушиваний`}</Text>
    </TextWrapper>
  </Wrapper>
)