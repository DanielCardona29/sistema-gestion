import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import './styles.scss';


interface TypeProps {
  data?: any;
  cols: GridColDef[];
  pageSize?: number,
  rowsPerPageOptions?: number[],
}


const Table: React.FC<TypeProps> = ({ data, cols, pageSize, rowsPerPageOptions }) => {
  const [colWidth, setColWidth] = useState(0);

  const [tableWidth, setTableWidth] = useState(600);

  const colums = cols.map((col: GridColDef) => {
    return {
      ...col,
      width: colWidth
    }
  });



  useEffect(() => {
    const clientWidth = document.querySelector('.table-wrapper')?.clientWidth || 0;
    setTableWidth(clientWidth - 110);
    setColWidth((clientWidth - 120) / cols?.length)

  }, [data, cols]);

  return (
    <div>

      <div className="table-wrapper">
        <DataGrid
          style={{ width: tableWidth }}
          rows={data}
          columns={colums}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          className="table"


          autoPageSize
          disableColumnSelector
          disableSelectionOnClick

          pagination

          localeText={{
            columnMenuSortAsc: 'Ordenar ascendente',
            columnMenuSortDesc: 'Ordenar Desendente',
            columnMenuUnsort: 'Deshacer',
            columnMenuFilter: 'Filtrar',
            filterPanelColumns: 'Columna',
            filterPanelOperators: 'Operador',
            filterPanelOperatorAnd: 'y',
            filterPanelOperatorOr: 'o',
            filterOperatorEquals: 'igual',
            filterOperatorContains: 'contiene',
            filterOperatorStartsWith: 'empieza por',
            filterOperatorEndsWith: 'finaliza por',
            filterOperatorIsEmpty: 'esta vacio',
            filterOperatorIsNotEmpty: 'no esta vacio',
            filterOperatorIsAnyOf: 'hay alguno que',
            filterOperatorIs: 'es',
            filterOperatorNot: 'no es',
            filterOperatorAfter: 'después',
            filterOperatorOnOrAfter: 'no es después',
            filterOperatorBefore: 'antes',
            filterOperatorOnOrBefore: 'no es antes'
          }}

          getRowClassName={(params) => {
            const { indexRelativeToCurrentPage: index } = params;
            return `table-row ${index % 2 === 0 ? 'pair' : 'odd'}`
          }}

          getCellClassName={(params) => {
            return ('table-cells')
          }}
        />


      </div>
    </div>

  )
}

Table.defaultProps = {
  pageSize: 8,
  rowsPerPageOptions: [5],
  data: [],
  cols: []
}

export default Table;


