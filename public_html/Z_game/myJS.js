var FIELD_SIZE_X =20;
var FIELD_SIZE_Y =20;
var SNAKE_SPEED =300;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snake_timer;
var food_timer;
var score = 0;

function init() {
	prepareGameField();

	var wrap = document.getElementsByClassName('wrap')[0];

	wrap.style.width = '400px';

	document.getElementById('snake-start').addEventListener('click', startGame);
	document.getElementById('snake-renew').addEventListener('click', refreshGame);


	addEventListener('keydown', changeDirection);
}



function prepareGameField() {

	var game_table = document.createElement('table');
	game_table.setAttribute('class', 'game-table');


	for (var i = 0; i < FIELD_SIZE_X; i++) {

		var row = document.createElement('tr');
		row.className = 'game-table-row row-' + i;

		for (var j = 0; j < FIELD_SIZE_Y; j++) {

			var cell = document.createElement('td');
			cell.className = 'game-table-cell cell-' + i + '-' + j;

			row.appendChild(cell);
		}
		game_table.appendChild(row);
	}

	document.getElementById('snake-field').appendChild(game_table);
}