# express template

This is the sample with express framework.

## Dependencies

1. HTTP Framework: `express`
  - Validation: `express-validator`
  - Input Parser: `body-parser`
1. Configs: `config`, which is configurations switching with environments
1. IoC: `inversify`, which is based on classes and decorators for injections.
1. ORM: `typeorm`, which is based on classes and decorators to define entities.
1. Logging: `log4js`
1. Multi-Language: `i18n`

### Development dependencies
1. babel
   - ES6
   - stage-2 (2017/07)
   - root-import
   - transform-decorator-legacy
   - autobind-decorator
   - source-map-support: source maps for stack trace built with babel
1. flow: Type checker
1. eslint: linter
1. jest: testing framework
1. pre-commit: git hooks for pre-commit
1. editorconfig: configurations for editors

### Library which is not included
This template does not include followings:
1. session
1. auth
1. CORS
1. template engine
1. email
1. cache
1. queue

## Setup a project

```
$ npm run setup
```

## Build commands
1. Start a server: `$ npm run start`
1. Build: `$ npm run build`
1. Flow check: `$ npm run flow`
1. Lint: `$ npm run lint`
1. Test: `$ npm run test`
   - watch: `$ npm run test:watch`

## The application architecture
1. Action Domain Responder
1. Domain Drive Design

### Testing codes
1. unit tests
   - only for a class and separate with
1. integration tests
   - repository test (with database)
   - url test to integrate with actions/domains/responders

## What is wanted
1. Flow types
   - The JavaScript files under flow-typed directory
1. Interface and abstract methods
   - BaseAction
   - BaseResponder
1. Assign properties on a parent class for an instance of its child class
1. Replace with inversify
   - constructor injection cannot be implemented with it on JS
   - property injection is really bad with flow/eslint.
1. Design for test data fixture
