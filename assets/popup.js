import { engines, getEngines, saveEngines } from "./engines.js";

const searcher = document.querySelector("input");
const engineIc = document.getElementById("icon");

engineIc.style.setProperty("background-image", `url(${loadEngineIcon()})`);

/** This function returns a favicon
 *     URL of each search engine to
 *        avoid copyright issues
 *
 * @returns string
 */
function loadEngineIcon() {
  const domain = "https://google.gr";

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${64}`;
}
