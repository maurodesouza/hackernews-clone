<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Hackernews Clone" />
</div>

<h1 align="center">Hackernews Clone</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/maurodesouza/hackernews-clone?color=ff6600">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/maurodesouza/hackernews-clone?color=ff6600">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/maurodesouza/hackernews-clone?color=ff6600">

  <img alt="License" src="https://img.shields.io/github/license/maurodesouza/hackernews-clone?color=ff6600">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/maurodesouza/hackernews-clone?color=ff6600" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/maurodesouza/hackernews-clone?color=ff6600" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/maurodesouza/hackernews-clone?color=ff6600" /> -->
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/maurodesouza" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is an introduction project to [graphql](https://graphql.org), where various concepts are covered, such as queries, mutations, and what I found most incredible, the realtime updates.

<br>

<div align="center"> 
  <img src="./.github/realtime-updates.gif" alt="Hackernews Clone" />
</div>

<br>

The project is a simple clone of [Hackernews](https://news.ycombinator.com/), where was makes both the serverside and the clientside.

I found the project on this [site here](https://www.howtographql.com/).

## :sparkles: Features ##

:heavy_check_mark: Display a list of links;\
:heavy_check_mark: Search the list of links;\
:heavy_check_mark: Users can authenticate;\
:heavy_check_mark: Authenticated users can create new links;\
:heavy_check_mark: Authenticated users can upvote links (one vote per link and user);\
:heavy_check_mark: Realtime updates when other users upvote a link or create a new one;

## :rocket: Technologies ##

The following tools were used in this project:

### Server

- [Node.js](https://nodejs.org/en/)
- [Graphql Yoga](https://github.com/prisma-labs/graphql-yoga)
- [Prisma](https://www.prisma.io)

### Web

- [React](https://pt-br.reactjs.org/)
- [Graphql](https://graphql.org)
- [Apollo](https://www.apollographql.com)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/maurodesouza/hackernews-clone

# Access
cd hackernews-clone

```

```bash
# Access the server dir
$ cd server

# Install dependencies
$ yarn

# Run the server
$ yarn start

# The server will initialize in the <http://localhost:4000>
```
```bash
# Open a new terminal

# Access the web dir
$ cd web

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The app will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

&#xa0;

Made with :heart: by <a href="https://github.com/maurodesouza" target="_blank">Mauro de Souza</a>

<a href="#top">Back to top</a>
