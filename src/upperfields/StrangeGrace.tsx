
import { Box, Paper, Stack, Typography } from '@mui/material';
import YouTubePlayer from 'youtube-player';

const StrangeGrace = () => {
  const black = '#15151579'
  const lighterBlack = '#27272779'
  
  return (
    <>
      <script>
        {`let player
  player = YouTubePlayer('video-player')

  // 'loadVideoById' is queued until the player is ready to receive API calls.
  player.loadVideoById('M7lc1UVf-VE')

  // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
  player.playVideo()

  // 'stopVideo' is queued after 'playVideo'.
  player.stopVideo().then(() => {
    // Every function returns a promise that is resolved after the target function has been executed.
  })`}
      </script>

      <Stack
        sx={{
          width: '100%',
          height: 'auto',
          background: 'black',
          color: 'grey.200',
          m: 2,
          paddingBottom: 2,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        spacing={2}
      >
        <div id="video-player">plsssssssssssssssssay</div>

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