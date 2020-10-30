import NextLink from 'next/link';
import { Heading, Link } from '@chakra-ui/core';

import Wrapper from '../components/wrapper';
import { Table, Tbody, Thead, Tr, Td, Th } from '../components/table';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <Tr key={ticket.id}>
        <Td>{ticket.title}</Td>
        <Td>{ticket.price}</Td>
        <Td>
          <NextLink href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <Link>View</Link>
          </NextLink>
        </Td>
      </Tr>
    );
  });

  return (
    <Wrapper>
      <Heading as="h1">Tickets</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Link</Th>
          </Tr>
        </Thead>
        <Tbody>{ticketList}</Tbody>
      </Table>
    </Wrapper>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
