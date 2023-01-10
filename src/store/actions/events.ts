// import { DataState, EventActionsTypes } from '../types';
import mixpanel from 'mixpanel-browser';
import { TrackEvent, EventsState } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const trackEvent = (eventName: string, eventData: any) => (dispatch: any) => {
//     mixpanel.track(eventName, eventData);
//     dispatch({
//       type: 'TRACK_EVENT',
//       payload: { eventName, eventData },
//     });
//   };

export const trackEvent = createAsyncThunk('TRACK_EVENT', async (payload: TrackEvent) => {
    // mixpanel.track(payload.eventName, payload.eventData);
    return payload;
});

