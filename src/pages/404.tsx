import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react'
import Layout from '@/components/layout'

import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'

const NotFound: NextPage = () => {
  const { md, xl } = useResponsiveFontSizes()

  return (
    <>
      <Head>
        <title>404 | Tanja Senghaas Designs.</title>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>

      <Flex mt={40} height="50vh" direction="column" alignItems="center">
        <Box position="relative" flex={1} w="100%">
          <Image
            src="/assets/not-found.svg"
            alt="not-found"
            layout="fill"
            objectFit="scale-down"
          />
        </Box>
        <Heading fontSize={xl} textAlign="center" my={5}>
          Sorry... something went wrong
        </Heading>
        <Box fontSize={md} textAlign="center">
          This URL does not seem to exist. Go back home{' '}
          <Link href="/" passHref>
            <ChakraLink>here</ChakraLink>
          </Link>
          .
        </Box>
      </Flex>
    </>
  )
}

export default NotFound
