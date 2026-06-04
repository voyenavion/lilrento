
import { Pause, PlayArrow } from '@mui/icons-material'
import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'



const StrangeGrace = () => {
  const black = '#15151579'
  const lighterBlack = '#27272779'
  
   const navigate = useNavigate()
 
 const playerRef = useRef<HTMLVideoElement | null>(null)
 const urlInputRef = useRef<HTMLInputElement | null>(null)

 const initialState = {
   src: 'https://www.youtube.com/watch?v=W0Quneu94kg&t=0s',
   pip: false,
   playing: false,
   controls: false,
   light: false,
   volume: 1,
   muted: false,
   played: 0,
   loaded: 0,
   duration: 0,
   playbackRate: 1.0,
   loop: false,
   seeking: false,
   loadedSeconds: 0,
   playedSeconds: 0
 }

 type PlayerState = Omit<typeof initialState, 'src'> & {
   src?: string
 }

 const [state, setState] = useState<PlayerState>(initialState)

 const load = (src?: string) => {
   setState((prevState) => ({
     ...prevState,
     src,
     played: 0,
     loaded: 0,
     pip: false
   }))
 }

 const handlePlayPause = () => {
   setState((prevState) => ({ ...prevState, playing: !prevState.playing }))
 }

 const handleEnded = () => {
       setState((prevState) => ({ ...prevState, playing: !prevState.playing }))
 }


  

 
  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return
    playerRef.current = player
    console.log(player)
  }, [])

  

  const {
    src,
    playing,
    controls,
    light,
    volume,
    muted,
    loop,
    played,
    loaded,
    duration,
    playbackRate,
    pip
  } = state

  const SEPARATOR = ' · '
  return (
    <>
      <Stack
        sx={{
          width: '100%',
          height: 'auto',
          background: black,
          color: 'grey.200',
          padding: 2,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        spacing={2}
      >
        <Paper
          elevation={10}
          sx={{
            m: 2,
            p: 2,
            width: '90%',
            maxWidth: '1000px',
            height: 'auto',
            background: lighterBlack,
            color: 'grey.200',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Stack
            sx={{
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="/000526560002_b.jpg"
              sx={{
                width: '80%',
                height: 'auto'
              }}
            ></Box>
            <Box>
              <Typography variant="h4" align="center">
                {'Strange Grace'}
              </Typography>
            </Box>
            <Button onClick={handlePlayPause} sx={{ color: 'grey.200' }}>
              {playing ? <Pause /> : <PlayArrow />}
            </Button>
            <Box>
              <Typography variant="h6" align="center">
                {'Upperfields'}
              </Typography>
            </Box>
          </Stack>
        </Paper>
        <ReactPlayer
          ref={setPlayerRef}
          className="react-player"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            opacity: '0',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
          onEnded={() => {
            handleEnded()
          }}
          src={src}
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          config={{
            youtube: {
              color: 'white'
            }
          }}
        />
        <Link
          component="button"
          underline="hover"
          onClick={() => {
            navigate('/upperfields/strange-grace/links')
          }}
          sx={{
            color: 'grey.200',
            textDecorationColor: 'grey.600',
            p:2. 
          }}
        >
          <Typography variant="body2" align="center">
            {'links'}
          </Typography>
        </Link>
      </Stack>
    </>
  )
}

export default StrangeGrace