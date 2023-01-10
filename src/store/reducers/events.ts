import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackEvent, EventsState } from '../types';
import { trackEvent } from '../actions/events';
import mixpanel from 'mixpanel-browser';

const slice = createSlice({
  name: 'events',
  initialState: { events: [] } as EventsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(trackEvent.fulfilled, (state, action: PayloadAction<TrackEvent>) => {
        mixpanel.track(action.payload.eventName, action.payload.eventData);
        state.events.push(action.payload);
      });
  },
});

export const { reducer: eventsReducer, actions } = slice;
