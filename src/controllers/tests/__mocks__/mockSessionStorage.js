const mockSessionStorage = () => {
  const store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value;
    },
  };
};

export default mockSessionStorage;
