import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'

function RootLayout() {
  const {state} = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      
      {isLoading ? <div className="loading-spinner"></div> : null}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout