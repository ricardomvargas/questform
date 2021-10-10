--CREATE DATABASE questforms;
use questforms;

CREATE USER 'quest_form_user'@'localhost' IDENTIFIED BY 'survey_pass';

GRANT ALL PRIVILEGES ON questforms.* TO 'quest_form_user'@'localhost';

FLUSH PRIVILEGES;

CREATE TABLE `survey` (
  `idSurvey` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `idSurveyStatus` int,
  `publicTitle` varchar(255),
  `publicDescription` text,
  `consclusionDescription` text,
  `createDate` datetime,
  `active` boolean
);

CREATE TABLE `surveyStatus` (
  `idSurveyStatus` int PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(15)
);

CREATE TABLE `surveyPublish` (
  `idSurveyPublish` int PRIMARY KEY AUTO_INCREMENT,
  `idSurvey` int,
  `startDate` datetime,
  `finishDate` datetime,
  `active` boolean
);

CREATE TABLE `question` (
  `idQuestion` int PRIMARY KEY AUTO_INCREMENT,
  `idSurvey` int,
  `description` text,
  `active` boolean
);

CREATE TABLE `answer` (
  `idAnswer` int PRIMARY KEY AUTO_INCREMENT,
  `idQuestion` int,
  `idTypeAnswer` int,
  `minChar` int,
  `maxChar` int,
  `singleOptionTemplate` int,
  `active` boolean
);

CREATE TABLE `optionAnswer` (
  `idOptionAnswer` int PRIMARY KEY AUTO_INCREMENT,
  `idAnswer` int,
  `description` text
);

CREATE TABLE `typeAnswer` (
  `idTypeAnswer` int PRIMARY KEY AUTO_INCREMENT,
  `description` text
);

CREATE TABLE `person` (
  `idPerson` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `email` varchar(100),
  `dateOfBirth` datetime,
  `address` varchar(255),
  `gender` varchar(10),
  `active` boolean
);

CREATE TABLE `personInterview` (
  `idPersonInterview` int PRIMARY KEY AUTO_INCREMENT,
  `idPerson` int,
  `idSurvey` int
);

CREATE TABLE `personAnswer` (
  `idPersonAnswer` int PRIMARY KEY AUTO_INCREMENT,
  `idPersonInterview` int,
  `idQuestion` int,
  `idAnswer` int,
  `idOptionAnswer` int,
  `textAnswer` text
);

ALTER TABLE `survey` ADD FOREIGN KEY (`idSurveyStatus`) REFERENCES `surveystatus` (`idSurveyStatus`);

ALTER TABLE `surveyPublish` ADD FOREIGN KEY (`idSurvey`) REFERENCES `survey` (`idSurvey`);

ALTER TABLE `question` ADD FOREIGN KEY (`idSurvey`) REFERENCES `survey` (`idSurvey`);

ALTER TABLE `answer` ADD FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`);

ALTER TABLE `answer` ADD FOREIGN KEY (`idTypeAnswer`) REFERENCES `typeAnswer` (`idTypeAnswer`);

ALTER TABLE `optionAnswer` ADD FOREIGN KEY (`idAnswer`) REFERENCES `answer` (`idAnswer`);

ALTER TABLE `personInterview` ADD FOREIGN KEY (`idPerson`) REFERENCES `person` (`idPerson`);

ALTER TABLE `personInterview` ADD FOREIGN KEY (`idSurvey`) REFERENCES `survey` (`idSurvey`);

ALTER TABLE `personAnswer` ADD FOREIGN KEY (`idPersonInterview`) REFERENCES `personInterview` (`idPersonInterview`);

ALTER TABLE `personAnswer` ADD FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`);

ALTER TABLE `personAnswer` ADD FOREIGN KEY (`idAnswer`) REFERENCES `answer` (`idAnswer`);

ALTER TABLE `personAnswer` ADD FOREIGN KEY (`idOptionAnswer`) REFERENCES `optionAnswer` (`idOptionAnswer`);

INSERT INTO `surveyStatus` (description) VALUES ('offline');

INSERT INTO `surveyStatus` (description) VALUES ('online');

INSERT INTO `surveyStatus` (description) VALUES ('publishing');

INSERT INTO `surveyStatus` (description) VALUES ('finished');

INSERT INTO `surveyStatus` (description) VALUES ('canceled');

INSERT INTO `surveyStatus` (description) VALUES ('archived');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Vestibulum orci erat', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Sed fringilla pellentesque enim at tincidunt', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Donec diam neque', '3', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Nam suscipit eros vitae nibh sodales', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Duis aliquet neque urna', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Proin ex massa', '1', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Curabitur iaculis eros purus', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Nullam pretium', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Pellentesque sit amet convallis', '4', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Mauris in enim ex', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Phasellus molestie', '1', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Mauris mattis dictum nisi ut consequat', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Suspendisse vel erat lacinia', '3', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Nullam scelerisque convallis', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Suspendisse sed ipsum aliquam', '4', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Sed ut ante finibus', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Vestibulum ullamcorper rhoncus', '1', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Sed sodales congue consequat', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Ut et leo tristique', '3', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Vivamus vel odio in diam accumsan ', '4', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Cras sit amet erat luctus', '2', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');

INSERT INTO `survey` (`title`, `idSurveyStatus`, `publicTitle`, `publicDescription`, `consclusionDescription`, `createDate`, `active`) VALUES ('Quisque vel eros', '5', 'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.', 'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;', 'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.', '2021-03-21 16:20:51.000000', '1');
