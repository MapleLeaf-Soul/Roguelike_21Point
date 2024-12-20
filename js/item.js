var allMyItem = [];
var allMyItemNumber = 0;
//技能随机
var isCardFirstBlack = 13; //检测前置
function ItemRandom() {
	let thistime;
	for (thistime = 1; thistime <= 15; thistime++) {
		document.getElementById(`item_${thistime}`).style.display = 'none';
	}
	let allThisItem = [];
	thistime = 0;
	document.getElementById('shopitemmoney').textContent = `${allMyItemNumber*1000}`
	while (true) {
		let acheItem = Math.floor(Math.random() * isCardFirstBlack + 1);
		if (!allMyItem.includes(acheItem) && !allThisItem.includes(acheItem)) {
			let item = acheItem;
			allThisItem.push(acheItem);
			document.getElementById(`item_${item}`).style.display = 'flex';
			thistime++;
			if (thistime >= 3) {
				break;
			}
		}
	}
}

//技能选择
var itemOn_1 = false;
var itemOn_2 = false;
var itemOn_3 = false;
var itemOn_4 = false;
var itemOn_5 = false;
var itemOn_6 = false;
var itemOn_7 = false;
var itemOn_8 = false;
var itemOn_9 = false;
var itemOn_10 = false;
var itemOn_11 = false;
var itemOn_12 = false;
var itemOn_13 = false;
var itemOn_14 = false;
var itemOn_15 = false;
async function GiveMyItem(itemID) {
	if (itemID == 0) {

	} else if (myPoint <= allMyItemNumber * 1000 && itemID != 8) {
		return;
	} else {
		allMyItem.push(itemID);
		allMyItemNumber++;
		var myItem = document.getElementById(`myitem_${allMyItemNumber}`);
		var img = document.createElement('img');
		var div = document.createElement('div');
		switch (itemID) {
			case 1:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '底牌隐去';
				borderColor = 'white';
				isCardFirstBlack = 15;
				itemOn_1 = true;
				break;
			case 2:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '平局';
				borderColor = 'white';
				itemOn_2 = true;
				break;
			case 3:
				img.src = 'img/icon/Diamond1.png';
				div.textContent = 'ALL IN !!!';
				borderColor = 'white';
				itemOn_3 = true;
				allinButton = true;
				break;
			case 4:
				img.src = 'img/icon/Club1.png';
				div.textContent = '点数控制';
				borderColor = 'white';
				itemOn_4 = true;
				break;
			case 5:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '幸运A';
				borderColor = 'white';
				itemOn_5 = true;
				break;
			case 6:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '小型大卡';
				borderColor = 'white';
				itemOn_6 = true;
				break;
			case 7:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '24点？';
				borderColor = 'white';
				itemOn_7 = true;
				gamePointMax = 24;
				break;
			case 8:
				img.src = 'img/icon/Club1.png';
				div.textContent = '启动资金';
				borderColor = 'yellow';
				itemOn_8 = true;
				break;
			case 9:
				img.src = 'img/icon/Heart1.png';
				div.textContent = '透视';
				borderColor = 'yellow';
				itemOn_9 = false;
				break;
			case 10:
				img.src = 'img/icon/Heart1.png';
				div.textContent = '偷看';
				borderColor = 'yellow';
				itemOn_10 = false;
				break;
			case 11:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '强制表演';
				borderColor = 'yellow';
				itemOn_11 = false;
				break;
			case 12:
				img.src = 'img/icon/Spade1.png';
				div.textContent = '封锁';
				borderColor = 'yellow';
				itemOn_12 = false;
				break;
			case 13:
				img.src = 'img/icon/Heart1.png';
				div.textContent = '快手';
				borderColor = 'yellow';
				itemOn_13 = false;
				break;
			case 14:
				let color;
				switch (Math.floor(item_14Card / 13)) {
					case 0:
						color = "Spade";
						break;
					case 1:
						color = "Heart";
						break;
					case 2:
						color = "Club";
						break;
					case 3:
						color = "Diamond";
						break;
				}
				img.src = `img/Card/${color}${(card % 13) + 1}.png`;
				div.textContent = '袖内抽卡';
				borderColor = 'yellow';
				itemOn_14 = false;
				break;
			case 15:
				img.src = 'img/icon/Heart1.png';
				div.textContent = '釜底抽薪';
				borderColor = 'yellow';
				itemOn_15 = false;
				break;
		}
		if (itemID != 8) {
			NowMyPoint(-(allMyItemNumber - 1) * 1000);
		}
		myItem.style.border = `${borderColor} 2px solid`;
		myItem.appendChild(img);
		myItem.appendChild(div);
	}
	document.getElementById('deathcard').style.display = 'block';
	document.getElementById('storyDIV').style.display = 'none';
	document.getElementById('shopDIV').style.display = 'none';
	document.getElementById('shopskip').style.display = 'none';
	document.getElementById('gamebutton_start').style.display = 'flex';
	await MakeDeathCard();
	PointTurn();
}

