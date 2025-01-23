const removeCookie = (name: string) => {
  document.cookie = name + "=; Max-Age=0; path=/";
};

export default removeCookie;