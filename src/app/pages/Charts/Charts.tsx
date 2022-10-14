import { useEffect, useState } from 'react'

import HttpService from 'services/main.services'
import { RootObject } from 'services/chartTypes'
import { ArtistsType } from 'services/topArtistsTypes'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import ChartPanel from './components/ChartPanel'

const Wrapper = styled.div`
  height: 116px;
  width: 100%;
`
const StyledHeader = styled(Text)`
  margin-top: 20px;
  padding: 0 180px;
`

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 10px 180px;
  gap: 12px;
`

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Tab1 = styled(Text)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid ${theme.palette.red};
  }
`

const Tab2 = styled(Text)``

const LeftContentColumn = styled.div`
  display: flex;
  padding: 0 8px 0 180px;
  gap: 32px;
`
const RightContentColumn = styled.div`
  width: 400px;
  background-color: #f9f9f9;
  border-left: 1px solid lightgray;
`

const TopColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Charts = () => {
  const [tracks, setTracks] = useState<RootObject | null>(null)
  const [artists, setArtists] = useState<ArtistsType | null>(null)

  useEffect(() => {
    HttpService.getTopTracks().then((val) => {
      setTracks(val.data)
    })
    HttpService.getTopArtists().then((val) => {
      setArtists(val.data)
    })
  }, [])

  return (
    <Wrapper>
      <StyledHeader variant="h6">Charts</StyledHeader>
      <TabsWrapper>
        <Tab1 variant="t7" bold>
          Real Time
        </Tab1>
        <Tab2 variant="t7">Weekly</Tab2>
      </TabsWrapper>
      <ColumnWrapper>
        <LeftContentColumn>
          <TopColumn>
            <Text height="100px" variant="h7">
              Top Tracks
            </Text>
            {tracks &&
              tracks?.tracks.track.map((el, i) => (
                <ChartPanel
                  key={el.name}
                  label={el.name}
                  subLabel={el.artist.name}
                  number={i + 1}
                  coverUrl={el.image[1]['#text']}
                />
              ))}
          </TopColumn>
          <TopColumn>
            <Text height="100px" variant="h7">
              Top Tracks
            </Text>
            {artists &&
              artists?.artists.artist.map((el, i) => (
                <ChartPanel
                  key={el.name}
                  label={el.name}
                  number={i + 1}
                  coverUrl={el.image[1]['#text']}
                  circleCover
                />
              ))}
          </TopColumn>
        </LeftContentColumn>
        <RightContentColumn></RightContentColumn>
      </ColumnWrapper>
    </Wrapper>
  )
}
