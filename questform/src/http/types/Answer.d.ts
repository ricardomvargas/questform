export interface TAnswer {
  idAnswer: number;
  idQuestion: number;
  idTypeAnswer: number;
  minChar?: number;
  maxChar?: number;
  singleOptionTemplate?: number;
  active: 0 | 1;
}
