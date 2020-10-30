import { Box } from '@chakra-ui/core';

export const Table = ({ children, ...rest }) => {
  return (
    <Box
      table-layout="auto"
      border-collapse="collapse"
      style={{ tableLayout: 'fixed', width: '100%' }}
      {...{ as: 'table' }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const Thead = ({ children, ...rest }) => {
  return (
    <Box p={4} textAlign="left" {...{ as: 'thead' }} {...rest}>
      {children}
    </Box>
  );
};

export const Tbody = ({ children, ...rest }) => {
  return (
    <Box p={4} {...{ as: 'tbody' }} {...rest}>
      {children}
    </Box>
  );
};

export const Tfoot = ({ children, ...rest }) => {
  return (
    <Box p={4} {...{ as: 'tfoot' }} {...rest}>
      {children}
    </Box>
  );
};

export const Th = ({ children, ...rest }) => {
  return (
    <Box
      padding={4}
      borderBottom="1px"
      borderBottomColor="gray.200"
      {...{ as: 'th' }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const Tr = ({ children, ...rest }) => {
  return (
    <Box my={1} {...{ as: 'tr' }} {...rest}>
      {children}
    </Box>
  );
};

export const Td = ({ children, ...rest }) => (
  <Box
    p={4}
    borderBottom="1px"
    borderBottomColor="gray.200"
    {...{ as: 'td' }}
    {...rest}
  >
    {children}
  </Box>
);
