import React, { useReducer } from 'react';
import { UserQueuePlaylist } from '../context';
import { initialPlaylist, playlistReducer } from '../reducer/PlaylistReducer';

export const UserPlaylistWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatchPlaylist] = useReducer(
    playlistReducer,
    initialPlaylist
  );

  return (
    <UserQueuePlaylist.Provider value={{ state, dispatchPlaylist }}>
      {children}
    </UserQueuePlaylist.Provider>
  );
};
