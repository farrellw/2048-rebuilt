# 256! A 2048 Clone.

## Learning Competencies

* Build a JavaScript interface independent of a backend.
* Build a complex JS model independent of the interface.
* Integrate the JS model with the HTML interface.
* Use the Mousetrap.js library to bind keyboard events.

## Summary

Dev Bootcamp 1 day project.  Built a complex JS model into separate Model View Controller Structure.  Had a lot of fun while doing it.

## Releases

### Release 0: Create a barebones model object with an appropriate data structure

In `game.js` create a Game model to store the state of our game. Use JavaScript's optional parameters so that we can call the constructor function in two ways:

`game = new Game() // generates a random starting board`

`game = new Game('0000202000000000') // generates a board with the given start`

The latter will come in handy for testing, which you will certainly want to do for this project given the tricky game rules.

