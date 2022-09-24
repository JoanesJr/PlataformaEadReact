import React, { useState } from 'react';

export const GridContext = React.createContext({});

export const GridProvider = ({children}) => {
    const [selectedRow, setSelectedRow] = useState(null);

    return (
      <GridContext.Provider value={{ selectedRow, setSelectedRow }}>
        {children}
      </GridContext.Provider>
    );
}

export const useGridRow = () => React.useContext(GridContext);