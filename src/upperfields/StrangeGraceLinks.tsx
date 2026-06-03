
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Avatar, Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import './StrangeGraceLinks.css';



const projects = [
  {
    text: 'Bandcamp',
    image: '/bandcamp.webp',
    link: 'https://upperfields.bandcamp.com/track/strange-grace'
  },
  {
    text: 'Apple Music',
    image: '/apple-music.webp',
    link: 'https://music.apple.com/us/album/strange-grace-single/1895433033'
  },
  {
    text: 'Tidal',
    image: '/tidal.webp',
    link: 'https://tidal.com/artist/7032197'
  },
  {
    text: 'Spotify',
    image: '/spotify.webp',
    link: 'https://open.spotify.com/track/3x20iBWgUrP7xf4OYPm8UH?si=7e974ed5421c4ef9'
  }
]





const StrangeGraceLinks = () => {
  const black = '#15151579'
  const lighterBlack = '#27272779'


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
        <Container
          maxWidth={"sm"}
          component={Paper}
          elevation={5}
          sx={{ background: lighterBlack, p: 2, width: '80%', aspectRatio: '16/9'
           }}
        >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/W0Quneu94kg?si=Q4FSsxlYg8Lo6cgJ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
        </Container>

        <Stack
          spacing={1}
          sx={{
            width: '80%',
            maxWidth: '500px',
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
                elevation={2}
                sx={{
                  flexFlow: 'row',
                  background: lighterBlack,
                  color: 'grey.200',
                  textDecoration: 'none',
                  '&:hover': { color: 'grey.600' }
                }}
              >
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid size={2}>
                    <Avatar
                      variant="square"
                      sx={{ width: '60%', height: 'auto', m: 1 }}
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
                        width: '60%',
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

export default StrangeGraceLinks