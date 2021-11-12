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
  console.log(`people`, data, loading);
  const handleLoadMore = () =>
    fetchMore({
      variables: {
        cursor: peopleData.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.comments.edges;
        const pageInfo = fetchMoreResult.comments.pageInfo;

        return newEdges.length
          ? {
              // Put the new comments at the end of the list and update `pageInfo`
              // so we have the new `endCursor` and `hasNextPage` values
              comments: {
                __typename: previousResult.comments.__typename,
                edges: [...previousResult.comments.edges, ...newEdges],
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
          placeholder="input search text"
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
