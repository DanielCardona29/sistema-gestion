import React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './styles.scss';

interface TypeProps {
  width?: number;
  data?: any;
  cols?: any;
  pageSize?: number,
  rowsPerPageOptions?: number[],
}


const Table: React.FC<TypeProps> = ({ width, data, cols, pageSize, rowsPerPageOptions }) => {

  return (
    <div className="table-wrapper">
      <DataGrid
        style={{ width }}
        rows={data}
        columns={cols}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        className="table"
        autoPageSize
        disableColumnFilter
        disableColumnSelector
        disableSelectionOnClick
        disableColumnMenu
        getRowClassName={(params) => {
          const { indexRelativeToCurrentPage: index } = params;
          return `table-row ${index % 2 === 0 ? 'pair' : 'odd'}`
        }}

        getCellClassName={(params) => {
          return ('table-cells')
        }}
      />


    </div>
  )
}

Table.defaultProps = {
  width: 610,
  pageSize: 8,
  rowsPerPageOptions: [5],
  data: [],
  cols: []
}

export default Table;


