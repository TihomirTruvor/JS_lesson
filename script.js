const board = document.querySelector('#board');

function addCell(extraClass) {

	const cell = document.createElement('div'); // создаем переменную ячейки
	cell.classList.add('cell'); // присваиваем стили CSS
	if (extraClass) cell.classList.add(extraClass);
  
	board.append(cell);// добавляем ячейки на доску


	/*cellHover(cell); // Вызов функции наведения курсора. При вызове этой функции логика почему-то становится не правильной*/
	cellClick(cell);// Вызов функции клика
}

const color = { // создаем переменную (объект) для цвета ячеек
  one: 'light',
  two: 'dark'
}

for (let i = 0; i < 64; i++) { // генерируем 64 ячейки

  if (!(i%8)) { // условие для порядка цветов ячеек
    color.one = (color.one === 'light') ? 'dark' : 'light';
    color.two = (color.two === 'light') ? 'dark' : 'light';
  }

  const colorClass = i%2 ? color.one : color.two;
  
  addCell(colorClass);
}

function cellClick(cell) { // функция клика
cell.addEventListener("click", function() {
this.style.backgroundColor = this.style.backgroundColor ? "" : "#6ede4c"; 
	});
};

/*function cellHover(cell) { // Функция наведения курсора
	cell.addEventListener("mouseover", function() { // при наведении
		this.style.backgroundColor = "#e0f1c8";
		this.style.cursor = "pointer";
	});

	cell.addEventListener("mouseout", function() {  // при выходе с ячейки
		this.style.backgroundColor = ""; // не могу вернуть цвет по умолчанию!!!
	});
};*/

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





/*const figurs = { // фигуры
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
};*/




