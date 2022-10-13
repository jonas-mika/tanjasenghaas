import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Flex,
  Text,
  Heading,
  Link as ChakraLink,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from "@chakra-ui/react";
import { ArrowLeftIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";
import { MotionBox, MotionFlex, MotionHeading } from '@/components/motion'

import useWindowDimensions from "@/lib/useWindowSize";
import { useResponsiveFontSize } from '@/lib/responsive'
import { capitalise } from "@/lib/helpers"

function Navbar() {
  const router = useRouter()
  const { width } = useWindowDimensions();
  const menuItems: string[] = ['angebot', 'vita', 'kontakt']

  const isActiveLink = (path: string, linkName: string) => {
    return path.includes(linkName)
  }

  const anchorLink = async (id: string) => {
    if (router.pathname !== '/') {
      await router.push('/')
    }
    const scrollY = window.scrollY
    const clientY = document.querySelector(`#${id}`)?.getBoundingClientRect().top
    if (scrollY !== undefined && clientY !== undefined) {
      window.scrollTo({
        top: scrollY + clientY - 80,
        behavior: 'smooth',
      })
    }
  }

  if (width > 800) {
    return (
      <Flex>
        <Menu>
          <MenuButton color='blackAlpha.700' _hover={{ cursor: 'pointer', color: 'black' }}>
            <Flex alignItems='center' mx={2}>
              <ChevronDownIcon />
              <Text>Projekte</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => anchorLink('magazines')}>
              Magazinentwicklung
            </MenuItem>
            <MenuItem onClick={() => anchorLink('corporate')}>
              Corporate Design
            </MenuItem>
            <MenuItem onClick={() => anchorLink('typography')}>
              Typografie
            </MenuItem>
          </MenuList>
        </Menu>
        {
          menuItems.map((menuItem: string) => {
            return (
              <Link href={`/${menuItem}`} key={menuItem} >
                <Flex direction='column' mx={2}>
                  <ChakraLink variant='link' color={isActiveLink(router.pathname, menuItem) ? 'black' : 'blackAlpha.700'} _hover={{ textDecoration: 'none', color: 'black' }}>
                    {capitalise(menuItem)}
                  </ChakraLink>
                  {isActiveLink(router.pathname, menuItem) &&
                    <MotionBox
                      layoutId="navigation-underline"
                      w='100%'
                      h={.5}
                      bgColor='black'
                      animate
                    />
                  }
                </Flex>
              </Link>
            )
          })
        }
      </Flex >
    )
  } else {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Menu Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList my={2}>
          <MenuItem onClick={() => anchorLink('magazines')}>
            Magazinentwicklung
          </MenuItem>
          <MenuItem onClick={() => anchorLink('corporate')}>
            Corporate Design
          </MenuItem>
          <MenuItem onClick={() => anchorLink('typography')}>
            Typografie
          </MenuItem>
          {
            menuItems.map((menuItem: string) => {
              return (
                <Link href={`${menuItem}`} key={menuItem} >
                  <MenuItem key={menuItem}>
                    {capitalise(menuItem)}
                  </MenuItem>
                </Link>
              )
            })

          }
        </MenuList>
      </Menu>
    )
  }
}

export default function Header() {
  const { md, lg, xl } = useResponsiveFontSize()

  const logoAnimation = {
    rest: {
      transform: 'translateX(-17px)',
    },
    hover: {
      transform: 'translateX(0px)',
      transition: {
        when: "afterChildren"
      }
    }
  }

  return (
    <Banner
      position="fixed"
      zIndex={100}
      bg="whiteAlpha.200"
      height={20}
      backdropFilter="blur(10px)"
    >
      <PageContainer h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/" >
            <MotionBox _hover={{ cursor: 'pointer' }} initial='rest' whileHover='hover' overflow='hidden'>
              <MotionFlex variants={logoAnimation} alignItems='center'>
                <ArrowLeftIcon h={3} />
                <Flex>
                  <MotionHeading fontSize={xl} fontWeight={800} ml='2px'>Tanja Senghaas Designs.</MotionHeading>
                </Flex>
              </MotionFlex>
            </MotionBox>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner >
  );
};
