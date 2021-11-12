import React, { ChangeEventHandler } from 'react';
import { useQuery } from '@apollo/client';
import { Input } from 'antd';

import { GqlHelper } from 'helpers';
import { Box, Flex, PeopleTable, SpinnerView } from 'components';
import { AllPeopleData } from 'types';

const { Search } = Input;

const PeopleList = () => {
  const { data, loading, fetchMore } = useQuery(GqlHelper.ALL_PEOPLE);

  const peopleData: AllPeopleData = data?.allPeople;
  const handleLoadMore = () =>
    fetchMore({
      variables: {
        cursor: peopleData.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.allPeople.edges;
        const pageInfo = fetchMoreResult.allPeople.pageInfo;

        return newEdges.length
          ? {
              // Put the new allPeople at the end of the list and update `pageInfo`
              // so we have the new `endCursor` and `hasNextPage` values
              allPeople: {
                __typename: previousResult.allPeople.__typename,
                edges: [...previousResult.allPeople.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult;
      },
    });
  const hanleSearch = (data: any) => console.log(`data`, data);

  return (
    <Box>
      <Flex justifyContent="flex-end" padding="20px 0">
        <Search
          placeholder="Search Character by name"
          onSearch={hanleSearch}
          style={{ width: 200 }}
        />
      </Flex>

      {loading ? (
        <SpinnerView height="50vh" />
      ) : (
        <PeopleTable
          dataSource={peopleData?.people}
          loadMore={handleLoadMore}
          totalCount={peopleData.totalCount}
        />
      )}
    </Box>
  );
};

export default PeopleList;
