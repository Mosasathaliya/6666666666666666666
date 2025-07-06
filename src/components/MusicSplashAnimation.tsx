
import React, { useEffect, useState } from 'react';
import { Music, Heart, Star, Sparkles } from 'lucide-react';

const MusicSplashAnimation = () => {
  const [splashes, setSplashes] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    type: string;
    scale: number;
    rotation: number;
    velocity: { x: number; y: number };
  }>>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const icons = [Music, Heart, Star, Sparkles];
  const colors = [
    'text-blue-400',
    'text-purple-400', 
    'text-pink-400',
    'text-cyan-400',
    'text-green-400',
    'text-yellow-400'
  ];

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      // Create multiple splashes at once for more intensity
      const splashCount = Math.random() > 0.7 ? 2 : 1;
      
      for (let i = 0; i < splashCount; i++) {
        const newSplash = {
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          type: colors[Math.floor(Math.random() * colors.length)],
          scale: 0.5 + Math.random() * 1.5,
          rotation: Math.random() * 360,
          velocity: {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4
          }
        };

        setSplashes(prev => [...prev, newSplash]);
      }

      // Remove splashes after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => splash.id < Date.now() - 3000));
      }, 3000);
    }, 200);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Animate existing splashes
  useEffect(() => {
    if (!isAnimating) return;

    const animationInterval = setInterval(() => {
      setSplashes(prev => prev.map(splash => ({
        ...splash,
        x: splash.x + splash.velocity.x,
        y: splash.y + splash.velocity.y,
        rotation: splash.rotation + 2,
        velocity: {
          x: splash.velocity.x * 0.98,
          y: splash.velocity.y * 0.98
        }
      })));
    }, 50);

    return () => clearInterval(animationInterval);
  }, [isAnimating]);

  // Start animation when music plays
  useEffect(() => {
    const handleMusicPlay = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 15000); // Stop after 15 seconds
    };

    // Listen for music events
    window.addEventListener('musicplay', handleMusicPlay);
    
    // Auto-start animation
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 8000);
    }, 2000);

    return () => {
      window.removeEventListener('musicplay', handleMusicPlay);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {splashes.map((splash, index) => {
        const IconComponent = icons[Math.floor(splash.id / 100) % icons.length];
        
        return (
          <div
            key={splash.id}
            className="absolute animate-ping"
            style={{
              left: splash.x,
              top: splash.y,
              transform: `translate(-50%, -50%) scale(${splash.scale}) rotate(${splash.rotation}deg)`,
              transition: 'all 0.1s ease-out',
            }}
          >
            <div className="relative">
              <IconComponent className={`w-6 h-6 ${splash.type} animate-bounce`} />
              <div className={`absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-pulse`} />
              <div className="absolute inset-0 w-8 h-8 -m-1 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full animate-ping" />
              <div className="absolute inset-0 w-10 h-10 -m-2 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded-full animate-pulse" 
                   style={{ animationDelay: `${index * 0.1}s` }} />
            </div>
          </div>
        );
      })}
      
      {/* Enhanced floating music notes with more movement */}
      <div className="absolute top-1/4 left-1/4 animate-float-slow">
        <div className="relative">
          <Music className="w-4 h-4 text-cyan-400/60 animate-spin-slow" />
          <div className="absolute inset-0 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 animate-float-delayed">
        <div className="relative">
          <Heart className="w-3 h-3 text-purple-400/60 animate-bounce" />
          <div className="absolute inset-0 w-3 h-3 bg-purple-400/20 rounded-full animate-ping" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
        <div className="relative">
          <Star className="w-5 h-5 text-blue-400/60 animate-pulse" />
          <div className="absolute inset-0 w-5 h-5 bg-blue-400/20 rounded-full animate-spin-slow" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 animate-float-delayed">
        <div className="relative">
          <Sparkles className="w-4 h-4 text-pink-400/60 animate-bounce" />
          <div className="absolute inset-0 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Dancing border effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-blue-400/30 animate-pulse" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400/30 via-blue-400/30 to-purple-400/30 animate-pulse" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-400/30 via-blue-400/30 to-cyan-400/30 animate-pulse" 
           style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default MusicSplashAnimation;
