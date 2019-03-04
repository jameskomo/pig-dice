# **Project Name: TRIANGLE TRACKER**

## **Project description**
The Pig Dice Game is a two player game where the objective is to score 100 points before your opponent does. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The first player to score 100 or more points wins. The game allows players to enter their names on load. 

When a Player rolls die, a random number between '1' and '6' is returned.

If current Player rolls a number between '2' and '6', player has the option to 'hold/bank' scores and shift the turn to the opponent or 'roll' again. However, if they score a 1 in their subsequent rolls, they lose all the temporary/roll scores and remain with the total marks.


The number of points a player has is added to their Total Score as long as the score is between 2-6 and they bank.


## **Author information**

James Komo


## **Setup instructions**

Run on this Link: https:https://jameskomo.github.io/pig-dice-game/.
You need a smartphone, laptop, desktop or any gadget sreen accessible to internet
Open from a friendly `browser


## **Behavior Driven Development (BDD)**

| Input                                                                                                                                                                                                   	| Expected OutPut                                                                                                                                                                 	|
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Player 1 and Player 2 Enter their Names and Submit                                                                                                                                                      	| Player Names are Displayed on the game interface with customized details on player turn                                                                                         	|
| As a user, I want to roll the dice when it's my turn to play in the game.                                                                                                                               	| The web page alerts the player when it's their time to roll the die                                                                                                             	|
| As a user, I want to see my cumulative score for each round I play in the game.                                                                                                                         	| All cumulative scores are printed on the screen  on the current round Total Section                                                                                             	|
| As a user, I want the option to hold my score when I'm satisfied with  the points I've gained in a round of playing.  The game should, therefore, add my held score to my most recent cumulative score. 	| The game allows players to hold scores and  the temporary Score adds to the total Score                                                                                         	|
| As a user, I want to be alerted when my dice rolls on number 1.  This will help me know that I can't roll the dice  until the alternate player takes their round.                                       	| The page alerts the user with a custom message on rolling a 1 and shifts turn to the opponent. The current Scores are also discarded and player only retains cumulative totals. 	|
| As a user, I need a way to know which player has won the game,  which means they have scored 100 points before the alternate player.                                                                    	| When one players scores 100 or more points, an alert shows up and the game is reset in preparation for a new game                                                               	|

## **Technologies used**

IDEs: Atom and Sublime Editor
Browsers include either: Google Chrome, Mozilla Firefox.
JavaScript ES6,jQuery 3.3.1, Bootstrap 4.0, HTML5 & CSS3,


## **Known Bugs**

No known bugs,but if you come across feel free to contact me through provided contacts.


## **Contact information**

Email: james.komoh.com Skype: james.komo



## **License and Copyright information**

MIT License
Copyright(c)2019 James Komo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
