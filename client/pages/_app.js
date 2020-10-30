import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import buildClient from '../api/build-client';
import Header from '../components/header';
import customTheme from '../utils/theme';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header currentUser={currentUser} />
      <Component currentUser={currentUser} {...pageProps} />
    </ThemeProvider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
