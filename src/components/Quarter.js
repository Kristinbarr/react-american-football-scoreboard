import React, { useState } from 'react'

const Quarter = () => {
  const [quarter, setQuarter] = useState(0)
  return (
    <div className='quarter'>
      <h3
        className='quarter__title'
        onClick={() => {
          quarter === 4 ? setQuarter(0) : setQuarter(quarter + 1)
        }}
      >
        Quarter
      </h3>
      <div className='quarter__value'>{quarter}</div>
    </div>
  )
}

export default Quarter;
