import React from 'react'
import { useAppSelector } from '../store/hooks'

export default function Events() {
  const events = useAppSelector((state) => state.events)

  return (
    <div>
      <h2>Event Data</h2>
      <hr />
      <p> {JSON.stringify(events)} </p>
    </div>
  )
}
