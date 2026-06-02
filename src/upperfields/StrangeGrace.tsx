
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import postConstants from '../constants/postConstants';



const projects = [
  {
    text: 'Bandcamp',
    image: '/bandcamp.jpg',
    link: 'https://upperfields.bandcamp.com/track/strange-grace'
  },
  {
    text: 'Apple Music',
    image: '/apple-music.jpg',
    link: 'https://music.apple.com/us/album/strange-grace-single/1895433033'
  },
  {
    text: 'Tidal',
    image: '/tidal.jpg',
    link: 'https://tidal.com/artist/7032197'
  },
  {
    text: 'Spotify',
    image: '/spotify.jpeg',
    link: 'https://open.spotify.com/track/3x20iBWgUrP7xf4OYPm8UH?si=7e974ed5421c4ef9'
  }
]



const props = postConstants[0]


const StrangeGrace = () => {
  const black = '#15151579'
  const lighterBlack = '#27272779'

  return (
    <>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href={props.image} />

      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
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
        spacing={4}
      >
        <Paper
          elevation={10}
          sx={{
            m: 2,
            p: 2,
            width: '90%',
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
                width: '50%',
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

        <ReactPlayer
          src="https://www.youtube.com/embed/W0Quneu94kg?si=zvOze7mJxZ9vGHjq"
          style={{ width: '40%', height: 'auto', aspectRatio: '16/9' }}
        />

        <Stack
          spacing={1}
          sx={{
            width: '90%',
            maxWidth: '900px',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {projects.map((e, index) => {
            return (
              <Paper
                component="a"
                href={e.link}
                target="_blank" // Opens in new tab
                rel="noopener noreferrer"
                key={index}
                elevation={0}
                sx={{
                  flexFlow: 'row',
                  background: lighterBlack,
                  color: 'grey.200',
                  width: '90%',
                  maxWidth: '300px',
                  height: 'auto',
                  textDecoration: 'none',
                  '&:hover': { color: 'grey.600' }
                }}
              >
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid size={2}>
                    <Avatar
                      variant="square"
                      sx={{ width: '100%', height: 'auto', m: 1 }}
                      src={e.image}
                    />
                  </Grid>
                  <Grid size={8}>
                    <Typography variant="body2" align="center">
                      {e.text}
                    </Typography>
                  </Grid>
                  <Grid size={2}>
                    <PlayArrowIcon
                      sx={{
                        align: 'right',
                        width: '100%',
                        height: 'auto'
                      }}
                    ></PlayArrowIcon>
                  </Grid>
                </Grid>
              </Paper>
            )
          })}
        </Stack>
      </Stack>
    </>
  )
}

export default StrangeGrace