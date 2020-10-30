import { useEffect } from 'react';
import Router from 'next/router';
import { Box } from '@chakra-ui/core';

import useRequest from '../../hooks/use-request';

const SignOut = () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <Box>Signing you out...</Box>;
};

export default SignOut;
