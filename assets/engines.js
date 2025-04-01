export const engines = [
  {
    hostname: "https://google.com",
    endpoint: "https://www.google.com/search?q=",
    trigger: "-gg",
    name: "Google",
  },
  {
    hostname: "https://youtube.com",
    endpoint: "https://www.youtube.com/results?search_query=",
    trigger: "-yt",
    name: "YouTube",
  },

  {
    hostname: "https://github.com",
    endpoint: "https://github.com/search?q=",
    trigger: "-gh",
    name: "GitHub",
  },

  {
    hostname: "https://skroutz.gr",
    endpoint: "https://www.skroutz.gr/search?keyphrase=",
    trigger: "-sk",
    name: "Skroutz",
  },
];

export const getEngines = async () => {
  const data = localStorage.getItem("searchEngines");
  return data ? JSON.parse(data) : [];
};

export const saveEngines = async (engines) => {
  localStorage.setItem("searchEngines", JSON.stringify(engines));
};

if (!localStorage.getItem("searchEngines")) {
  saveEngines(engines);
}

export const getCurrentEngine = async () => {
  return localStorage.getItem("currEngine") || "Google";
};

export const setCurrentEngine = async (engineName) => {
  localStorage.setItem("currEngine", engineName);
};