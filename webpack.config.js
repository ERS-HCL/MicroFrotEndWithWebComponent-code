const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
      // TypeScript-Kompilierung + AOT

const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
      // Build Optimizer

const path = require('path');
const webpack = require('webpack');

const team = {
  entry: './projects/team/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader',  options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/
      
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [
    
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/team/tsconfig.app.json',
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      entryModule: path.resolve(__dirname, './projects/team/src/app/app.module#AppModule' )
    }),
    
    new PurifyPlugin()
    
  ],
  output: {
    path: __dirname + '/dist/football-club/team',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};

const players = {
  entry: './projects/players/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader',  options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/
      
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [

    new AotPlugin({
      skipCodeGeneration: false,
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      tsConfigPath: './projects/players/tsconfig.app.json',
      entryModule: path.resolve(__dirname, './projects/players/src/app/app.module#AppModule' )
    }),
    
    new PurifyPlugin()
    
  ],
  output: {
    path: __dirname + '/dist/football-club/players',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};

module.exports = [team, players];