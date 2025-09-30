import { useState } from "react";
import { Play, Pause, Volume2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MiniPlayerProps {
  title: string;
  artist: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
}

const MiniPlayer = ({ title, artist, youtubeUrl, thumbnailUrl }: MiniPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(youtubeUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0` : null;
  const defaultThumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      // Open YouTube video in new tab for now (can be enhanced with embedded player)
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <Card className="w-full max-w-lg card-modern rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in shadow-2xl">
      <CardContent className="p-0">
        <div className="relative">
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={thumbnailUrl || defaultThumbnail || "/placeholder.svg"}
              alt={`${title} by ${artist}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
              <Button
                size="icon"
                className="h-16 w-16 bg-primary/90 backdrop-blur-sm hover:bg-primary text-black border-0 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
            </div>
          </div>

          {/* Track Info */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground truncate text-xl">{title}</h4>
                <p className="text-base text-muted-foreground truncate mt-1">{artist}</p>
              </div>
              <Button
                size="icon"
                className="flex-shrink-0 ml-4 text-muted-foreground hover:text-primary bg-transparent hover:bg-primary/10 rounded-full"
                onClick={() => window.open(youtubeUrl, '_blank')}
                title="Open in YouTube"
              >
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  size="icon"
                  className="h-10 w-10 text-muted-foreground hover:text-primary bg-transparent hover:bg-primary/10 rounded-full"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>
                <Volume2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-sm text-primary font-medium">
                🎵 Now Playing
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniPlayer;