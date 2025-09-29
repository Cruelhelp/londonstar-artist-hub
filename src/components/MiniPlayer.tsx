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
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-white/10 hover:bg-card/90 transition-all duration-300 animate-scale-in">
      <CardContent className="p-0">
        <div className="relative">
          {/* Thumbnail */}
          <div className="relative h-32 overflow-hidden rounded-t-lg">
            <img
              src={thumbnailUrl || defaultThumbnail || "/placeholder.svg"}
              alt={`${title} by ${artist}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button
                size="icon"
                variant="ghost"
                className="h-12 w-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Track Info */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{title}</h4>
                <p className="text-sm text-muted-foreground truncate">{artist}</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="flex-shrink-0 ml-2 text-muted-foreground hover:text-foreground"
                onClick={() => window.open(youtubeUrl, '_blank')}
                title="Open in YouTube"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-xs text-muted-foreground">
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