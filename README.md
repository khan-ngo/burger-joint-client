[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Projet Objective
Build and test my custom API. Now that I have the API, I will need to build the front-end that will communicate to back-end via AJAX request. My applcation will help users compile a list of tasks. USers will be able to Add, complete, and delete tasks.

### My WireFrame

![p2_wireframe](https://cloud.githubusercontent.com/assets/26236941/25646484/cc5492c6-2f86-11e7-9da2-9e407dee9f7e.JPG)

#### My project client will live on GitHub

API-Repo: https://github.com/kqngo/burger-joint-api
Heroku: https://burger-joint-p2.herokuapp.com/

Client-repo: https://github.com/kqngo/burger-joint-client
Applicaiton: https://kqngo.github.io/burger-joint-client/


### Stories
As a user, I want to create a new account.
As a user, I want to log in to the application.
As a user, I want to log Out of the application.
As a user, I want to change my password.
As a user, I want to add tasks.
As a user, I want to cross out my task as I complete them.
As a user, I want to delete my task.


### Authentication
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

### SQL CRUD

**[CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete)**
_(create, read, update and delete)_, SQL, HTTP, and Rails Controller action.

| CRUD   | SQL    | HTTP   | action     |
|:-------|:-------|:-------|:-----------|
| Create | INSERT | POST   | create     |
| Read   | SELECT | GET    | index/show |
| Update | UPDATE | PATCH  | update     |
| Delete | DELETE | DELETE | destroy    |


# browser-template

I used a template for starting this front-end project. The template, downloaded from [Download], includes the following:
-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)
-   No front-end frameworks included.

## Installation

1.  [Download](../../archive/master.zip) this template.
2.  Unzip and rename the template directory.
3.  Empty [`README.md`](README.md) and fill with your own content.
4.  Move into the new project and `git init`.
5.  Install dependencies with `npm install`.

## Deploy

To deploy a browser-template based SPA, run `grunt deploy`.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
