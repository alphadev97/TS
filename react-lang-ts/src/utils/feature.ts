import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (params: LangType) => {
  try {
    const words = generate(8);

    axios.post(
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
  } catch (error) {}
};
