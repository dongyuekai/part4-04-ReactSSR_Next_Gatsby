import React from 'react'

export default function Person({pageContext}){
  console.log('dyk--pageContext--',pageContext)

  return (
    <div>
      <span>{pageContext.name}</span>
      <span>{pageContext.age}</span>
    </div>
  )
}