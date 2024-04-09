"use client";

import { useState } from "react";
import KeywordSelector from "./keywordSelector";
import Microphone from "./microphone";

export default function Home() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [soundType, setSoundType] = useState("words");

  const onKeywordChanged = (keywords: string[]) => {
    setKeywords(keywords);
  };

  const onSoundTypeChanged = (soundType: string) => {
    setSoundType(soundType);
  };

  return (
    <div className="h-screen py-4 px-6">
      <main className="h-full flex flex-col">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Chatter</h2>
          <h3>What keywords do you want to listen for?</h3>
          <p className="py-4">
            <KeywordSelector
              onKeywordsChanged={onKeywordChanged}
              soundType={soundType}
              keywords={keywords}
              onSoundTypeChanged={onSoundTypeChanged}
            />
          </p>
        </div>
        <div className="flex flex-col justify-center grow">
          <Microphone keywords={keywords} />
        </div>
      </main>
    </div>
  );
}
