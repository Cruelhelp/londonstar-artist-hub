import { Calendar, Music, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeedSection = () => {
  const feeds = [
    {
      title: "Tour Dates",
      icon: Calendar,
      items: [
        { title: "Miami Live", date: "Dec 15, 2024", venue: "American Airlines Arena" },
        { title: "Kingston Vibes", date: "Dec 22, 2024", venue: "National Stadium" },
        { title: "New York Energy", date: "Jan 5, 2025", venue: "Madison Square Garden" },
      ]
    },
    {
      title: "New Releases",
      icon: Music,
      items: [
        { title: "Fire & Ice (Single)", date: "Nov 20, 2024", status: "Now Streaming" },
        { title: "Island Dreams EP", date: "Dec 1, 2024", status: "Pre-Order" },
        { title: "Collaboration Album", date: "Feb 2025", status: "Coming Soon" },
      ]
    },
    {
      title: "Artist News",
      icon: Star,
      items: [
        { title: "Billboard Chart Success", date: "Nov 25, 2024", info: "#3 on Hot 100" },
        { title: "Grammy Nomination", date: "Nov 18, 2024", info: "Best New Artist" },
        { title: "Record Deal Expansion", date: "Nov 10, 2024", info: "International Distribution" },
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Updates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest news, releases, and tour dates from London Star Records
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {feeds.map((feed, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feed.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span>{feed.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {feed.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <p className="text-sm text-primary font-medium">
                      {item.venue || item.status || item.info}
                    </p>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10">
                  View All {feed.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedSection;