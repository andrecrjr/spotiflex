import React, { memo } from 'react';
import {
  ITracklist,
  mergePlaylistItemTrack,
} from '../../../types/spotifyTypes';
import { msToTime } from '../../utils';

const TrackListChild: React.FC<{ track: ITracklist | mergePlaylistItemTrack }> =
  memo(({ track }) => {
    console.log(track);
    console.log('aaaaaa', track.uri);
    return (
      <>
        <span className='tracklist__item--play'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 60 60'
            className='button--play'
          >
            <path d='M45.563 29.174l-22-15c-.307-.208-.703-.231-1.031-.058-.327.173-.532.513-.532.884v30c0 .371.205.711.533.884.146.078.307.116.467.116.197 0 .394-.059.563-.174l22-15c.273-.186.437-.495.437-.826s-.164-.64-.437-.826zM24 43.107V16.893L43.225 30 24 43.107z' />
            <path d='M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z' />
          </svg>
        </span>
        <div className={`tracklist__item--child`}>
          <h4
            className={`track--name ${track.name.length > 18 && 'big-title'}`}
          >
            {track.name}
          </h4>
          <h5>{msToTime(track.duration_ms)}</h5>
        </div>
      </>
    );
  });

TrackListChild.displayName = 'TracklistChild';

export default TrackListChild;
