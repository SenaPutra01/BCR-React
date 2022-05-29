import React from 'react'
import Hero from "../../components/cars/hero";
import "../../style/cars.css"
import DisplayCar from "../../components/cars/dislpayCar"

export default function cars() {
  return (
    <div>
      <Hero />
      <DisplayCar />
    </div>
  )
}
