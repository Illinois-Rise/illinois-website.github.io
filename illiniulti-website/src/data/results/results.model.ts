export interface Result {
  [key: string]: string | number; //allows Typescript to index this object based on a string, used for DisplayTable
  year: number;
  sectionals: string;
  regionals: string;
  nationals: string;
  teamPageLabel: string;
  teamPageLink: string;
}
