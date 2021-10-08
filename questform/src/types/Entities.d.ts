declare namespace Entities {
  interface Survey {
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

  interface SurveyStatus {
    idSurveyStatus: number;
    description: string;
  }

  interface SurveyPublish {
    idSurveyPublish: number;
    idSurvey: number;
    startDate: string;
    finishDate: string;
    active: 0 | 1;
  }

  interface Question {
    idQuestion: number;
    idSurvey: number;
    description: string;
    active: 0 | 1;
  }

  interface Answer {
    idAnswer: number;
    idQuestion: number;
    idTypeAnswer: number;
    minChar?: number;
    maxChar?: number;
    singleOptionTemplate?: number;
    active: 0 | 1;
  }

  interface OptionAnswer {
    idOptionAnswer: number;
    idAnswer: number;
    description: string;
  }

  interface TypeAnswer {
    idTypeAnswer: number;
    description: string;
  }

  interface Person {
    idPerson: number;
    fullName: string;
    email: string;
    dateOfBirth: string;
    address: string;
    gender: string;
    active: 0 | 1;
  }

  interface PersonInterview {
    idPersonInterview: number;
    idPerson: number;
    idSurvey: number;
  }

  interface PersonAnswer {
    idPersonAnswer: number;
    idPersonInterview: number;
    idQuestion: number;
    idAnswer: number;
    idOptionAnswer: number;
    textAnswer: string;
  }

  interface ServerResponseList {
    total: number;
    list: Array;
  }
}
