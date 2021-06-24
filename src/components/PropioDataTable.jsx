import React from 'react';
import DataTable from "react-data-table-component";

const PropioDataTable = ({columns, data, loading, pagination}) => {
    return (
        <DataTable
        columns={columns}
        data={data}
        title="Arnold Movies"
        noDataComponent={<> { loading ? <h3>Cargando...</h3> : <h1>Sin datos</h1> }</>}
        pagination={pagination}
        paginationComponentOptions={{
          rowsPerPageText: "Filas por página:",
          rangeSeparatorText: "de",
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: "Todo",
        }}
      />
    );
}

export default PropioDataTable;
