const myList = (obj) => {
  const theList = document.querySelector('.table');
  const players = obj.result;
  theList.innerHTML = '';

  players.forEach((playerData) => {
    const usersGroup = document.createElement('div');
    const user = document.createElement('h5');
    const score = document.createElement('span');

    usersGroup.classList.add('player');

    user.textContent = `${playerData.user}:`;
    score.textContent = `${playerData.score}`;

    usersGroup.appendChild(user);
    usersGroup.appendChild(score);
    theList.appendChild(usersGroup);
  });
};

export default myList;