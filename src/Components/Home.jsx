import React from 'react'
import ItemList from './ItemList' 
import Adds from './Adds'
import BestElec from './BestElec'
import BeautiFoodToys from './BeautiFoodToys'
import Details from './Details'

const Home = () => {
  return (
    <div>
        <ItemList></ItemList>
        <Adds></Adds>
        <BestElec></BestElec>
        <BeautiFoodToys></BeautiFoodToys>
        <Details></Details>
    </div>
  )
}

export default Home