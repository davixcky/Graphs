import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Input,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Graph from './dss/Graphs';
import { useGraphContext } from './context/Graph/GraphServiceContext';

function App() {
  const { columnsCount, setColumnsCount, rowsCount, setRowsCount, setDataAt, graph} = useGraphContext();

  const generateTable = () => {
    const table = [];

    for (let i = 0; i < rowsCount; i++) {
      table.push(generateRow(i));
    }

    return table;
  };

  const generateRow = (rowIndex) => {
    const columns = [];

    for (let i = 0; i < columnsCount; i++) {
      columns.push(
        <Td key={`r${rowIndex}-${i}`}>
          <Input type='number' onChange={(e) => setDataAt(rowIndex, i, e.target.value)}/>
        </Td>
      );
    }

    return (
      <Tr>
        { columns }
      </Tr>
    );
  };

  useEffect(() => {
    const g = new Graph(12);

    console.log(
      g.getMainDiagonal([
        [1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 0, 0],
      ])
    );

    console.log(
      g.toAdjacency([
        [1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 0, 0],
      ])
    );
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Box width="50%">
              <Text>Numero de columnas</Text>
              <Input
                type="number"
                onChange={e => setColumnsCount(e.target.value)}
              />
              <Text>Numero de filas</Text>
              <Input
                type="number"
                onChange={e => setRowsCount(e.target.value)}
              />
            </Box>
            <Text>
              {columnsCount} - {rowsCount} {graph.data}
            </Text>
            <Box width="80%">
              <Divider />
              <Divider />
              <Divider />
              <Divider />
              <TableContainer>
                <Table size="sm">
                  <Tbody>{generateTable()}</Tbody>
                </Table>
              </TableContainer>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
