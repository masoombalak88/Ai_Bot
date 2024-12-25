import { dare_string, truth_string } from "../../Chiku/utils";


export function getRandomDare(): string {
  const randomIndex = Math.floor(Math.random() * dare_string.length);
  return dare_string[randomIndex];
}


export function getRandomTruth(): string {
  const randomIndex = Math.floor(Math.random() * truth_string.length);
  return truth_string[randomIndex];
}
