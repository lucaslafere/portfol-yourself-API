# <p align = "center"> Portfol-Yourself </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucaslafere-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lucaslafere/portfol-yourself-front?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Have you ever wanted to build a simple website to show your portfolio, but didn't want to mess with WordPress as it can be complicated to use at times?

Or maybe you're a web dev, and you've always got these relatives and friends asking you for just "a little hand" on some "simple landing pages"? 

We got you! With Portfol-Yourself, anyone can build their own portfolio, for free, with just a few button clicks. No messy interfaces, no over-complicated stuff. Just create your account, portfolio, and pick different layouts from a set of pre-build layout designs, with different sizes and styles to pick from. Completely no-code, user-friendly.

***

## :computer:	 Technologies and Concepts

- REST APIs
- JWTs
- Node.js
- TypeScript
- PostgreSQL
- Layered architecture
- Sensitive data encrypting

***

## 🏁 Running the app

Make sure you've got the latest stable version of both [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

You will also need [PostgreSQL](https://www.postgresql.org/download/) running locally if you plan on using your own DB.

For easier testing, you can just try out the latest deployed version by clicking [here](https://portfol-yourself-front.vercel.app). If you want to test it locally, keep reading:

First, clone this repository in your machine: 

```
git clone https://github.com/lucaslafere/portfol-yourself-API
```

Then, inside the cloned folder, run the following command to install the dependencies:

```
npm install
```

After that, you will need to create a .env file that follows the .env.example in the project's root folder (the same folder as the .env.example)

When finished, just start the server, using the following command:
```
npm run dev
```

:stop_sign: Don't forget to follow the steps mentioned above with the front-end [repository](https://github.com/lucaslafere/portfol-yourself-front.git), which contains the application's interface, so you can fully test this project.