import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from '../Data/products.json';
import { GridHelper } from './GridHelper';
const Inbox = () => {
  const onSelectedItemsChange = (ev) => {
    console.log(ev.selectedItems);
  };
  return (
    <GridHelper
      toolbarSettings={{
        filterHighlights: true,
        expandCollapseAllButton: true,
        pdfExportButton: true,
        excelExportButton: true,
        externalFilter: true,
        showFeaturesConfigurator: true,
        showColumnsConfigurator: true,
      }}
      initialDataState={{
        skip: 0,
        take: 10,
        sort: [
          {
            field: 'ProductName',
            dir: 'desc',
          },
        ],
        group: [
          {
            field: 'Category.CategoryName',
            dir: 'asc',
          },
        ],
      }}
      onSelectedItemsChange={onSelectedItemsChange}
      filterable={true}
      dataItemKey={'ProductID'}
      selectable={true}
      groupable={true}
      sortable={true}
      pageable={{
        buttonCount: 3,
        info: true,
        pageSizes: [5, 10, 50],
      }}
      data={products}
    >
      <Grid
        style={{
          height: '400px',
        }}
        data={products}
      >
        <GridColumn field="ProductID" title="ID" width="40px" className="name" />
        <GridColumn field="ProductName" title="Name" width="250px" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>
    </GridHelper>
  );
};
export default Inbox;
