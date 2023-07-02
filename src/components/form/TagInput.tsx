"use client";

import { useState, ChangeEvent } from "react";
import { Info, Lightbulb } from "lucide-react";
import TagChips from "../chips/TagChips";

const questions = [
  "Who are you?",
  "How do you describe yourself?",
  "What are your passions, hobbies, and interests?",
  "What communities, organizations, and groups are you a part of?",
  "Which city do you live in?",
  "What are your roles and titles?",
  "What do you believe in?",
  "What are your values?",
  "What are your philosophies?",
  "What do you love to do?",
  "What's most important to you?",
  "How do you enjoy spending your time?",
  "What's your personality like?",
  "What are you an expert in?",
  "What are your strengths?",
  "What do you love to talk about?",
  "What causes do you care about?",
  "What's your relational style?",
  "What did you study in school?",
  "Where did you go to school?",
  "What excites you?",
];

export default function TagInput({
  tagsStr,
  setTagsStr,
}: {
  tagsStr: string;
  setTagsStr: (tags: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const toggleOpen = () => setOpen(!open);
  const showExample = () => setShowTips(false);
  const hideExample = () => setShowTips(true);
  const handleTipBtn = () => {
    if (showTips && open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    hideExample();
  };
  const handleExampleBtn = () => {
    if (!showTips && open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    showExample();
  };
  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setTagsStr(target.value);
  };
  return (
    <fieldset className="my-4">
      <div className="flex items-center">
        <label htmlFor="tags-input" className="flex-auto py-1 text-lg">
          Tags
        </label>
        <button
          onClick={handleTipBtn}
          className="mr-2 flex items-center rounded-xl bg-black/5 px-2 py-0.5 opacity-70 transition-all hover:bg-black/10 hover:opacity-95 dark:bg-white/10 dark:hover:bg-white/10"
        >
          <Info size={16} />
          <span className="ml-1 text-sm font-medium uppercase tracking-wide">
            Tips
          </span>
        </button>
        <button
          onClick={handleExampleBtn}
          className="flex items-center rounded-xl bg-black/5 px-2 py-0.5 opacity-70 transition-all hover:bg-black/10 hover:opacity-95 dark:bg-white/10 dark:hover:bg-white/10"
        >
          <Lightbulb size={16} />
          <span className="ml-1 text-sm font-medium uppercase tracking-wide">
            Example
          </span>
        </button>
      </div>
      <div
        onClick={toggleOpen}
        className={`relative mb-2 overflow-y-auto overflow-x-hidden rounded-lg border border-opacity-70 bg-gray-100/70 px-2 py-1 opacity-80 transition-all hover:opacity-95 dark:bg-white/5 ${
          open ? "max-h-64" : "max-h-24 sm:max-h-14"
        }`}
      >
        {showTips ? (
          <p className="text-sm">
            Pick words and phrases that describe you. The more you add, the
            better! Try answering these questions in just a word or two:{" "}
            {questions.join(" ")}
          </p>
        ) : (
          <p className="text-sm">
            Dad, Husband, Activist, Photographer, Producer, NYU alum,
            Motorcyclist, Basketball player, Buddhist, Agnostic, Canadian,
            Toronto, NYC, Harry Potter fan, Guitarist, Greenhouse Farmer,
            Citizen of the World, Humanist, Comedian, Goofy, Minimalist,
            Meditator, Wisdom seeker, Insight Meditation, Creativity,
            Playfulness, Humor, Open-mindedness, Curiosity, The Super Improv
            Society, Philharmonic Orchestra, New Denington Soccer Club, St
            Andrews Baptist Church, Against Malaria Foundation, Benjamin&apos;s
            Breakfast Club, Books, Reader, Autodidact, Dog Dad, ENFP, Community
            Councilman, Amateur Chef, Cooking, Baking, Storyteller, Rock
            Climber, Hiker, Explorer, Adventurer, Electrical Engineer, Movie
            Buff, Nearly Tolerable Karaoke Singer
          </p>
        )}
      </div>
      <textarea
        name="tags"
        id="tags-input"
        placeholder="Tags"
        required
        maxLength={960}
        minLength={2}
        rows={4}
        className="block w-full resize-none rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
        value={tagsStr}
        onChange={handleChange}
      />
      <p className="mb-4 text-sm opacity-80">Separate tags with a comma.</p>
      <TagChips tagsStr={tagsStr} />
    </fieldset>
  );
}
