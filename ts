const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"]
};

console.log(profile);

const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only"
};

console.log(userRoles);



-------------------------------------------------------------------------------------------------------

function greet(name: string, greeting?: string) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

---------------------------------------------------------------------------------------------------------

function square(num: number) {
  return num * num;
}

const result = square(5);

console.log(result);

function getAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

const avgResult = getAverage([2, 14, 26, 8]);

console.log(avgResult);

function raiseTo(base: number, exponent?: number): number {
if(exponent){
  return base**exponent;
}  
  
  return base ** 2;

}

const raisedResult = raiseTo(3);
console.log(raisedResult);










