import * as React from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import {Calendar} from '@progress/kendo-react-dateinputs'
const tiles = [
  {
    defaultPosition: {
      col: 1,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 1',
    body: <Calendar/>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: {
      col: 3,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 2',
    body: <p>Reorderable and horizontally resizable only tile.</p>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: {
      col: 1,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 3',
    body: <p>Reorderable and vertically resizable only tile.</p>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: {
      col: 3,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 4',
    body: <p>Resizable only.</p>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: {
      col: 1,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 5',
    body: <p>Non-resizable and non-reorderable.</p>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: {
      col: 3,
      colSpan: 2,
      rowSpan: 2,
    },
    header: 'Tile 6',
    body: <p>Reorderable and resizable tile.</p>,
    resizable: false,
    reorderable: false,
  },
];
export default function Tilelayout() {
  return (
    <TileLayout
      columns={4}
      columnWidth={240}
      rowHeight={200}
      autoFlow={'column dense'}
      gap={{
        rows: 10,
        columns: 10,
      }}
      items={tiles}
    />
  );
}
