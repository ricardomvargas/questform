# questform
Web app for creating online survey (in development)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-application">Running The Application</a></li>
        <li><a href="#running-tests">Running Tests</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

Questform is a web application for creating online surveys, the administrator can create a survey with questions and answers for users to choose. Is possible to configure when the survey will be online, manager survey status and check surveys reports. The project is divided in 3 parts:
- questform-services: Very basic backend application written in PHP (in development / in the future I'm planning to change to a Node application)
- questform: The admin appliation written in react (in development)
- onlinesurvey: The online survey (not created yet / the name can change)

### Motivation

I'm studying many subjects of my interest and building small applications to test those things, but after a lot of small app's built, I decided to create a large application to put all these things together. So questform is an application with no commercial purpose, my intention is to create an application for testing many things that I'm studying in a  real size application.

### Built With

* [React.js] (https://reactjs.org/)
* [react-intl] (https://www.npmjs.com/package/react-intl)
* [react-router] (https://reactrouter.com/)
* [typescript] (https://www.typescriptlang.org/)
* [SASS] (https://sass-lang.com/)
* [webpack] (https://webpack.js.org/)
* [Jest] (https://jestjs.io/)
* [Cypress] (https://www.cypress.io/)
* [PHP] (https://www.php.net/)
- [MySQL] (https://www.mysql.com/)

## Getting Started

- Backend app: I recommend to use XAMPP (https://www.apachefriends.org/blog/news-article-61070.html) for publishing the PHP app and to use MySQL, is very easy installation. Just copy the questform-services and past into the XAMPP 'htdocs' folder.
- Database: With XAMPP running, just go to 'localhost/phpmyadmin/' to get access to the PHPMyAdmin where you can have access to the MySQL. Add a new database with the name 'questform', and run the scritps in the 'database' folder
- Frontend app: Navigate to the questform folder and run: npm install. After installation, just run: npm run dev to start the app (you may need configure the backend endpoints according with you server configuration, to do so just check the '/src/http/enpoints.ts' file).

### Instalation

### Running The Application

### Running Tests
