import React from 'react'

function RawHtml() {
  
    const CUSTOM_HTML = `
        <h1>Raw HTML</h1>
        <p>Raw HTML in React components</p>`
  
    return (
    <>
        <div dangerouslySetInnerHTML={ { __html: CUSTOM_HTML} }></div>
    </>
  )
}

export default RawHtml