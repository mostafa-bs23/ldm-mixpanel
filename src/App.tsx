import './App.css'
import withMixpanel from './HOC/WithMixPanel';
// import { useDispatch, useSelector } from 'react-redux';
// import { EventsState } from './store/types';
import { trackEvent } from './store/actions/events';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
// import { useAppSelector, useAppDispatch } from 'app/hooks'

const App = ({ mixpanel }: any) => {
  // const dispatch = useDispatch();
  // const events = useSelector((state: EventsState) => state.events);

  // The `state` arg is correctly typed as `RootState` already
  const events = useAppSelector((state) => state.events)
  const dispatch = useAppDispatch()

  // function handleTrackEvent() {
  //   dispatch(trackEvent({eventName: 'Registered', eventData: {some: 'data'}}));
  // }

  useEffect(() => {
    dispatch(trackEvent({eventName: 'Registered', eventData: {some: 'data'}}));
  }, []);

  return (
    <div>
      {/* <button onClick={handleTrackEvent}>Track event</button> */}
      <h2>Event Data</h2>
      <hr />
      <p> {JSON.stringify(events)} </p>

    </div>
  );
};

export default withMixpanel(App);

