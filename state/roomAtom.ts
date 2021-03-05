import { atom } from 'jotai';
import Room from '../models/Room';

export const ROOM_EMPTY = {
  name: '',
  slug: '',
  queuedSongs: [],
  owner_id: '',
  users: [],
  messages: [],
  isPublic: true,
};

export const roomAtom = atom<Room>(ROOM_EMPTY);
