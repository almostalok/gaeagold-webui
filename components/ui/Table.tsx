'use client';

import { AgGridReact } from 'ag-grid-react';
import type { ColDef, ColGroupDef } from 'ag-grid-community';
import { useMemo } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-alpine-dark.css';

type TableProps<T> = {
  rowData: T[];
  columnDefs: (ColDef<T> | ColGroupDef<T>)[];
  loading?: boolean;
  onRowClicked?: (row: T) => void;
};

export default function Table<T>({
  rowData,
  columnDefs,
  loading = false,
  onRowClicked,
}: TableProps<T>) {
  const defaultColDef = useMemo<ColDef<T>>(
    () => ({
      flex: 1,
      minWidth: 120,
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  const themeClass =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'ag-theme-alpine-dark'
      : 'ag-theme-alpine';

  return (
    <div className={themeClass} style={{ width: '100%', height: 500 }}>
      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={10}
        animateRows
        rowSelection="multiple"
        onRowClicked={(event) => event.data !== undefined && onRowClicked?.(event.data)}
        overlayLoadingTemplate={'<span>Loading...</span>'}
        overlayNoRowsTemplate={'<span>No data</span>'}
        loading={loading}
      />
    </div>
  );
}
