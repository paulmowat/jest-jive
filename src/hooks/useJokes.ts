import { useState, useCallback } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't programmers like nature? It has too many bugs!",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? He was outstanding in his field!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
  "Why did the math book look so sad? Because it had too many problems!",
  "What do you call a sleeping bull? A bulldozer!",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the coffee file a police report? It got mugged!",
  "What do you call a fish wearing a bowtie? Sofishticated!",
  "Why don't scientists trust stairs? Because they're always up to something!",
  "What do you call a factory that makes good products? A satisfactory!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call a fake stone? A shamrock!",
  "Why don't melons get married? Because they cantaloupe!",
  "What do you call a pig that does karate? A pork chop!",
  "Why did the cookie go to the doctor? Because it felt crumbly!",
  "What do you call a group of disorganized cats? A cat-astrophe!",
  "Why don't oysters share? Because they're shellfish!",
  "What do you call a sleeping tiger? A nap-kin!",
  "Why did the banana go to the doctor? It wasn't peeling well!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the grape stop in the middle of the road? Because it ran out of juice!",
  "Why did the orange stop? It ran out of juice!",
  "Why did the lemon stop? It ran out of juice!"
];

export const useJokes = () => {
  const [currentJoke, setCurrentJoke] = useState(jokes[0]);
  const [jokesViewed, setJokesViewed] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomJoke = useCallback(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const newJoke = jokes[randomIndex];
      
      // Make sure we don't get the same joke twice in a row
      if (newJoke === currentJoke && jokes.length > 1) {
        const filteredJokes = jokes.filter(j => j !== currentJoke);
        const randomFilteredIndex = Math.floor(Math.random() * filteredJokes.length);
        setCurrentJoke(filteredJokes[randomFilteredIndex]);
      } else {
        setCurrentJoke(newJoke);
      }
      
      setJokesViewed(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  }, [currentJoke]);

  return {
    currentJoke,
    jokesViewed,
    isAnimating,
    getRandomJoke
  };
};