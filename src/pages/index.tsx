import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Grid, Heading } from '@chakra-ui/react'

import Layout from '@/components/layout'
import GridImage from '@/components/grid-image'
import EmblaCarousel from '@/components/embla-carousel'

import magazinesById, { Magazine } from '@/models/magazines'
import typographyById, { Typography } from '@/models/typography'
import corporateById, { Corporate } from '@/models/corporate'

import { useResponsiveFontSize } from '@/lib/responsive'

const Home: NextPage = () => {
  const magazines = Object.values(magazinesById)
  const typography = Object.values(typographyById)
  const corporate = Object.values(corporateById)

  const { lg, xl } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/index.jpg'>
        <Box position='absolute' mt='-400px' ml={-40}>
          <Heading mb={3}>Gutes Design ist nicht nur schön.</Heading>
          <Heading mb={3}> Es gibt Inhalten eine Form. </Heading>
          <Heading>Und zeigt damit Haltung.</Heading>
        </Box>
        <Box >
          <Heading id='magazines' fontSize={xl} pt={20} mb={10} >Magazinentwicklung</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            {
              magazines.map((magazine: Magazine) => <GridImage key={magazine.id} project={magazine} type='magazine' />)
            }
          </Grid>
          <Heading id='corporate' fontSize={xl} pt={20} mb={10} >Corporate Design</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            {
              corporate.map((corporate: Corporate) => <GridImage key={corporate.id} project={corporate} type='magazine' />)
            }
          </Grid>
          <Heading id='typography' fontSize={xl} pt={20} mb={10}>Typografie</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
            {
              typography.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} type='typography' />)
            }
          </Grid>
          <Heading fontSize={xl} mt={20} mb={10}>Kunden-Feedback</Heading>
          <EmblaCarousel />
        </Box>
      </Layout>
    </>
  )
}

export default Home
