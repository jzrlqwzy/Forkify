# <a href="https://forkify-lei.netlify.app" target="_blank">Omnifood</a>

### Project Introduction

Forkify is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.

### Technologies used

1. HTML5
2. SCSS/CSS3
3. JavaScript

### External libraries and APIs

- Parcel
- Sass
- [Forkify-API](https://forkify-api.herokuapp.com/v2)

### Features

- Query an ingredient to recieve a list of recipes containing that ingredient.

![Feat1](README.assets/Fun-1.gif)

- Change the servings size to alter the needed ingreident count proportionally.

![Feat2](README.assets/fun-2.gif)

- Easily bookmark or unbookmard the selected recipe.

![Feat3](README.assets/fuc-3.gif)

- Create your own recipes and store them as user recipes(use a special icon).

![fFeat4](README.assets/func-4.gif)

- LocalStorage keeps the data when users exit the app.

![Feat5](README.assets/fuc-5.gif)

### Project Architecture

![Flowchart](forkify-flowchart-part-3.png)

Built using the MVC Architecture. View class extends the rest of the components. Controller keeps bidirectional dataflow. Model makes http requests.
