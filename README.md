## P5 Website Performance Optimization portfolio project

### Getting started

1. ## Setup locally (from original README)

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  or for Pyton 3
   $> cd /path/to/your-project-folder
  $> python -m http.server 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

####Part 1: Optimize PageSpeed Insights score for index.html
1. used inline css and the 'async' tags for uneccessary blocking css files
1. separated css files such as 'print/css' and 'portrait.css' as they are only used in select cases


####Part 2: Optimize Frames per Second in pizza.html

1. number of sliding pizzas now based off of frame height
1. replaced document.querySelectorAll() with faster document.getElementsByClassName()
1. updated changePizzaSizes to mitigate forced Layouts caused by recalulation in for loop for EVERY pizza element