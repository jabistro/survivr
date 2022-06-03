<h1 align="center">🌴🌊📸 survivr</h1>

<h3 align="center">A sleek image display app for Survivor faithfuls.</h3>

<p align="center">survivr's core functionality includes albums and images.
 With survivr's smooth user experience, it is best place to store and view snapshots of your favorite Survivor moments.</p>


<p align="center"><a  href="https://john-allan-survivr.herokuapp.com/">survivr Live Demo</a></p>

## survivr at a Glance

survivr is a full stack application that allows users to upload and store images from their favorite show, Survivor! Users are require to sign up for an account to use any of the service.

### Getting started
1. Clone this repository
```
git clone https://github.com/jabistro/survivr
```
2. Install dependencies
```
npm install
```
3. Create a .env file based on the example with proper settings for your development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your .env file
5. Migrate and seed your database
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
6. Run `npm start` in folder "backend", then run `npm start` in folder "frontend"
7. Get to surfing!


### Application Architecture
survivr is built on a React/Redux frontend and an Express backend, while using PostgresSQL as a database.

#### Techonologies Used
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com/)
* [PostgresSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [Express.js](https://expressjs.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Conclusion and Next Steps
The next step for survivr is to broaden the functionality of comments, likes, and tags.

### Contact
<a href="https://www.linkedin.com/in/john-allan-hinds-2aba11237/">Linkedin</a> | <a href="https://github.com/jabistro">Github</a> |
<a href="https://github.com/jabistro/survivr/wiki">Git Wiki for survivr</a>
