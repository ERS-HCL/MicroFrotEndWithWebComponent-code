# Designing Micro Frontend with Web Components

Micro frontend extends the concepts of micro services to the frontend world. The term “Micro Frontends” has been a buzzword for breaking up growing front-end code into easy-to-maintain parts. Microfrontend is an architectural approach where frontend is divided into its multiple functions or parts. These parts are implemented and deployed by independent teams. This increases the testability, reusability and offers the possibility to select different technologies for each micro frontend.

## Overview

<p align="center">
    <img  alt="Designing Micro Frontend with Web Components" src="https://miro.medium.com/max/700/1*YLxB8FegnN_U0MuFl5AEjQ.jpeg" class="img-responsive">
</p>

## Demo

Click here to see the demo [Designing Micro Frontend with Web Components](https://sathyaleo08.github.io/MicroFrotEndWithWebComponent/)

## Development server

To build host page and Micro Frontends. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
```
> npm run build
```

To start the server and run the build
```
> npm run start
```

To build the host page alone
```
> npm run build:football-club
```

To build anyone of the Microfrontend build them separately. 
```
> npm run build:team
```

To run anyone of the Microfrontend separately. 
```
> ng serve team --port=4300 --open
```

## Code scaffolding

To generate a separate sub-project OR repo. 
```
> ng g application team --inlineStyle=true --inlineTemplate=true --prefix=team  --style=scss
```

To generate a component inside the sub-project OR repo with prefix. 
```
> ng g application team --inlineStyle=true --inlineTemplate=true --prefix=team  --style=scss
```

## Read More
To know more about the approach and usage, [check the blog](https://medium.com/@sathyaleo08/designing-micro-frontend-with-web-components-830a50f6c7fa).

## License

MIT
