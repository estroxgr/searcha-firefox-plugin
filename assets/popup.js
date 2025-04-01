import { engines, getEngines, getCurrentEngine, setCurrentEngine } from "./engines.js";

const searcher = document.querySelector("input");
const engineIc = document.getElementById("icon");

/** This function returns a favicon
 *     URL of each search engine to
 *        avoid copyright issues
 *
 * @returns string
 */

const loadEngineIcon = async () => {
  const currentEngine = await getCurrentEngine();
  const found = engines.find((engine) => engine.name.toLowerCase() === currentEngine.toLowerCase());
  const domain = found ? found.hostname : "https://google.com";
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
};


// update engine icon
const updateEngineIcon = async () => {
  engineIc.style.setProperty("background-image", `url(${await loadEngineIcon()})`);
};

searcher.addEventListener("keyup", async () => {
  const searchValue = searcher.value.trim().toLowerCase();

  // find engine by trigger key
  const availableEngines = await getEngines();
  const found = availableEngines.find((engine) => engine.trigger === searchValue);

  if (found) {
    await setCurrentEngine(found.name);
    await updateEngineIcon();
    alert(`Engine set to: ${found.name}`);
  }
});

// if selected engine and press ENTER
searcher.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const searchValue = searcher.value.trim().toLowerCase();
    const currentEngineName = await getCurrentEngine();
    const currentEngine = engines.find((engine) => engine.name === currentEngineName);

    if (currentEngine) {
      const url = `${currentEngine.endpoint}${encodeURIComponent(searchValue)}`;
      window.open(url, "_blank"); 
    } 
  }
});

updateEngineIcon();