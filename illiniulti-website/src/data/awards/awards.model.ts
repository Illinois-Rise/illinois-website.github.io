export interface Award {
  [key: string]: string | number; //allows Typescript to index this object based on a string, used for DisplayTable
  year: number;
  name: string;
  award: string;
}
