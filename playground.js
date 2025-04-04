function solution(songs, animations) {
  let solution = [];
  let songsCopy = [];
  let animationsCopy = [];

  // Making the copies with the correct data types
  songs.forEach((song) => {
    let toAdd = song.split(":");
    toAdd[1] = Number(toAdd[1]);
    songsCopy.push(toAdd);
  });

  console.log(songsCopy);

  animations.forEach((animation) => {
    let toAdd = animation.split(":");
    toAdd[1] = Number(toAdd[1]);
    animationsCopy.push(toAdd);
  });

  console.log(animationsCopy);

  songsCopy.forEach((songSubArr) => {
    let animation = [];
    animationsCopy.forEach((animationSubArr) => {
      if (songSubArr[1] % animationSubArr[1] == 0 && animation.length == 0) {
        animation.push(animationSubArr[0], songSubArr[1] / animationSubArr[1]);
      }
    });

    console.log("Song: ", songSubArr[0]);
    console.log("Result: ", animation);

    solution.push(animation.join(":"));
  });

  console.log(solution);
  return solution;
}
