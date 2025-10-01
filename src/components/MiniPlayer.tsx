import { Card } from "@/components/ui/card";

interface MiniPlayerProps {
  title: string;
  artist: string;
  youtubeUrl: string;
}

const MiniPlayer = ({ title, artist, youtubeUrl }: MiniPlayerProps) => {
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);

  return (
    <Card className="interactive-card rounded-2xl overflow-hidden animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
      <div className="relative aspect-video w-full bg-black">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title={`${artist} - ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p>Invalid video URL</p>
          </div>
        )}
      </div>
      <div className="p-6 bg-gradient-to-br from-card to-secondary">
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground">{artist}</p>
      </div>
    </Card>
  );
};

export default MiniPlayer;