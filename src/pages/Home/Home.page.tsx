import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, PeopleList } from 'components';

export class HomePage extends PureComponent<RouteComponentProps> {
  render() {
    return (
      <Box>
        Home Page
        <PeopleList />
      </Box>
    );
  }
}

export default HomePage;
