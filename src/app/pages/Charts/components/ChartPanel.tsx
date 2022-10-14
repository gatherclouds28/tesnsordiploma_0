import { FC } from 'react'

import { css } from 'styled-components'
import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 72px;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid lightgray;
`

const Number = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  color: gray;
`

const Cover = styled.img<{ circleCover: boolean }>`
  height: 48px;
  width: 48px;
  ${({ circleCover }) =>
    circleCover &&
    css`
      border-radius: 50%;
    `}
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Label = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

type Props = {
  number: number
  label: string
  subLabel?: string
  coverUrl: string
  circleCover?: boolean
}

const ChartPanel: FC<Props> = ({ number, label, subLabel, coverUrl, circleCover }) => {
  return (
    <Wrapper>
      <Number variant="t8">{number}</Number>
      <Cover src={coverUrl} circleCover={!!circleCover} />
      <TextWrapper>
        <Label variant="t8" bold>
          {label}
        </Label>
        {subLabel && (
          <Text variant="t7" color="gray">
            {subLabel}
          </Text>
        )}
      </TextWrapper>
    </Wrapper>
  )
}

export default ChartPanel
