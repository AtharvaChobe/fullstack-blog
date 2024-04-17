"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi! my name is Hrushikesh Dongre`;

export function Hero() {
  return <TextGenerateEffect words={words} />;
}
