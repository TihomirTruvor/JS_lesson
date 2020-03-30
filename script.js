const board = document.querySelector('#board');

for (let i = 1; i < 65; i++) { // генерируем 64 ячейки
	const cell = document.createElement('div'); // создаем переменную ячейки в цикле
	board.appendChild(cell); // добавляем ячейки на доску
	cell.classList.add('cell'); // присваиваем стили CSS
}

const cell = document.getElementsByClassName('cell'); // создаем внешнюю переменную для ячейки

/*создаем цикл для координат ячеек
(нижняя левая х=1, у=1, верхняя левая х=1, у=8, нижняя правая х=8, у=1 и т.д.)*/

let x = 1;
let y = 8;

for (let i = 0; i < cell.length; i++) {

	if (x>8) {
		x=1;
		y--;
	}

	cell[i].setAttribute('posX', x); // создаем для ячеек атрибут со значением Х
	cell[i].setAttribute('posY', y); // создаем для ячеек атрибут со значением У
	
	x++;

	/*Раскрашиваем ячейки*/

	if ((i%2==0 && y%2==0) || (i%2!=0 && y%2!=0)) {
		cell[i].style.backgroundColor = "#deb887"; // раскрашиваем каждую вторую ячейку 
	}
}
