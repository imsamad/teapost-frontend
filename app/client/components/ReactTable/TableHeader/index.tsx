/* eslint-disable react/jsx-key */
import {
  ArrowUpDownIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { HStack, Thead, Tr, Th, chakra, Box, Flex } from '@chakra-ui/react';
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from 'react-icons/hi';
import { TableInstance } from 'react-table';

const TableHeader = ({
  tableInstance,
}: {
  tableInstance: any | TableInstance<any>;
}) => {
  return (
    <Thead>
      {tableInstance.headerGroups.map((headerGroup: any) => (
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <Th
              {...column.getHeaderProps()}
              p={0}
              alignItems="flex-start"
              alignContent="flex-start"
              border="0px solid red"
            >
              <Flex
                border="0px"
                {...column.getHeaderProps(column.getSortByToggleProps())}
                p={4}
              >
                {column.render('Header')}
                {/* <span> */}

                {column.canSort && (
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : (
                      <ArrowUpDownIcon aria-label="unsorted" />
                    )}
                  </chakra.span>
                )}
              </Flex>
              {/* @ts-ignore */}
              <Box>
                {column.canFilter ? (
                  <Box border="0px" width="full" p={2}>
                    {column.render('Filter')}
                  </Box>
                ) : null}
              </Box>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};

export default TableHeader;
