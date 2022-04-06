WELCOME! 

This is a game called 2048! 

The object of the game is to move the tiles around the game board, combining them to get a final sum of 2048 in one tile. If the board fills up with tiles and you cannot make any more moves, the game is over and you must reset. 

USER STORIES
- user can click start button to begin game
    - this will put two '2' tiles on the board in random spots
- user can use arrow keys to move tiles around the board and combine them
- user can click reset button at any time to clear the board and begin a new game with start button
- if game board fills with tiles and no moves are available a popup will show saying game over and another button to reset
- if a tile reaches 2048 a popup will show saying you have won! and another button to reset 

basic whiteboard of game board and layout
2048 whiteboard.png

PSUEDOCODE: 
- start/reset button functionality on click- start will add 2 tiles to the board through use of an add random tile function, reset will clear the game board and user must click start button again
- will research and learn arrow key functionality- i've looked into it some and it looks like i'll have to create event listeners for 'keydown' and tie them to the map of the keys, then tie that to the movement of the tiles. if i cannot get arrow key functionality down i will attempt instead to have images of arrows on the page and use on click functions instead! 
- movement of the tiles will probably need to be tied to tile positions, set to x and y on the grid gameboard, and use a slide function to move the tiles from their current position until they hit the edge of the grid?? or until they hit another tile, in which case i will need to create a function for merging tiles if they are the same value and include a function inside that to add the tiles together and return with the sum tile instead
- to make the tiles appear, i'll need to use createElement to create divs holding the tiles and create a function to insert said tiles after every movement and on game start

MVP GOALS:
- functional buttons
- tiles appear
- tiles move on arrow key press
- tiles merge on hit if same number 
- if board is full, game ends and window appears telling you game over
- score box shows current highest tile number
- tries box shows local amount of game tries

STRETCH GOALS:
- add hint button to show best move?? probably not 
- make everything look fancy