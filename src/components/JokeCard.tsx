import { Card } from "@/components/ui/card";

interface JokeCardProps {
  joke: string;
  isAnimating: boolean;
}

export const JokeCard = ({ joke, isAnimating }: JokeCardProps) => {
  return (
    <Card className={`
      p-8 shadow-card bg-gradient-secondary border-0 transition-all duration-300
      ${isAnimating ? 'animate-bounce-in' : ''}
    `}>
      <p className="text-lg md:text-xl leading-relaxed text-foreground text-center font-medium">
        {joke}
      </p>
    </Card>
  );
};