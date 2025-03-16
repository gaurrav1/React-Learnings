import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Store() {

  const navigate = useNavigate();
  useEffect( () => {
    const timeout = setTimeout(() => {
      navigate("/")
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div>Store</div>
  )
}

export default Store