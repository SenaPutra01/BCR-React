import React from 'react'
import Header from "../components/header";
import Footer from '../components/footer';
import Hero from '../components/cars/hero';
import SearchForm from '../components/cars/searchForm';
import "../style/cars.css"
import DisplayCar from "../components/cars/dislpayCar"

export default function cars() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchForm />
      <DisplayCar />
      <Footer />
    </div>
  )
}
