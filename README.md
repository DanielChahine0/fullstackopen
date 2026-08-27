# Full Stack Open

My solutions to the exercises of [Full Stack Open](https://fullstackopen.com/en/), the University of Helsinki's course on modern JavaScript-based web development.
The course covers React, Redux, Node.js, MongoDB, GraphQL and TypeScript.
Its main focus is building single page applications with React that use REST APIs built with Node.js.

## Repository structure

Each part of the course has its own folder named after the part, for example `part1/`.
Inside a part, every app built for the exercises has its own folder, for example `part1/courseinfo/`.
Each app is a self-contained npm project with its own `package.json`.

## Progress

| Part | Topic | Folder | Status |
| ---- | ----- | ------ | ------ |
| [Part 0](https://fullstackopen.com/en/part0) | Fundamentals of Web apps | `part0/` | Not started |
| [Part 1](https://fullstackopen.com/en/part1) | Introduction to React | `part1/` | Not started |
| [Part 2](https://fullstackopen.com/en/part2) | Communicating with server | `part2/` | Not started |
| [Part 3](https://fullstackopen.com/en/part3) | Programming a server with NodeJS and Express | `part3/` | Not started |
| [Part 4](https://fullstackopen.com/en/part4) | Testing Express servers, user administration | `part4/` | Not started |
| [Part 5](https://fullstackopen.com/en/part5) | Testing React apps, React Router | `part5/` | Not started |
| [Part 6](https://fullstackopen.com/en/part6) | Advanced state management | `part6/` | Not started |
| [Part 7](https://fullstackopen.com/en/part7) | Custom hooks, esbuild | `part7/` | Not started |
| [Part 8](https://fullstackopen.com/en/part8) | GraphQL | `part8/` | Not started |
| [Part 9](https://fullstackopen.com/en/part9) | TypeScript | `part9/` | Not started |
| [Part 10](https://fullstackopen.com/en/part10) | React Native | `part10/` | Not started |
| [Part 11](https://fullstackopen.com/en/part11) | CI/CD | `part11/` | Not started |
| [Part 12](https://fullstackopen.com/en/part12) | Containers | `part12/` | Not started |
| [Part 13](https://fullstackopen.com/en/part13) | Using relational databases | `part13/` | Not started |
| [Part 14](https://fullstackopen.com/en/part14) | Next.JS | `part14/` | Not started |

Status is one of `Not started`, `In progress` or `Done`.

## Running an app

Every app is a separate npm project, so install and run it from its own folder.

```sh
cd part1/<app>
npm install
npm run dev
```

Backend apps from part 3 onwards read their configuration from a `.env` file, for example `MONGODB_URI` and `PORT`.
`.env` files are ignored by git, so create them locally.

## Course

Full Stack Open is offered by the [University of Helsinki](https://www.helsinki.fi/en) together with its partner companies.
The course material is written by Matti Luukkainen and others and is licensed under [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/).
The code in this repository is my own work on the course exercises.
