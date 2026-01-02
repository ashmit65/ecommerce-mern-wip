import React from 'react'
import Breadcrum from "./Partials/Breadcrum"
import AboutContent from "./Partials/AboutContent"
import Features from './Partials/Features'
import Faqs from './Partials/Faqs'

export default function About() {
  return (
    <>
      <Breadcrum title="About Us"/>
      <AboutContent/>
      <Features/>
      <Faqs/>
    </>
  )
}
