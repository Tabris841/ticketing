import { List, ListItem } from '@chakra-ui/core';

import Wrapper from '../../components/wrapper';

const OrderIndex = ({ orders }) => {
  return (
    <Wrapper>
      <List>
        {orders.map((order) => {
          return (
            <ListItem key={order.id}>
              {order.ticket.title} - {order.status}
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;
