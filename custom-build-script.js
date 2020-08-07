const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  
  const teamFiles = [
    './dist/football-club/team/runtime.js',
    './dist/football-club/team/main.js'
  ]
  await concat(teamFiles, './dist/football-club/team/main.js');

  const playersFiles = [
    './dist/football-club/players/runtime.js',
    './dist/football-club/players/main.js'
  ]
  await concat(playersFiles, './dist/football-club/players/main.js');

  const newsFiles = [
    './dist/football-club/news/runtime.js',
    './dist/football-club/news/main.js'
  ]
  await concat(newsFiles, './dist/football-club/news/main.js');

})()