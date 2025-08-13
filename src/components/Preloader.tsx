import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Hide preloader after 3 seconds or when progress reaches 100%
    const hideTimeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 100);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-500 ${
      isFadingOut ? 'preloader-fade-out' : 'preloader-fade-in'
    }`}>
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Loading GIF */}
        <img 
          src="https://res.cloudinary.com/dsfst8a7g/image/upload/v1755106987/Untitled_design_vkl3th.gif"
          alt="Loading animation"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto mb-3 sm:mb-4 md:mb-6"
        />

        {/* Loading Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-2 sm:mb-3 md:mb-4">
          Welcome to Paradise Interior
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4">
          Loading your dream space...
        </p>

        {/* Progress Bar */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-auto mb-2 sm:mb-3 md:mb-4">
          <div className="w-full bg-muted rounded-full h-1.5 sm:h-2 md:h-2.5 lg:h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-500 to-blue-500 h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full transition-all duration-300 ease-out progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Progress Percentage */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
          {Math.round(progress)}%
        </p>

        {/* Additional Loading Indicators */}
        <div className="mt-3 sm:mt-4 md:mt-6 flex justify-center space-x-1 sm:space-x-2 md:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-teal-500 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};
