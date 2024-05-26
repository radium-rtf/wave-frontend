import React from 'react'

export const Send = ({isActive}: {isActive: boolean}) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='none' viewBox='0 0 36 36'>
      <g opacity={isActive ? '1' : '0.5'}>
        <path
          stroke='#E6E6E6'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M26.5 18l-17-8.5v5.306a2 2 0 001.671 1.973L18.5 18l-7.329 1.221A2 2 0 009.5 21.194V26.5l17-8.5z'
        ></path>
        <mask
          id='mask0_6815_25070'
          style={{maskType: 'alpha'}}
          width='18'
          height='18'
          x='9'
          y='9'
          maskUnits='userSpaceOnUse'
        >
          <path
            stroke='#E6E6E6'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M26.5 18l-17-8.5v5.306a2 2 0 001.671 1.973L18.5 18l-7.329 1.221A2 2 0 009.5 21.194V26.5l17-8.5z'
          ></path>
        </mask>
        <g mask='url(#mask0_6815_25070)'>
          <path fill='#E6E6E6' d='M9 9H27V27H9z'></path>
        </g>
      </g>
    </svg>
  )
}
