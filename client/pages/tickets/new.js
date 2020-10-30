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

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <Wrapper>
      <Heading as="h1" mb="5">
        Create a Ticket
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            name="price"
            placeholder="price"
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        {errors}
        <Button mt={4} variantColor="teal" type="submit">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default NewTicket;
