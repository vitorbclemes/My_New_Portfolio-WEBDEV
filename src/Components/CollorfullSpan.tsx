import React from 'react'

type ColorSpec = {
    message:string,
    color:string
}

export default function ColorfullSpan(data:ColorSpec) {
  return (
    <span style={{fontWeight:'bold',color:data.color}}>{data.message}</span>
  )
}
