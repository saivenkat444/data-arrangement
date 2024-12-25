const peoplesData = [
  {
    name: "Rahul",
    age: 45,
    employment: { isEmployed: true, profession: "software Engineer" },
    city: "Pune",
    hobbies: [
      { hobby: "gardening", specification: [""] },
      { hobby: "game", specification: ["chess"] },
    ],
    vehicle: [{ type: "car", usage: "going for trips in the weekends" }],
    degreesOwned: ["computer science"],

    pets: [
      {
        name: "Max",
        type: "Dog",
        breed: "golden retriever",
        age: 4,
        isVaccinated: true,
        activities: ["playing fetch in the park"],
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    employment: { isEmployed: false, profession: "" },
    city: "Bangalore",
    hobbies: [
      {
        hobby: "cooking",
        specification: ["often experiments with Italian recipes"],
      },
    ],
    vehicle: [{}],
    degreesOwned: ["computer science", "graphic design"],
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        breed: "",
        age: 0,
        isVaccinated: true,
        activities: ["knows over 20 phrases", "mimics her voice"],
      },
    ],
  },

  {
    name: "Ramesh",
    age: 45,
    employment: { isEmployed: true, profession: "business Owner" },
    city: "Jaipur",
    hobbies: [
      { hobby: "gardening", specification: ["tending at rose garden"] },
      { hobby: "reading", specification: ["historical fiction"] },
    ],
    vehicle: [{}],
    degreesOwned: ["computer science", "graphic design"],
    pets: [
      {
        type: "cat",
        name: "Bella",
        breed: "Persian",
        age: 3,
        isVaccinated: true,
        activities: ["lounging in the sun"],
      },
      {
        type: "cat",
        name: "Leo",
        breed: "",
        age: 3,
        isVaccinated: true,
        activities: ["lounging in the sun"],
      },
    ],
  },

  {
    name: "Kavya",
    age: 28,
    employment: { isEmployed: false, profession: "professional dancer" },
    city: "Chennai",
    hobbies: [
      { hobby: "reading", specification: ["fantasy Novels"] },
      { hobby: "binge-watching sci-fi shows", specification: [""] },
    ],
    vehicle: [{}],
    degreesOwned: [""],
    pets: [
      {
        type: "rescue rabbit",
        name: "snowy",
        breed: "",
        age: 2,
        isVaccinated: true,
        activities: ["hopping around her backyard", "nibbling on carrots"],
      },
    ],
  },
];

// How many individuals are currently employed?
// returns the number of people who are currently employed
const giveHowManyAreEmployed = function (allData) {
  const numberOfEmployed = allData.filter(
    (person) => person.employment.isEmployed
  ).length;
  return numberOfEmployed;
};

// How many people own a car?
// returns the number of people that own a car
const giveHowManyOwnACar = function (allData) {
  const numberOfPeopleOwnCar = allData.filter((person) =>
    person.vehicle.some((vehicle) => vehicle.type === "car")
  ).length;
  return numberOfPeopleOwnCar;
};

const arePetsVaccinated = function (personData) {
  // console.log(personData);
  const petsVaccinated = personData.pet.filter(
    (petsData) => petsData.isVaccinated
  );

  return petsVaccinated.length;
};

// How many pets are fully vaccinated?
const giveHowManyPetsFullyVaccinated = function (allData) {
  const allPets = allData.map((person) => person.pets).flat();
  const numberOfPetsVaccinated = allPets.filter(
    (petDetails) => petDetails.isVaccinated
  ).length;
  return numberOfPetsVaccinated;
};

const giveNameAndTypeOfPet = function (allData) {
  // What are the names of all the pets, and what type of animal is each?
  const allPets = allData.map((person) => person.pets).flat();
  return allPets.map((petDetails) => [petDetails.name, petDetails.type]);
};

const giveCitiesTheyLiveIn = function (allData) {
  // Which cities do the individuals live in?
  const allCities = allData.map((person) => person.city).join(", ");
  return allCities;
};

const addIfNotPresent = function (hobbies, element) {
  return hobbies.includes(element) ? hobbies : hobbies.concat(element);
};

const giveHobbies = function (allData) {
  // How many hobbies are shared across the group? What are they?
  const allHobbies = allData.flatMap((person) =>
    person.hobbies.flatMap((hobbies) => hobbies.hobby)
  );
  const uniqueHobbies = allHobbies.reduce(addIfNotPresent, [allHobbies[0]]);
  return (
    "All of them together have " +
    uniqueHobbies.length +
    " And they are " +
    uniqueHobbies.join(", ")
  );
};

const giveHowManyPetsOfUnemployed = function (allData) {
  // How many pets belong to people who are currently unemployed?
  const unemployed = allData.filter((person) => !person.employment.isEmployed);
  const pets = unemployed.flatMap((person) => person.pets);
  return pets.length;
};

const giveAverageAgeOfIndividuals = function (allData) {
  // What is the average age of the individuals mentioned in the passage?
  const ages = allData.map((person) => person.age);
  const total = ages.reduce((total, age) => age + total, 0);
  return total / ages.length;
};

const givePetsAndOfCSPeople = function (allData) {
  // How many individuals have studied computer science, and how many of them have pets?
  const allCSPeople = allData.filter((people) =>
    people.degreesOwned.includes("computer science")
  );

  return allCSPeople.flatMap((people) => people.pets).length;
};

const giveNumberOfIndividualsWithMoreThanOnePet = (allData) =>
  // How many individuals own more than one pet?
  allData.filter((people) => people.pets.length > 1).length;

