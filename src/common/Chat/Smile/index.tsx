import React from 'react'

export const Smile = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='none' viewBox='0 0 36 36'>
      <circle cx='18' cy='18' r='8.5' stroke='#E6E6E6'></circle>
      <circle cx='15' cy='16' r='1' fill='#E6E6E6'></circle>
      <circle cx='21' cy='16' r='1' fill='#E6E6E6'></circle>
      <path stroke='#E6E6E6' strokeLinecap='round' d='M14.836 20.5a3.5 3.5 0 006.326 0'></path>
      <mask
        id='mask0_6815_25069'
        style={{maskType: 'alpha'}}
        width='18'
        height='18'
        x='9'
        y='9'
        maskUnits='userSpaceOnUse'
      >
        <circle cx='18' cy='18' r='8.5' stroke='#E6E6E6'></circle>
        <circle cx='15' cy='16' r='1' fill='#E6E6E6'></circle>
        <circle cx='21' cy='16' r='1' fill='#E6E6E6'></circle>
        <path stroke='#E6E6E6' strokeLinecap='round' d='M14.836 20.5a3.5 3.5 0 006.326 0'></path>
      </mask>
      <g mask='url(#mask0_6815_25069)'>
        <path fill='#E6E6E6' d='M9 9H27V27H9z'></path>
      </g>
    </svg>
  )
}
