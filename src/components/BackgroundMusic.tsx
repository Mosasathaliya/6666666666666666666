
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create global callback for YouTube API
    (window as any).onYouTubeIframeAPIReady = () => {
      setIsReady(true);
    };

    return () => {
      // Cleanup
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const player = new (window as any).YT.Player('youtube-player', {
      height: '1',
      width: '1',
      videoId: '-oIeDR9w--E',
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: '-oIeDR9w--E',
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        fs: 0,
        cc_load_policy: 0,
        playsinline: 1,
        start: 0,
        mute: 0
      },
      events: {
        onReady: (event: any) => {
          // Automatically start playing when ready
          event.target.playVideo();
          setIsPlaying(true);
          // Trigger music splash animation
          window.dispatchEvent(new CustomEvent('musicplay'));
        },
        onStateChange: (event: any) => {
          // Update playing state based on video state
          if (event.data === (window as any).YT.PlayerState.PLAYING) {
            setIsPlaying(true);
            // Trigger music splash animation when playing
            window.dispatchEvent(new CustomEvent('musicplay'));
          } else if (event.data === (window as any).YT.PlayerState.PAUSED) {
            setIsPlaying(false);
          }
        }
      }
    });

    (window as any).youtubePlayer = player;
  }, [isReady]);

  const toggleMute = () => {
    const player = (window as any).youtubePlayer;
    if (!player) return;

    if (isMuted) {
      setIsMuted(false);
      player.unMute();
      if (!isPlaying) {
        player.playVideo();
      }
      // Trigger music splash animation
      window.dispatchEvent(new CustomEvent('musicplay'));
    } else {
      setIsMuted(true);
      player.mute();
    }
  };

  return (
    <>
      {/* Hidden YouTube Player */}
      <div 
        id="youtube-player"
        className="fixed -top-10 -left-10 pointer-events-none opacity-0"
        style={{ width: '1px', height: '1px' }}
      />
      
      {/* Music Control Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-slate-800/80 backdrop-blur-sm border border-slate-600 hover:border-blue-500/50 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
        title={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
