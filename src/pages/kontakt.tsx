import type { NextPage } from 'next'
import Head from 'next/head'

import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'
import ExternalLink from '@/components/external-link'

import { useResponsiveFontSize } from '@/lib/responsive'

const Contact: NextPage = () => {
  const { md, lg } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Kontakt | Tanja Senghaas</title>
        <meta name="Kontakt | Tanja Senghaas" content="Treten Sie mit Tanja Senghaas über e-Mail oder Social Media Kanäle in Kontakt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/kontakt.jpg'>
        <Flex pt={20} direction={{ base: 'column', md: 'row' }} justify={{ base: 'left', md: 'space-between' }}>
          <Box>
            <Heading fontSize={lg} mb={10}>Kontakt</Heading>
            <Heading fontSize={lg} fontWeight={900} mb={5}>Tanja Senghaas Designs</Heading>
            <Text fontSize={md} fontStyle='italic'>Workspace</Text>
            <ExternalLink href='https://www.google.com/maps/place/Horandstieg+30,+22559+Hamburg,+Germany/@53.5725334,9.7440596,17z/data=!3m1!4b1!4m5!3m4!1s0x47b182443d0d0855:0x69b61617b923fb05!8m2!3d53.5725334!4d9.7462536' isExternal><Text fontSize={md}>Horandstieg 30, 22559 Hamburg</Text></ExternalLink>
            <ExternalLink href='mailto:tanja.senghaas@web.de' isExternal><Text fontSize={md}>tanja.senghaas@web.de</Text></ExternalLink>
            <ExternalLink href='tel:+4915122543476'><Text fontSize={md}>+49 (0) 151 22543476</Text></ExternalLink>
          </Box>
          <Box>
            <Heading fontSize={lg} mb={10}>Danke!</Heading>
            <Heading fontSize={lg} fontWeight={900}>Nele Martensen</Heading>
            <Text mb={5} fontSize={md}>für die schönen Fotos dieser Website</Text>
            <ExternalLink href='https://www.nele-martensen.de' isExternal><Text fontSize={md}>nele-martensen.de</Text></ExternalLink>
            <ExternalLink href='mailto:mail@nele-martensen.de' isExternal><Text fontSize={md}>mail@nele-martensen.de</Text></ExternalLink>
            <ExternalLink href='tel:+491717872315' ><Text fontSize={md}>+49 (0) 171 7872315</Text></ExternalLink>

            <Heading fontSize={lg} fontWeight={900} mt={20}>Mika Senghaas</Heading>
            <Text mb={5} fontSize={lg}>für die Erstellung meiner Website</Text>
            <ExternalLink href='https://www.jonas-mika.de' isExternal ><Text fontSize={md}>jonas-mika.de</Text></ExternalLink>
            <ExternalLink href='mailto:contact@jonas-mika.de' isExternal ><Text fontSize={md}>contact@jonas-mika.de</Text></ExternalLink>
            <ExternalLink href='tel:+4560740477' ><Text fontSize={md}>+45 60740477</Text></ExternalLink>
          </Box>
        </Flex>
      </Layout >
    </>
  )
}

export default Contact
