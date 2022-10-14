import { useEffect, useState } from 'react'

import HttpService, { TopTagsType } from 'services/main.services'
import { RootObject } from 'services/chartTypes'
import { styled, theme } from 'ui/styles'
import { Section } from 'app/features/Section'
import { Text } from 'ui/components/Text'

import { TagBar } from './molecules/TagBar'
import { ReleaseBar } from './molecules/ReleaseBar'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 570px);
  grid-template-rows: repeat(2, 570px);

  justify-content: center;
`

const GridSection1 = styled.div`
  grid-column-start: 1;
`
const GridSection2 = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
`

const StyledText = styled(Text)`
  margin-top: 48px;
`

const StyledTextTab = styled(Text)`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
`

const TagsInter = styled(Text)`
  position: relative;
  margin: 43px 0 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 47%;
    width: 66px;
    border-bottom: 2px solid ${theme.palette.red};
  }
`

const GridWrapper = styled.ul`
  grid-gap: 30px 30px;
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-template-rows: repeat(6, 170px);
`

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
`

export const Music = () => {
  const [tags, setTags] = useState<TopTagsType | null>(null)
  const [chart, setChart] = useState<RootObject | null>(null)

  useEffect(() => {
    HttpService.getTopTags().then((val) => {
      setTags(val.data)
    })
    HttpService.getTopTracks().then((val) => {
      setChart(val.data)
    })
  }, [])

  return (
    <Section>
      <StyledText variant="h1" align="center">
        Music
      </StyledText>
      <StyledTextTab variant="t6" align="center">
        <Text variant="t5" color={theme.palette.red} inline>
          Overview
        </Text>
        <Text variant="t5" inline>
          New releases
        </Text>
      </StyledTextTab>
      <TagsInter variant="t3" align="center">
        Tags to explore
      </TagsInter>
      <Wrapper>
        {tags?.toptags.tag.map((el, i) =>
          i === 0 ? (
            <GridSection1>
              <TagBar key={el.name} name={el.name} />
            </GridSection1>
          ) : i === 1 ? (
            <GridSection2>
              <TagBar key={el.name} name={el.name} />
            </GridSection2>
          ) : null
        )}
        <GridWrapper>
          {tags?.toptags.tag.map(
            (el, i) =>
              i > 1 &&
              i < 20 && <TagBar key={el.name} name={el.name} left={i > 10 ? -600 : 0} />
          )}
        </GridWrapper>
      </Wrapper>
      <TagsInter variant="t3" align="center">
        Popular now
      </TagsInter>
      <ChartWrapper>
        {chart?.tracks.track.map((el) => (
          <ReleaseBar
            name={el.name}
            bandName={el.artist.name}
            coverUrl={el.image[1]['#text']}
            listeners={el.listeners}
            path={el.url}
          />
        ))}
      </ChartWrapper>
    </Section>
  )
}
