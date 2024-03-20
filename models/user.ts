export enum Sex {
  MALE = "male",
  FEMALE = "female",
}

export interface IUser {
    name: string,
    age: number,
    sex: Sex,
}