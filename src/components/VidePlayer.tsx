import React, { useEffect, useState, useRef } from 'react';
import { CamService } from '../services';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface Props {
	camNum: number
}

const VideoPlayer: React.FC<Props> = ({ camNum }) => {

	const [videoPlayer, setVideoPlayer] = useState<any>(null);
	const [rectMoves, setRectMoves] = useState<boolean>(false);
	const [rectExpanded, setRectExspanded] = useState<boolean>(false);

	const videoTagRef = useRef<HTMLVideoElement>(null);
	const videoRectRef = useRef<HTMLDivElement>(null);
	
	const videoJSOptions = {
		autoplay: true,
		controls: false,
		sources: [{
			src: CamService.getCamSrcByNum(camNum),
		}],
	}; 

	useEffect(() => {
		if (videoTagRef.current) {
			setVideoPlayer( videojs(videoTagRef.current, videoJSOptions) )
		}

		return () => {
			if (videoPlayer) {
				videoPlayer.dispose();
				setVideoPlayer(null);
			}
		}
	}, []);

	return (
		<div className="player__container">
			<div data-vjs-player>
				<video ref={videoTagRef} className="video-js player__container__video"></video>
			</div>
			<div 
				className={`player__container__rect ${rectMoves ? 'moves' : ''}`}
				ref={videoRectRef}
				onClick={() => {
					if (rectMoves && rectExpanded) {
						if (videoRectRef.current) {
							videoRectRef.current.style.width = '140px';
							videoRectRef.current.style.height = '60px';
							setRectExspanded(false);
						}
					} else if (rectMoves) {
						if (videoRectRef.current) {
							videoRectRef.current.style.width = '200px';
							videoRectRef.current.style.height = '100px';
							setRectExspanded(true);
						}
					} else {
						setRectMoves(true);
					}
				}}
			>
				<span>{rectMoves ? rectExpanded ? 'Click to squeeze!' : 'Click to expand!' : 'Click to move!'}</span>
			</div>
		</div>
	)
}

export default VideoPlayer;
