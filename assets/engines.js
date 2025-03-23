// engines.js
export const engines = [
    {
      hostname: "https://google.gr",
      name: "Google",
    },
    {
      hostname: "https://youtube.com",
      name: "YouTube",
    },
  ];
  
  // Συνάρτηση ανάκτησης όλων των μηχανών από το localStorage
  export const getEngines = () => {
    const data = localStorage.getItem("searchEngines");
    return data ? JSON.parse(data) : [];
  };
  
  // Αποθήκευση των μηχανών αναζήτησης στο localStorage
  export const saveEngines = (engines) => {
    localStorage.setItem("searchEngines", JSON.stringify(engines));
  };
  
  // Αν δεν υπάρχουν στο localStorage, αποθήκευσέ τις
  if (!localStorage.getItem("searchEngines")) {
    saveEngines(engines);
  }
  