import { createContext, FC, useCallback, useState } from 'react'

type PlayerContextProps = {
  playerSong: SongT | null
  setSong: (song: SongT) => void
}

type SongT = {
  name: string
  band: string
  duration: string
  coverUrl: string
}

export const PlayerContext = createContext<PlayerContextProps>({} as PlayerContextProps)

export const PlayerProvider: FC = ({ children }) => {
  const [playerSong, setPlayerSong] = useState<SongT | null>(null)

  const setSong = useCallback((song: SongT) => setPlayerSong(song), [])

  return (
    <PlayerContext.Provider
      value={{
        playerSong,
        setSong
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
