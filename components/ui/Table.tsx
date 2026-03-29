'use client';

import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';
import { RowClickedEvent } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-alpine-dark.css';

interface AgGridTableProps {
  rowData?: unknown[];
  columnDefs?: unknown[];
  loading?: boolean;
  onRowClicked?: (event: RowClickedEvent) => void;
}

export default function AgGridTable({
  rowData = [],
  columnDefs = [],
  loading = false,
  onRowClicked,
}: AgGridTableProps) {
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 120,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  const themeClass =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'ag-theme-alpine-dark'
      : 'ag-theme-alpine';

  return (
    <div className={themeClass} style={{ width: '100%', height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={10}
        animateRows
        rowSelection="multiple"
        onRowClicked={onRowClicked}
        overlayLoadingTemplate={'<span class="ag-overlay-loading-center">Loading...</span>'}
        overlayNoRowsTemplate={'<span class="ag-overlay-loading-center">No data found</span>'}
        loading={loading}
      />
    </div>
  );
}
