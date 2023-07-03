const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};

const getAge = function(yearOfBirth, yearOfDeath) {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear()
  };
  return yearOfDeath - yearOfBirth
};

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
