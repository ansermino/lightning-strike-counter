# Lightning Strike Counter

This is a simple React component which times the load time of a page and displays it in the unit 'lightning strikes'.

There are on average 44 lightning strikes per second [[Wikipedia](https://en.wikipedia.org/wiki/Distribution_of_lightning)], so a page that takes 100milliseconds to load will be scored as 4 lightning strikes (rounded to the nearest integer).

This repo has everything necessary to demo the component. If you wish to just use the component inside an existing application all you will need is the `LightningCounter.js` file and the `font-awesome` dependency.
