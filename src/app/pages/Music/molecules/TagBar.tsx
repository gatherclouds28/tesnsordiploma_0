import { FC } from 'react'
import { css } from 'styled-components';

import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Wrapper = styled.div<{ url: string; left?: number }>`
  display: flex;
  position: relative;
  width:100%;
  height: 100%;
  align-items: center;
  background: url(url);
  justify-content: center;
  background-color: #806969;

  ${({ left }) => left && css`
    left: ${left}px;
  `}
`


type Props = {
  name: string
  coverUrl?: string
  left?: number
}

export const TagBar: FC<Props> = ({ name, coverUrl, left }) => (
  <Wrapper left={left} url={coverUrl || ''}><Text variant='t7' color='white' align='center'>{name}</Text></Wrapper>
)
