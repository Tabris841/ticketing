import NextLink from 'next/link';
import { Flex, Heading, Box, Text, Button, Link } from '@chakra-ui/core';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = ({ currentUser }) => {
  const links = [
    currentUser && { label: 'Sell Tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <MenuItems key={href}>
          <NextLink href={href}>
            <Link>{label}</Link>
          </NextLink>
        </MenuItems>
      );
    });

  const authLinks = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <NextLink key={href} href={href}>
          <Button as={Link} bg="transparent" border="1px" mr="5">
            {label}
          </Button>
        </NextLink>
      );
    });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={50}>
        <Heading as="h1" size="lg">
          <NextLink href="/">
            <Link>GitTix</Link>
          </NextLink>
        </Heading>
      </Flex>

      <Box
        display={{ sm: 'block', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        {links}
      </Box>

      <Box display={{ sm: 'block', md: 'block' }} mt={{ base: 4, md: 0 }}>
        {authLinks}
      </Box>
    </Flex>
  );
};

export default Header;
