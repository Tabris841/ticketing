import axios from 'axios';
import { useState } from 'react';
import { Box, Heading, ListIcon, List, ListItem } from '@chakra-ui/core';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log(err);
      debugger;
      setErrors(
        <Box>
          <Heading as="h4" size="md" mt="2">
            Ooops....
          </Heading>
          <List>
            {err.response.data.errors.map((err) => (
              <ListItem key={err.message}>
                <ListIcon icon="warning" color="red.500" />
                {err.message}
              </ListItem>
            ))}
          </List>
        </Box>
      );
    }
  };

  return { doRequest, errors };
}
