import { useState } from 'react';
import Router from 'next/router';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
} from '@chakra-ui/core';

import useRequest from '../../hooks/use-request';
import Wrapper from '../../components/wrapper';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { email, password },
    onSuccess: () => {
      setLoading(false);
      Router.push('/');
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

  return (
    <Wrapper>
      <Heading as="h1" size="lg" mb="5">
        Sign up
      </Heading>

      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {errors}

        <Button isLoading={isLoading} mt={4} variantColor="teal" type="submit">
          Sign up
        </Button>
      </form>
    </Wrapper>
  );
};

export default Signup;
