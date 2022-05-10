# eBay Kleinanzeigen frontend coding challenge

Congratulations! You made it to the eBay Kleinanzeigen remote frontend coding challenge. Here, we want to get a taste of your hands-on coding skills.

## Introduction

There are three required tasks that should be solved. You can adapt everything, add libraries, layers and other tools if this makes your life easier.

Before you start, keep in mind that you can skip parts of the challenge if you are stuck. If you have anything to comment then feel free to add comments at certain places. You can also add comments at the end of this file about general things, problems and remarks. If the time is short, it's also useful to describe quickly what you would have done in a required task that was not completely implemented.


After **3 hours** you have to upload the result as .zip file to a public file hoster like <https://filebin.net/>. You have 3 hours to solve the challenge. 
No need to be hyper-punctual (e.g. 10 minutes earlier or sooner won't make a difference).

Coding guidance:

- Try to stick to the proposed time per exercise (30m for task 1, 45m for task 2, 90m for task 3). We are more interested in your solution process and your choices and less in a perfectly built application.
- Combine "clean code" with "working software",
- Apply basic architecture principles in your frontend application,
- Usability and the basic design should be state of the art. The usage of component frameworks is allowed but not mandatory.
- Old browser support is nice to have but not necessary
- We appreciate any kind of tests to ensure requirements are fulfilled

## Preparation / Setup

1. Make sure that the following is installed and ready to be used:

  - Node.js >= 12
  - Your preferred IDE/editor

2. Make sure that our example frontend application works. Your frontend application should listen on port 3000.

You can start our example react app by executing:

```
cd 3_marketplace_app/client
npm install
npm start
```

Your frontend runs if you get a valid response from <http://localhost:3000/>.

## Tasks 

### Reading and warm up (~ 15 min )

### 1. Refactor the fake data generator (~ 30 min)

We have a fake data generator in place that generates user data for our test systems. Luckily, there are a few tests to ensure that the basic generator is working.

Please refactor the code in the folder `1_refactoring`.

You are allowed to change everything. Focus on refactoring the code, use state of the art javascript (ECMAScript) and make sure that the feature set is exactly the same as before.

In case 30 minutes are not sufficient, please write down your next steps in the README.

### 2. Build a static web page (~45 min)

In preparation for building a simple marketplace application (task 3), your task now is to develop a static ad detail page with **handmade** **HTML5** and **CSS3**.

Put your markup and css in the folder `2_static_page`.

Your page layout should be based on the following wireframe mockup: [Detail page](mockups/detail-page.png) 

You don't need to code the given mockup pixel perfect. We would love to see some "eBay Kleinanzeigen look and feel". 

Focus on semantic HTML markup and state of the art CSS. The page should be responsive and support both, desktop and mobile devices but it's not necessary to support old browsers.

In case 45 minutes are not sufficient, please write down your next steps in the README.

### 3. Basic marketplace application (~90 min)

Take a look at our website [www.ebay-kleinanzeigen.de](https://www.ebay-kleinanzeigen.de).
Your task is to build a similar but very **simple** classified marketplace application, that lists ads provided by an api.   

We would love to see some modern React, JavaScript, CSS and HTML! By the way, we love clean and tested code.

In case 90 minutes are not sufficient, please write down your next steps in the README.

The folder `3_marketplace_app` contains everything you need.

#### API-design

We created a data folder that contains data about ads and users.  A fake server exposes the data as REST API. You can use it by

```ssh
  cd client
  npm run start:fake-server
```

#### React application

Implement the following user story:

- As a user, I can see ads on a listing page and if I am interested in one I can jump to it by clicking on the image or on the title.

It's completely up to you, how you design your application.

You can start our React example application by:
```ssh
  cd client
  npm run start
```

## Add your comments / remarks here:

What would you do if you had more time? Which trade-offs did you take? What architecture-layers did you create and why?

- FILL-ME 1
- FILL-ME 2

Have fun!


