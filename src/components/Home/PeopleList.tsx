import React from 'react';
import { useQuery } from '@apollo/client';

import { GqlHelper } from 'helpers';

const PeopleList = () => {
  const { data, loading, fetchMore } = useQuery(GqlHelper.ALL_PEOPLE);

  console.log(`people`, data, loading);
  return <div></div>;
};

export default PeopleList;
