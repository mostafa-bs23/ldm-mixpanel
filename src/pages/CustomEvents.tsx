import React, { useEffect } from 'react'
import { trackEvent } from '../store/actions/events';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function CustomEvents() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events)

  useEffect(() => {
    dispatch(trackEvent({ eventName: 'Custom', eventData: { name: 'test' } }));
  }, []);

  return (
    <div>
      <h2>Event Data</h2>
      <hr />
      <p> {JSON.stringify(events)} </p>
    </div>
  )
}
