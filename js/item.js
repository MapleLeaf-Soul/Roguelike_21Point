var allMyItem = [];
var allMyItemNumber = 0;
function ItemRandom(){
	for(thistime = 1; thistime <= 15; thistime++){
		document.getElementById(`item_${thistime}`).style.display = 'none';
	}
	allThisItem = [];
	thistime = 0;
	document.getElementById('shopitemmoney').textContent = `${allMyItemNumber*1000}`
	while(true){
		acheItem = Math.floor(Math.random() * 15 + 1);
		if (!allMyItem.includes(acheItem) && !allThisItem.includes(acheItem)) {
			item = acheItem;
			allThisItem.push(acheItem);
			document.getElementById(`item_${item}`).style.display = 'flex';
			thistime ++;
			console.log(item);
			if(thistime >= 3){
				break;
			}
		}
	}
}
async function GiveMyItem(itemID){
	if(itemID == 0){
		
	}else{
		allMyItem.push(itemID);
		allMyItemNumber++;
		
		myItem = document.getElementById(`myitem_${allMyItemNumber}`);
		img = document.createElement('img');
		div = document.createElement('div');
		switch(itemID){
			case 1:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '底牌隐去';
			break;
			case 2:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '平局';
			break;
			case 3:
			img.src = 'img/icon/Spade1.png';
			div.textContent = 'ALL IN !!!';
			break;
			case 4:
			img.src = 'img/icon/Heart1.png';
			div.textContent = '快手';
			break;
			case 5:
			img.src = 'img/icon/Club1.png';
			div.textContent = '点数控制';
			break;
			case 6:
			img.src = 'img/icon/Club1.png';
			div.textContent = '启动资金';
			break;
			case 7:
			img.src = 'img/icon/Heart1.png';
			div.textContent = '袖内抽卡';
			break;
			case 8:
			img.src = 'img/icon/Heart1.png';
			div.textContent = '釜底抽薪';
			break;
			case 9:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '小型大卡';
			break;
			case 10:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '24点？';
			break;
			case 11:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '强制表演';
			break;
			case 12:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '幸运A';
			break;
			case 13:
			img.src = 'img/icon/Heart1.png';
			div.textContent = '透视';
			break;
			case 14:
			img.src = 'img/icon/Spade1.png';
			div.textContent = '封锁';
			break;
			case 15:
			img.src = 'img/icon/shopitem.png';
			div.textContent = '偷看';
			break;
		}
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

async function MyItemClick(ClickID){
	
}