//主动技能点击反应
var itemColdTime_9 = 0;
var itemColdTime_10 = 0;
var itemColdTime_11 = 0;
var itemColdTime_12 = 0;

var nextCard = -1;
var item_13NextCard = -1;
var item_13Card;
var item_14Card = RandomCard();

var item_9ClickID = 0;
var item_10ClickID = 0;
var item_11ClickID = 0;
var item_12ClickID = 0;
var item_13ClickID = 0;
var item_14ClickID = 0;
var item_15ClickID = 0;


async function MyItemClick(ClickID) {
	if (!playerTurn) {
		return;
	}
	let myItem = document.getElementById(`myitem_${ClickID}`);
	let itemID = allMyItem[ClickID - 1];
	let borderColor;
	switch (itemID) {
		case 8:
			borderColor = 'red';
			if (itemOn_8) {
				itemOn_8 = false;
				NowMyPoint(3000);
			}
			break;
		case 9:
			if (cardInDeath.length == DeathCardNumber) {
				return;
			}
			borderColor = 'red';
			if (itemColdTime_9 <= 0) {
				itemColdTime_9 = 3;
				itemOn_9 = true;
				item_9ClickID = ClickID;
				if (item_13NextCard != -1) {
					nextCard = item_13NextCard;
					item_13NextCard = -1;
				} else {
					nextCard = RandomCard();
				}

				nextCardImg = document.querySelector(`#myitem_${ClickID} img`);
				let color;
				switch (Math.floor(nextCard / 13)) {
					case 0:
						color = "Spade";
						break;
					case 1:
						color = "Heart";
						break;
					case 2:
						color = "Club";
						break;
					case 3:
						color = "Diamond";
						break;
				}
				nextCardImg.src = `img/Card/${color}${(card % 13) + 1}.png`;
			}
			break;
		case 10:
			borderColor = 'red';
			if (itemColdTime_10 <= 0) {
				itemOn_10 = true;
				itemColdTime_10 = 3;
				item_10ClickID = ClickID;
				document.querySelector(`#myitem_${ClickID} img`).src = bossCardFirst;
			}
			break;
		case 11:
			borderColor = 'red';
			if (itemColdTime_11 <= 0) {
				itemColdTime_11 = 5;
				itemOn_11 = true;
				item_11ClickID = ClickID;
			}
			break;
		case 12:
			borderColor = 'red';
			if (itemColdTime_12 <= 0) {
				itemColdTime_12 = 5;
				itemOn_12 = true;
				item_12ClickID = ClickID;
			}
			break;
		case 13:
			borderColor = 'red';
			if (!itemOn_13) {
				itemOn_13 = true;
				item_13ClickID = ClickID;
			}
			break;
		case 14:
			item_14ClickID = ClickID;
			Item14Card();
			break;
		case 15:
			borderColor = 'red';
			if (!itemOn_15) {
				itemOn_15 = true;
				item_15ClickID = ClickID;
				Item15Card();
			}
			break;
	}
	myItem.style.border = `${borderColor} 2px solid`;
}