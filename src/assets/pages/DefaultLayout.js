import React from 'react'
import Routes from '../../Routes'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ValidateAuth from '../common/settings/ValidateAuth'

export default function DefaultLayout() {
  return (
    <div className="shopmobile-main">
    <ValidateAuth/>
    <Header />
    <Routes />
    <Footer />
  </div>
  )
}
