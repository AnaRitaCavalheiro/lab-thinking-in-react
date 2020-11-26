import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import data from './data.json';



function App() {
let products = data.data


  return (
    <div className="App">
     <FilterableProductTable products={products}/>
    </div>
  );
}

export default App;
