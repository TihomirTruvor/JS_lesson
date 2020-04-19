/*const chess = document.querySelector('#chess'); // переменная шахматной доски
*/
const figurs = { // фигуры
  black: {
      king: '&#9818',
      rook: '&#9820',
      bishop: '&#9821',
      queen: '&#9819',
      knight: '&#9822',
      pawn: '&#9823',

  },
  white: {
      king: '&#9812',
      rook: '&#9814',
      bishop: '&#9815',
      queen: '&#9813',
      knight: '&#9816',
      pawn: '&#9817',
  }
};

const board = [ // массив с данными о ячейках на доске
{color: 'dark', figure: figurs.black.rook, active: false}, {color: 'light', figure: figurs.black.knight, active: false}, {color: 'dark', figure: figurs.black.bishop, active: false}, {color: 'light', figure: figurs.black.queen, active: false}, {color: 'dark', figure: figurs.black.king, active: false}, {color: 'light', figure: figurs.black.bishop, active: false}, {color: 'dark', figure: figurs.black.knight, active: false}, {color: 'light', figure: figurs.black.rook, active: false},
{color: 'light', figure: figurs.black.pawn, active: false}, {color: 'dark', figure: figurs.black.pawn, active: false}, {color: 'light', figure: figurs.black.pawn, active: false}, {color: 'dark', figure: figurs.black.pawn, active: false}, {color: 'light', figure: figurs.black.pawn, active: false}, {color: 'dark', figure: figurs.black.pawn, active: false}, {color: 'light', figure: figurs.black.pawn, active: false}, {color: 'dark', figure: figurs.black.pawn, active: false}, 
{color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false},
{color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false},
{color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false},
{color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false},
{color: 'dark', figure: figurs.white.pawn, active: false}, {color: 'light', figure: figurs.white.pawn, active: false}, {color: 'dark', figure: figurs.white.pawn, active: false}, {color: 'light', figure: figurs.white.pawn, active: false}, {color: 'dark', figure: figurs.white.pawn, active: false}, {color: 'light', figure: figurs.white.pawn, active: false}, {color: 'dark', figure: figurs.white.pawn, active: false}, {color: 'light', figure: figurs.white.pawn, active: false},
{color: 'light', figure: figurs.white.rook, active: false}, {color: 'dark', figure: figurs.white.knight, active: false}, {color: 'light', figure: figurs.white.bishop, active: false}, {color: 'dark', figure: figurs.white.queen, active: false}, {color: 'light', figure: figurs.white.king, active: false}, {color: 'dark', figure: figurs.white.bishop, active: false}, {color: 'light', figure: figurs.white.knight, active: false}, {color: 'dark', figure: figurs.white.rook, active: false}
];

function getChessBoard() {
	board.forEach( function(item, index) { // функция прорисовки ячеек
		const options = {

			color: item.color,
			figure: item.figure,
			index: index, 
			active: item.active
		};
		addCell(options);
	});
};

function addCell(options) {

	const {
		color,
		figure,
		index,
		active
	} = options;

	const chess = document.querySelector('#chess');

	const cell = document.createElement('div'); // создаем переменную ячейки
	cell.classList.add('cell'); // присваиваем стили CSS

	cell.addEventListener('click', () => eventMove(index)); // добавляем событие клика

	if (figure) cell.innerHTML = figure;
	if (color) cell.classList.add(color);
	if (active) cell.classList.add('active');

	chess.append(cell);// добавляем ячейки на доску
}

function eventMove(index) { // функция события при клике на ячейку
	
	let currentActiveIndex;

	const isActiveCell = board.filter(function(item, indexActiveCell){
		if (item.active) currentActiveIndex = indexActiveCell;
		return item.active;
	});
	if (!isActiveCell[0] && board[index].figure) {
		board[index].active = true; // проверка на сосотояние ячейки
		/*event.target.classList.add('active');*/// при клике добавляется класс active
	}

	if (isActiveCell[0]) { // передвижение фигур
		board[index].figure = board[currentActiveIndex].figure;
		board[currentActiveIndex].figure = null;
		board[currentActiveIndex].active = false;

	}

	redrawBoard();
}

function redrawBoard(){ // функция перерисовки состояния доски
	let chess = document.querySelector('#chess');
	chess.innerHTML = '';
	getChessBoard();
};

getChessBoard();

/*function cellClick(cell) { // функция клика
cell.addEventListener("click", function() {
this.style.backgroundColor = this.style.backgroundColor ? "" : "#6ede4c"; 
	});
};
*/
/*const color = { // создаем переменную (объект) для цвета ячеек
  one: 'light',
  two: 'dark'
}

for (let i = 0; i < 64; i++) { // генерируем 64 ячейки

  if (!(i%8)) { // условие для порядка цветов ячеек
    color.one = (color.one === 'light') ? 'dark' : 'light';
    color.two = (color.two === 'light') ? 'dark' : 'light';
  }

  const colorClass = i%2 ? color.one : color.two;*/

/*  let figure = null;

  if (i >= 8 && i < 16) { // расставляем фигуры в начале игры (но так неудобно управлять ходами)
  	figure = figurs.white.pawn
  };
  
  addCell(colorClass, figure);
}*/

/*for (let i = 1; i < 65; i++) { // генерируем 64 ячейки
	const cell = document.createElement('div'); // создаем переменную ячейки в цикле
	cell.classList.add('cell'); // присваиваем стили CSS
	board.append(cell); // добавляем ячейки на доску
}

const cell = document.getElementsByClassName('cell'); // создаем внешнюю переменную для ячейки

/*создаем цикл для координат ячеек
(нижняя левая х=1, у=1, верхняя левая х=1, у=8, нижняя правая х=8, у=1 и т.д.)*/

/*let x = 1; // переменные координат
let y = 8;

for (let i = 0; i < cell.length; i++) {

	if (x>8) {
		x=1;
		y--;
	}

	cell[i].setAttribute('posX', x); // создаем для ячеек атрибут со значением Х
	cell[i].setAttribute('posY', y); // создаем для ячеек атрибут со значением У
	
	x++;*/

	/*Раскрашиваем ячейки*/
	/*if ((i%2==0 && y%2==0) || (i%2!=0 && y%2!=0)) {
		cell[i].style.backgroundColor = "#deb887"; // раскрашиваем каждую вторую ячейку 
	}
	cellClick(cell[i]); // Вызываем функцию клика
	//cellHover(cell[i]); // Вызываем функцию наведения курсора
}*/

/*function cellClick(cell) { // функция клика
cell.addEventListener("click", function() {
this.style.backgroundColor = this.style.backgroundColor ? "" : "#6ede4c"; // как-то не правильно отрабатывает на раскрашеных клетках (при первом клике раскрашивает белым)
	});
};*/

/*function cellHover(cell) { // Функция наведения курсора
	cell.addEventListener("mouseover", function() { // при наведении
		this.style.backgroundColor = "#e0f1c8";
		this.style.cursor = "pointer";
	});

	cell.addEventListener("mouseout", function() {  // при выходе с ячейки
		this.style.backgroundColor = ""; // не могу вернуть цвет по умолчанию!!!
	});
};*/

/*function cellHover(cell) { // Функция наведения курсора (не правильно работает)
	cell.addEventListener("mouseover", function() { // при наведении
		this.style.backgroundColor = "#e0f1c8";
		this.style.cursor = "pointer";
	});

	cell.addEventListener("mouseout", function() {  // при выходе с ячейки
		this.style.backgroundColor = ""; // не могу вернуть цвет по умолчанию!!!
	});
};*/




