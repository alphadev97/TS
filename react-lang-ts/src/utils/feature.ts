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
