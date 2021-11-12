import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Container, PeopleList, Title2 } from 'components';

export class HomePage extends PureComponent<RouteComponentProps> {
  render() {
    return (
      <Box marginTop="20px">
        <Container>
          <Title2 marginBottom="30px">The Star Wars Characters</Title2>
          <PeopleList />
        </Container>
      </Box>
    );
  }
}

export default HomePage;
