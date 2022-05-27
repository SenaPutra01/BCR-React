import React from 'react'
import Section from "../components/landingPage/sections"
import Header from "../components/header";
//import Hero from "../components/hero";
import Footer from "../components/footer";
import "../style/style.css"

export default function landingPage() {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}
