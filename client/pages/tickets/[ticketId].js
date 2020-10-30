import { useState } from 'react';
import Router from 'next/router';
import { Button, Heading } from '@chakra-ui/core';

import useRequest from '../../hooks/use-request';
import Wrapper from '../../components/wrapper';

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => {
      Router.push('/orders/[orderId]', `/orders/${order.id}`);
    },
  });

  const handlePurchase = () => {
    doRequest();
  };

  return (
    <Wrapper>
      <Heading as="h1">{ticket.title}</Heading>
      <Heading as="h4" size="md" mt="4">
        Price: {ticket.price}
      </Heading>
      {errors}
      <Button mt="5" onClick={handlePurchase}>
        Purchase
      </Button>
    </Wrapper>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
