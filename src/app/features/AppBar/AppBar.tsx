import { FC, memo, useContext } from 'react'

import { PlayerContext } from 'shared/context/context'
import { paths } from 'constant'
import { styled } from 'ui/styles'
import { NavItem } from './NavItem'

import logo from 'ui/images/logo.png'
import cover from 'ui/images/cover.png'
import forward from 'ui/images/forward.png'
import play from 'ui/images/play.png'
import { Text } from 'ui/components/Text'
import { Button } from 'ui/components/Button'

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  background-color: black;
`

const PlayerWrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 500px;
  width: 100%;
`

const Cover = styled.img`
  height: 60px;
  width: 60px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  margin: 0 30px;
`
const Prev = styled.img`
  transform: rotate(180deg);
  filter: invert() brightness(20%);
`
const Play = styled.img`
  filter: invert() brightness(20%);
`
const Forward = styled.img`
  filter: invert() brightness(20%);
`

const NameSongWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100%;
  justify-content: center;
`

const Logo = styled.img`
  height: 30px;
`
const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;

  &::before {
    content: '•';
    color: white;
    margin-right: 10px;
    margin-left: 20px;
    opacity: 0.85;
  }
`

const SignUpButton = styled(Button)`
  position: relative;
  height: 40px;
  width: 85px;
  margin: 0 20px;
  background-color: #eeeeee;
  opacity: 0.85;
  border-radius: 3px;
  color: black;
`

const navs = [
  { label: 'Live', path: paths.home },
  { label: 'Music', path: paths.music },
  { label: 'Charts', path: paths.charts },
  { label: 'Events', path: paths.events },
  { label: 'Features', path: paths.features }
]

const _AppBar: FC = () => {
  const { playerSong } = useContext(PlayerContext)
  return (
    <Wrapper>
      <PlayerWrapper>
        <Cover src={playerSong?.coverUrl || cover} />
        <Buttons>
          <Prev src={forward} width="20" height="20" />
          <Play src={play} width="30" height="30" />
          <Forward src={forward} width="20" height="20" />
        </Buttons>
        <NameSongWrapper>
          <Text variant="t6" color="white">
            {playerSong?.name}
          </Text>
          <Text variant="t6" color="white">
            {playerSong?.band}
          </Text>
        </NameSongWrapper>
      </PlayerWrapper>
      <Logo src={logo} alt="" height="40" />
      <NavLinksWrapper>
        {navs.map((el) => (
          <NavItem name={el.label} path={el.path} />
        ))}
        <AuthWrapper>
          <Text variant="t8" color="white">
            Log In
          </Text>
          <SignUpButton>
            <Text variant="t8" bold>
              SIGN UP
            </Text>
          </SignUpButton>
        </AuthWrapper>
      </NavLinksWrapper>
    </Wrapper>
  )
}

export const AppBar = memo(_AppBar)
