import './App.css'
import withMixpanel from './HOC/WithMixPanel';
// import { useDispatch, useSelector } from 'react-redux';
// import { EventsState } from './store/types';
import { trackEvent } from './store/actions/events';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
// import { useAppSelector, useAppDispatch } from 'app/hooks'
import { Link } from 'react-router-dom'

const App = ({ mixpanel }: any) => {
  // const dispatch = useDispatch();
  // const events = useSelector((state: EventsState) => state.events);

  // The `state` arg is correctly typed as `RootState` already
  // const events = useAppSelector((state) => state.events)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(trackEvent({ eventName: 'Registered', eventData: { some: 'data' } }));
  }, []);

  return (
    <div>
      <nav>
        <Link style={{marginRight: '20px'}} to="/events">Events</Link>
        <Link to="/custom-events">Custom Events</Link>
      </nav>
    </div>
  );
};

export default withMixpanel(App);

