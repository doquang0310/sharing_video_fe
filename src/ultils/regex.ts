export const validateYoutubeLink = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length == 11) {
    return true;
  }
  return false;
};

export const validateEmail = (email: string) => {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regExp.test(email);
};
