import {createContext, useContext, useEffect, useState} from 'react';
import Graph from '../../dss/Graphs';

const GraphContext = createContext();

const GraphProvider = ({children}) => {
    const [graph, setGraph] = useState(new Graph());
    const [columnsCount, setColumnsCount] = useState(0);
    const [rowsCount, setRowsCount] = useState(0);

    useEffect(() => {
        graph.generateEmptyMatrix(rowsCount, columnsCount);
    }, [columnsCount, rowsCount, graph]);

    const setDataAt = (rowIndex, colIndex, value) => {
        graph.data[rowIndex][colIndex] = value;

        console.log(graph.data)

        const g2 = new Graph();
        g2.data = graph.data;
        setGraph(g2);
    }

    return (
        <GraphContext.Provider value={{
            columnsCount,
            rowsCount,
            setColumnsCount,
            setRowsCount,
            graph,
            setDataAt
        }}>
            {children}
        </GraphContext.Provider>
    )
}

const useGraphContext = () => {
    const context = useContext(GraphContext);
    if (context === undefined) {
        throw new Error('useGraphContext must be used within a GraphProvider');
    }

    return context;
}

export {GraphProvider, useGraphContext};