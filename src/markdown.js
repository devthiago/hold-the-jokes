import Showdown from "showdown";

export const mdToHtml = text => {
  const converter = new Showdown.Converter();
  return converter.makeHtml(text);
};
