import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Input } from 'antd';

import { GqlHelper } from 'helpers';
import { Box, Button, Flex, PeopleTable, SpinnerView } from 'components';
import { AllPeopleData } from 'types';

const { Search } = Input;

const PeopleList = () => {
  const { data, loading, fetchMore } = useQuery(GqlHelper.ALL_PEOPLE);
  const [pageNumber, setpageNumber] = useState(1); // Page number
  const [peopleData, setPeopleData] = useState<AllPeopleData>(data?.allPeople);

  useEffect(() => {
    if (data) setPeopleData(data?.allPeople);
  }, [data]);

  const handleNextPage = () =>
    fetchMore({
      variables: {
        cursor: peopleData?.pageInfo?.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult?.allPeople.edges;

        setpageNumber((prev) => prev + 1);
        return setPeopleData(
          newEdges.length
            ? fetchMoreResult?.allPeople
            : previousResult?.allPeople
        );
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
        <>
          <PeopleTable dataSource={peopleData?.people} />
          <Flex flexGap="20px" margin="20px 0" justifyContent="flex-end">
            <Button onClick={handleNextPage}>Next</Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default PeopleList;
