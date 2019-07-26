# greeed
gReëed. A simple and customizable responsive #CSS grid. No pretentions, just for fun

<a href="https://www.mamutlove.com/projects/greeed/" title="See the demo" target="_blank">Demo</a>

# Getting to know
&bull; This grid is mobile first and perfectly useful for your RWD projects.

&bull; All the columns must be place in a row. This element must have a "g" class because supplies a clearfix to manage the float columns inside itself.

&bull; The elements inside the columns with the class "m" are not neccesary when building the grid.

&bull; All the classes which start with "demo__" are totally unnecessary. I used them only for demonstration purposes. So the "_demo.scss" file is totally avoidable. It's up to you.

&bull; All the &lt;div class="c-*"&gt; has full width (100%) until the first breakpoint ("480px" by default).

&bull; The class "c-1-2--fixed" is an extra bonus. It is intended to split a row in 2 equal columns. Basing on my experience there is no scenario where you need to split a row in 4, 6 or more columns when the screen is lower than 480px.

&bull; From 480px the "c-*" classes gets in action.

&bull; Built with SASS (SCSS syntax) then some options are customizable: 
<ul>
  <li>wrapper width</li>
  <li>grid and column paddings</li>
  <li>breakpoints</li>
  <li>colors</li>
  <li>fonts</li>
</ul>

# Gettting started
&bull; Download or fork the repository.

&bull; Run NPM in order to install the dependecies.

&bull; Run GULP.

&bull; Customize or change the SCSS files.

# Classes
&bull; "w" class is for "wrapper".

&bull; "g" class is for "grid".

&bull; "m" class is for "module".

&bull; "c" class is for "column".

&bull; "g-pad" class adds a padding to the grid element.

# Credits
&bull; This grid has been inspired in a lot of resources all along the wide web; CSS frameworks, tutorials and my own experience. Thanks to all, you are great folks!

&bull; Feel free to download, modify, break, use or destroy this grid.
