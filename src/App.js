import React, { Fragment } from 'react'
import './App.css';
import Header from './components/Header'
import ListHouses from './components/ListHouses'

function App() {
  return (
    <Fragment>
      <Header />
      <ListHouses />
    </Fragment>
  )
}

export default App;
