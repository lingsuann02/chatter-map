"use client";

import { ChangeEvent, useState } from "react";
import { Label } from "../components/label";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
import { Textarea } from "../components/textarea";

export default function KeywordSelector({
  soundType,
  keywords,
  onSoundTypeChanged,
  onKeywordsChanged,
}: {
  soundType: string;
  keywords: string[];
  onSoundTypeChanged: (soundType: string) => void;
  onKeywordsChanged: (keywords: string[]) => void;
}) {
  const onSoundTypeChange = (soundType: string) => {
    onSoundTypeChanged(soundType);
  };

  const onKeywordsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const sounds = e.target.value.split(",");
    onKeywordsChanged(sounds);
    onSoundTypeChanged("words");
  };

  return (
    <RadioGroup onValueChange={onSoundTypeChange}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="words" id="words" />
        <Label htmlFor="words">Words</Label>
      </div>
      {soundType === "words" && (
        <>
          <div className="pl-6">
            <p className="font-normal text-neutral-500">
              Separate words by commas to listen for multiple words
            </p>
            <Textarea className="flex" onChange={onKeywordsChange} />
          </div>
        </>
      )}
      <div className="flex items-center space-x-2 pt-5">
        <RadioGroupItem value="sounds" id="sounds" />
        <Label htmlFor="sounds">Sounds</Label>
      </div>
      {soundType === "sounds" && (
        <div className="pl-6 font-normal text-neutral-500">
          Feature coming soon!
        </div>
      )}
    </RadioGroup>
  );
}