const givePetsWithSpecificActivities = function (allData) {
  // which pets are associated with specific favorite activities?
  const allPets = allData.map((people) => people.pets).flat();
  const petsWithActivities = allPets.filter((pet) => pet.activities.length > 0);
  return petsWithActivities.map((pet) => pet.name).join(", ");
};

const isFromChennaiOrBangalore = function (people) {
  const cities = ["Chennai", "Bangalore"];
  return cities.includes(people.city);
};

const givePetsLiveInBangaloreAndChennai = function (allData) {
  // What are the names of all animals that belong to people who live in Bangalore or Chennai?
  const peopleFromBangaloreAndChennai = allData.filter(
    isFromChennaiOrBangalore
  );
  const pets = peopleFromBangaloreAndChennai
    .map((people) => people.pets)
    .flat();
  return pets.map((pet) => pet.name).join(", ");
};

const giveHowManyVaccinatedPetsWithoutCar = function (allData) {
  // How many vaccinated pets belong to people who do not own a car?
  const peopleWithOutCar = allData.filter((people) =>
    people.vehicle.some((vehicle) => vehicle.type !== "car")
  );
  const pets = peopleWithOutCar.map((people) => people.pets).flat();
  return pets.filter((pet) => pet.isVaccinated).length;
};

const countElement = function (element) {
  return function (count, pet) {
    return pet === element ? count + 1 : count;
  };
};

const countElements = function (array) {
  return (element) => array.reduce(countElement(element), 0);
};

const getFrequency = function ([pet, count], pet, allPets) {};

const giveMostCommonPet = function (allData) {
  // What is the most common type of pet among the group?
  const allPets = allData.flatMap((person) => person.pets);
  const allTypesOfPets = allPets.map((pet) => pet.type);
  console.log(allTypesOfPets);
  return allTypesOfPets.reduce(getFrequency, ["", 0]);
};

const giveIndividualsMoreThan2Habits = function (allData) {
  return allData.filter(
    (people) => people.hobbies.flatMap((hobbies) => hobbies.hobby).length > 2
  ).length;
};

const giveLeastAge = function (leastAgeObject, petsData) {
  const age = petsData.age;
  const leastAge = leastAgeObject.age;

  return age < leastAge ? petsData : leastAgeObject;
};

const giveYoungestPet = function (allData) {
  const allPets = allData.flatMap((people) => people.pets);
  const youngAge = allPets.reduce(giveLeastAge, allPets[0]);
  return youngAge.name;
};

// const giveBooksAndPeopleThatRead = function (allData) {
//   const bookReaders = allData.filter((person) =>
//     person.hobbies.some((hobbies) => hobbies.hobby === "reading")
//   );
//   const bookTypes = bookReaders.map((person) => [
//     person.name,
//     person.hobbies.filter((hobbies) => ),
//   ]);
//   return bookTypes;
// };

const giveCitiesStartWithB = function (allData) {
  return allData
    .filter((people) => people.city[0] === "B")
    .map((people) => people.city);
};

const giveIndividualsDoesNotOwnAPet = function (allData) {
  return allData
    .filter((peoples) => peoples.pets.length === 0)
    .map((people) => people.name);
};

const giveIndividualsShareHobbyWithRamesh = function (allData) {
  const rameshHobbies = allData
    .filter((people) => people.name === "Ramesh")
    .flatMap((people) => people.hobbies.map((hobbies) => hobbies.hobby));
  const peopleWithCommonHobbies = allData.filter((people) =>
    people.hobbies
      .flatMap((hobbies) => hobbies.hobby)
      .some((hobby) => rameshHobbies.includes(hobby))
  );
  return peopleWithCommonHobbies.map((people) => people.name);
};

console.log(giveHowManyAreEmployed(peoplesData) + " are employed");
console.log(giveHowManyOwnACar(peoplesData) + " have a car");
console.log(
  giveHowManyPetsFullyVaccinated(peoplesData) + " are fully vaccinated"
);
console.log(giveNameAndTypeOfPet(peoplesData));
console.log(giveCitiesTheyLiveIn(peoplesData) + " are the cities they live in");
console.log(giveHobbies(peoplesData));
console.log(
  giveHowManyPetsOfUnemployed(peoplesData) +
    " are the number of pets of unemployed persons"
);
console.log(
  giveAverageAgeOfIndividuals(peoplesData) +
    " is the average age of the persons"
);
console.log(
  givePetsAndOfCSPeople(peoplesData) + " pets are owned by the cs people"
);
console.log(
  giveNumberOfIndividualsWithMoreThanOnePet(peoplesData) +
    " own more than one pet"
);
console.log(givePetsWithSpecificActivities(peoplesData));
console.log(
givePetsLiveInBangaloreAndChennai(peoplesData) +
  " are the pets that live in bangalore and chennai"
);
console.log(
  giveHowManyVaccinatedPetsWithoutCar(peoplesData) +
    " are vaccinated pets whose owner donot own a car"
);
console.log(giveMostCommonPet(peoplesData) + " is the most common pet");
console.log(
  giveIndividualsMoreThan2Habits(peoplesData) + " have more than two habits"
);
console.log(giveYoungestPet(peoplesData) + " is the youngest pet");
console.log(giveBooksAndPeopleThatRead(peoplesData));
console.log(
  giveCitiesStartWithB(peoplesData) + " are the cities that start with B"
);
console.log(
  giveIndividualsDoesNotOwnAPet(peoplesData) +
    " are the persons that does not own a pet"
);
console.log(
  giveIndividualsShareHobbyWithRamesh(peoplesData).join(", ") +
    " are the persons that share common hobbies with Ramesh"
);
