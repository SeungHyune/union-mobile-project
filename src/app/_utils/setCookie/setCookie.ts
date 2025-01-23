const setCookie = (name: string, loginId: string, days: number = 7) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (loginId || "") + expires + "; path=/";
};

export default setCookie;
