const timer = timeInMilisec => {
  const min = Math.floor(Math.floor(timeInMilisec / 1000) / 60);
  const sec = Math.floor(timeInMilisec / 1000) - min * 60;
  const milisec = Math.floor((timeInMilisec - sec * 1000 - min * 60 * 1000) / 10);
  return `${min.toString().padStart(2, '0')}:${sec
    .toString()
    .padStart(2, '0')}:${milisec.toString().padStart(2, '0')}`;
};

export default timer;
