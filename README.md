# StoreUi Library
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code lint
The linting process for the code has been implemented using Prettier code formater

## Build

Run `ng build product-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## steps
1. install dependencies: "npm i"
2. generate library tgz "npm run lib-package"
    2.1. Add generated library to root project: "product-lib": "file:dist/product-lib/product-lib-0.0.1-local.tgz",
3. Install local dependency "npm i"
4. ng serve

## Aditional dependencies used
1. ng-bootstrap
1.1. "@ng-bootstrap/ng-bootstrap": "^14.2.0"
1.2. "bootstrap": "^5.2.3"
2. ngrx
2.1. "@ngrx/effects": "^15.0.0"
2.2. "@ngrx/entity": "^15.0.0"
2.3. "@ngrx/store": "^15.0.0"
2.4. "@ngrx/store-devtools": "^15.0.0"

## Versions used
1. Node -> v16.17.1
2. Angular -> 15.2.11
3. Npm -> 8.15.0