//Objects in ts
//this is not the right way to write... it only works for one object... if there is many we have to use type alise
const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Kanishk",
  age: 22,
  isStudent: true,
  address: {
    city: "bhopal",
    country: "India",
  },
};

// using type alise (jab bhot sare obj ho)
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
};

const person1: Person = {
  name: "Kanishk",
  age: 22,
  isStudent: true,
  address: {
    city: "bhopal",
    country: "India",
  },
};

const person2: Person = {
  name: "Kanishk",
  age: 22,
  isStudent: true,
  address: {
    city: "bhopal",
    country: "India",
  },
};

const person3: Person = {
  name: "Kanishk",
  age: 22,
  isStudent: true,
  address: {
    city: "bhopal",
    country: "India",
  },
};
