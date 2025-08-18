import { Button } from "@/components/ui/button";
import { JokeCard } from "./JokeCard";
import { useJokes } from "@/hooks/useJokes";
import { Sparkles, Smile } from "lucide-react";

export const JokeGenerator = () => {
  const { currentJoke, jokesViewed, isAnimating, getRandomJoke } = useJokes();

  return (
    <div className="min-h-screen bg-gradient-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-primary">
            <Smile className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Joke Generator
            </h1>
            <Smile className="w-12 h-12" />
          </div>
          <p className="text-muted-foreground text-lg">
            Need a laugh? Get ready for some hilarious jokes! 😄
          </p>
        </div>

        {/* Joke Card */}
        <div className="relative">
          <JokeCard joke={currentJoke} isAnimating={isAnimating} />
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            variant="fun"
            size="lg"
            onClick={getRandomJoke}
            disabled={isAnimating}
            className="text-lg px-8 py-6 rounded-full"
          >
            <Sparkles className="w-5 h-5" />
            {isAnimating ? "Getting joke..." : "Get Another Joke!"}
            <Sparkles className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Jokes enjoyed: <span className="font-semibold text-primary">{jokesViewed}</span>
            </p>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>Share a smile, spread the joy! 🎉</p>
          <div className="flex justify-center space-x-4 text-xs">
            <span>😂 Funny</span>
            <span>•</span>
            <span>🎭 Clean</span>
            <span>•</span>
            <span>⚡ Random</span>
          </div>
        </div>
      </div>
    </div>
  );
};