
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player'


const StrangeGrace = () => {
  const black = '#15151579'
  const lighterBlack = '#27272779'
  
 const playerRef = useRef<HTMLVideoElement | null>(null)
 const urlInputRef = useRef<HTMLInputElement | null>(null)

 const initialState = {
   src: 'https://www.youtube.com/watch?v=W0Quneu94kg',
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

  const handleStop = () => {
    setState((prevState) => ({ ...prevState, src: undefined, playing: false }))
  }

  const handleToggleControls = () => {
    setState((prevState) => ({ ...prevState, controls: !prevState.controls }))
  }

  const handleToggleLight = () => {
    setState((prevState) => ({ ...prevState, light: !prevState.light }))
  }

  const handleToggleLoop = () => {
    setState((prevState) => ({ ...prevState, loop: !prevState.loop }))
  }

  const handleVolumeChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const inputTarget = event.target as HTMLInputElement
    setState((prevState) => ({
      ...prevState,
      volume: Number.parseFloat(inputTarget.value)
    }))
  }

  const handleToggleMuted = () => {
    setState((prevState) => ({ ...prevState, muted: !prevState.muted }))
  }

  const handleSetPlaybackRate = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    const buttonTarget = event.target as HTMLButtonElement
    setState((prevState) => ({
      ...prevState,
      playbackRate: Number.parseFloat(`${buttonTarget.dataset.value}`)
    }))
  }

  const handleRateChange = () => {
    const player = playerRef.current
    if (!player) return

    setState((prevState) => ({
      ...prevState,
      playbackRate: player.playbackRate
    }))
  }

  const handleTogglePIP = () => {
    setState((prevState) => ({ ...prevState, pip: !prevState.pip }))
  }

  const handlePlay = () => {
    console.log('onPlay')
    setState((prevState) => ({ ...prevState, playing: true }))
  }

  const handleEnterPictureInPicture = () => {
    console.log('onEnterPictureInPicture')
    setState((prevState) => ({ ...prevState, pip: true }))
  }

  const handleLeavePictureInPicture = () => {
    console.log('onLeavePictureInPicture')
    setState((prevState) => ({ ...prevState, pip: false }))
  }

  const handlePause = () => {
    console.log('onPause')
    setState((prevState) => ({ ...prevState, playing: false }))
  }

  const handleSeekMouseDown = () => {
    setState((prevState) => ({ ...prevState, seeking: true }))
  }

  const handleSeekChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement
    setState((prevState) => ({
      ...prevState,
      played: Number.parseFloat(inputTarget.value)
    }))
  }

  const handleSeekMouseUp = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement
    setState((prevState) => ({ ...prevState, seeking: false }))
    if (playerRef.current) {
      playerRef.current.currentTime =
        Number.parseFloat(inputTarget.value) * playerRef.current.duration
    }
  }

  const handleProgress = () => {
    const player = playerRef.current
    // We only want to update time slider if we are not currently seeking
    if (!player || state.seeking || !player.buffered?.length) return

    console.log('onProgress')

    setState((prevState) => ({
      ...prevState,
      loadedSeconds: player.buffered?.end(player.buffered?.length - 1),
      loaded:
        player.buffered?.end(player.buffered?.length - 1) / player.duration
    }))
  }

  const handleTimeUpdate = () => {
    const player = playerRef.current
    // We only want to update time slider if we are not currently seeking
    if (!player || state.seeking) return

    console.log('onTimeUpdate', player.currentTime)

    if (!player.duration) return

    setState((prevState) => ({
      ...prevState,
      playedSeconds: player.currentTime,
      played: player.currentTime / player.duration
    }))
  }

  const handleEnded = () => {
    console.log('onEnded')
    setState((prevState) => ({ ...prevState, playing: prevState.loop }))
  }

  const handleDurationChange = () => {
    const player = playerRef.current
    if (!player) return

    console.log('onDurationChange', player.duration)
    setState((prevState) => ({ ...prevState, duration: player.duration }))
  }

  const handleClickFullscreen = () => {
    const reactPlayer = document.querySelector('.react-player')
    if (reactPlayer) screenfull.request(reactPlayer)
  }

  const renderLoadButton = (src: string, label: string) => {
    return (
      <button type="button" onClick={() => load(src)}>
        {label}
      </button>
    )
  }

  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return
    playerRef.current = player
    console.log(player)
  }, [])

  const handleLoadCustomUrl = () => {
    if (urlInputRef.current?.value) {
      setState((prevState) => ({
        ...prevState,
        src: urlInputRef.current?.value
      }))
    }
  }

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
          m: 2,
          paddingBottom: 2,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        spacing={2}
      >
        <ReactPlayer
          ref={setPlayerRef}
          className="react-player"
          style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
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
          onLoadStart={() => console.log('onLoadStart')}
          onReady={() => console.log('onReady')}
          onStart={(e) => console.log('onStart', e)}
          onPlay={handlePlay}
          onEnterPictureInPicture={handleEnterPictureInPicture}
          onLeavePictureInPicture={handleLeavePictureInPicture}
          onPause={handlePause}
          onRateChange={handleRateChange}
          onSeeking={(e) => console.log('onSeeking', e)}
          onSeeked={(e) => console.log('onSeeked', e)}
          onEnded={handleEnded}
          onError={(e) => console.log('onError', e)}
          onTimeUpdate={handleTimeUpdate}
          onProgress={handleProgress}
          onDurationChange={handleDurationChange}
        />
          <table>
          <tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button type="button" onClick={handleStop}>
                  Stop
                </button>
                <button type="button" onClick={handlePlayPause}>
                  {playing ? 'Pause' : 'Play'}
                </button>
                <button type="button" onClick={handleClickFullscreen}>
                  Fullscreen
                </button>
                {src && ReactPlayer.canEnablePIP?.(src) && (
                  <button type="button" onClick={handleTogglePIP}>
                    {pip ? 'Disable PiP' : 'Enable PiP'}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>
                <button type="button" onClick={handleSetPlaybackRate} data-value={1}>
                  1x
                </button>
                <button type="button" onClick={handleSetPlaybackRate} data-value={1.5}>
                  1.5x
                </button>
                <button type="button" onClick={handleSetPlaybackRate} data-value={2}>
                  2x
                </button>
              </td>
            </tr>
            <tr>
              <th><label htmlFor="seek">Seek</label></th>
              <td>
                <input
                  id="seek"
                  type="range"
                  min={0}
                  max={0.999999}
                  step="any"
                  value={played}
                  onMouseDown={handleSeekMouseDown}
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="volume">Volume</label></th>
              <td>
                <input
                  id="volume"
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="controls">Controls</label>
              </th>
              <td>
                <input
                  id="controls"
                  type="checkbox"
                  checked={controls}
                  onChange={handleToggleControls}
                />
                <em>&nbsp; Requires player reload for some players</em>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="muted">Muted</label>
              </th>
              <td>
                <input
                  id="muted"
                  type="checkbox"
                  checked={muted}
                  onChange={handleToggleMuted}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="loop">Loop</label>
              </th>
              <td>
                <input
                  id="loop"
                  type="checkbox"
                  checked={loop}
                  onChange={handleToggleLoop}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="light">Light mode</label>
              </th>
              <td>
                <input
                  id="light"
                  type="checkbox"
                  checked={light}
                  onChange={handleToggleLight}
                />
              </td>
            </tr>
            <tr>
              <th>Played</th>
              <td>
                <progress max={1} value={played} />
              </td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td>
                <progress max={1} value={loaded} />
              </td>
            </tr>
          </tbody>
        </table>
      
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
              src="/000526560002_b_sm.jpg"
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
            <Box>
              <Typography variant="h6" align="center">
                {'Upperfields'}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </>
  )
}

export default StrangeGrace