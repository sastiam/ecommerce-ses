import { reducers } from 'redux/store';

export type FileURL = string;
export type TReactionComment = 'like' | 'dislike' | '';
export type RequestStatus = 'loading' | 'success' | 'error';
export type TReduxState = ReturnType<typeof reducers>

export type TLoadingState = 'loading' | 'complete' | 'error';