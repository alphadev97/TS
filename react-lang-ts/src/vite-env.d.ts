/// <reference types="vite/client" />

type LangType = "js" | "ur" | "ar" | "es" | "fr";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateType {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
}
