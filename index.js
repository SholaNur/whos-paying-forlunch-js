let names = ["Mahmut", "Ben", "Ahmet", "John", "Huseyn"];

function whosPaying(names) {
  let numberOfPeople = names.length;
  let rendomPerson = Math.floor(Math.random() * numberOfPeople);
  let rendomPersonGen = names[rendomPerson];

  return rendomPersonGen + " is going to buy lunch today! Yesss!";
}
whosPaying(names);
