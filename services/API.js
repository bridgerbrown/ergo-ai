const API = {
  url: "/data/mune.json",
  fetchMenue: async () => {
    const result = await fetch(API.url);
    return await result.json();
  }
}

export default API;
