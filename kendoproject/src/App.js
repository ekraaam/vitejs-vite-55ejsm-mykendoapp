import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';

import './App.css';
import nutrition from './Data/nutrition';

function App() {
  return (
    <div className="App">
      <h1> Healthy Habits </h1>
      <div className="healthy-habits"></div>
      <div className="add-habits">
        <DropDownList data={nutrition.category} />
      </div>
      <div>
        <NumericTextBox />
      </div>
      <div>
        <Button themeColor={'info'}>Add Habits</Button>
      </div>
    </div>
  );
}

export default App;
