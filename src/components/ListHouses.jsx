import React, { Fragment, useState } from 'react'
import Card from './Card'

function ListHouses() {

  // state of all houses
  const [listings, setListings] = useState()  

  function getListings() {
    axios.get('API_URL').then(results => {
      console.log(results.data)
      setListings(results.data)
    }
  )}

  useEffect = () => {
    getListings()
    , [listings]}
  return (
    <Fragment>
      <h1>List of all Houses</h1>
      <Card listings={listings}/>
    </Fragment>
  )
}

export default ListHouses