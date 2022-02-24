export interface TSurvey {
  idSurvey: number;
  title: string;
  idSurveyStatus: number;
  publicTitle: string;
  publicDescription: string;
  consclusionDescription: string;
  createDate: string;
  active: 0 | 1;
  totalQuestions?: number;
}
