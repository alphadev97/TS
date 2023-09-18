import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMCQ = (
  meaning: {
    Text: string;
  }[],
  idx: number
): string[] => {
  const correctAns: string = meaning[idx].Text;

  const allMeaningExceptForCorrect = meaning.filter(
    (i) => i.Text !== correctAns
  );

  const incorrectOption: string[] = _.sampleSize(
    allMeaningExceptForCorrect,
    3
  ).map((i) => i.Text);

  const mcsQptions = _.shuffle([...incorrectOption, correctAns]);

  return mcsQptions;
};

export const translateWords = async (params: LangType): Promise<WordType[]> => {
  try {
    const words = generate(8).map((i) => ({
      Text: i,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "340b644fa8msha4b183696f3661bp1e3ca4jsndfc8eb7d25df",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const recieve: FetchedDataType[] = response.data;

    const arr: WordType[] = recieve.map((i, index) => {
      const options: string[] = generateMCQ(words, index);
      return {
        word: i.translations[0].text,
        meaning: words[index].Text,
        options,
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Error while requesting API");
  }
};

export const countMatchingElements = (
  arr1: string[],
  arr2: string[]
): number => {
  if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");

  let matchedCount = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) matchedCount++;
  }

  return matchedCount;
};

export const fetchAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  const encodedParams = new URLSearchParams({
    src: text,

    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
  });

  if (language === "ar") encodedParams.set("hl", "ar-sa");
  else if (language === "es") encodedParams.set("hl", "es-es");

  const {} = await axios.post(
    "https://voicerss-text-to-speech.p.rapidapi.com/",
    encodedParams,
    {
      params: { key: "5acfbbd6141a43129a6ae3765501d578" },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "340b644fa8msha4b183696f3661bp1e3ca4jsndfc8eb7d25df",
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    }
  );

  return "";
};
