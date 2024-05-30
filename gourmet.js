
/////////// 課題3-2 ここからプログラムを書こう
//ul要素の追加
let a = document.querySelector('#print');
a.addEventListener('click', otpt);

let key = document.querySelector('input[name="sentence"]');

function otpt(){
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + key + '.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
  
  /*
  let inp = document.querySelector('input[name="sentence"]');
  let number = inp.value;
  console.log('検索キー:' + number);
  */
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  r();

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

function r(data){


let num = document.querySelector('div#result');
let lis = document.createElement('ul');
lis.classList.add('all');
num.insertAdjacentElement('beforeend', lis);

//h2要素の追加
let num1 = document.querySelector('ul.all');
let htwo = document.createElement('h2');
num1.insertAdjacentElement('beforeend', htwo);

//h2要素の中の文章
let htwotext = document.querySelector('ul.all > h2');
htwotext.textContent = '＜検索結果1件目＞';	

//ul要素の追加
let lis1 = document.createElement('ul');
lis1.classList.add('body');
num1.insertAdjacentElement('beforeend', lis1);

//div要素の追加
let num2 = document.querySelector('ul.body');
let divs = document.createElement('div');
divs.classList.add('main');
num2.insertAdjacentElement('beforeend', divs);

//h3要素の追加
let num3 = document.querySelector('div.main');
let hthree = document.createElement('h3');
hthree.classList.add('text2');
num3.insertAdjacentElement('beforeend', hthree);

//h3要素の中にp要素を追加
let num4 = document.querySelector('h3.text2');
let p1 = document.createElement('p');
num4.insertAdjacentElement('beforeend', p1);

//p要素の中の文章(店名)
let num5 = document.querySelector('h3.text2 > p');
num5.textContent = data.results.shop[0].name ;	

//h3要素の中にp要素を追加
let num6 = document.querySelector('div.main');
let p2 = document.createElement('p');
num6.insertAdjacentElement('beforeend', p2);

//p要素の中の文章(キャッチコピー)
let num7 = document.querySelector('div.main > p');
num7.textContent = data.results.shop[0].catch ;	

//見やすいようにp要素
let num8 = document.querySelector('ul.body');
let p3 = document.createElement('p');
num8.insertAdjacentElement('beforeend', p3);
let padd = document.querySelector('ul.body > p');
padd.textContent = '　' ;	

//ジャンルから予算までのループ
let num9 = document.querySelector('ul.body');
for(let i = 0; i < 6; i++){
  //li.listg[i]の追加
  let lists = document.createElement('li');
  num9.insertAdjacentElement('beforeend', lists);
  lists.classList.add('listg' + i);

  //li.listg[i]の子要素pの追加
  let num10 = document.querySelector('ul.body > li.listg' + i);
  let p4 = document.createElement('p');
  num10.insertAdjacentElement('beforeend', p4);

  //pの中身の追加
  let num11 = document.querySelector('li.listg' + i + '> p');
  if(i == 0){
    num11.textContent = 'ジャンル:居酒屋';	
  }
  if(i == 1){
    num11.textContent = 'サブジャンル:ダイニングバー・バル';	
  }
  if(i == 2){
    num11.textContent = 'アクセス:京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。';	
  }
  if(i == 3){
    num11.textContent = '最寄駅:京王八王子' ;	
  }
  if(i == 4){
    num11.textContent = '住所:東京都八王子市明神町４-6-12　ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F';	
  }
  if(i == 5){
    num11.textContent = '予算:3001～4000円';	
  }

  
}

//表の追加
let num12 = document.querySelector('ul.body');
let tbl = document.createElement('table');
num12.insertAdjacentElement('beforeend', tbl);

let num13 = document.querySelector('table');
let tblhead = tbl.createTHead();
let tblbody = tbl.createTBody();
let tr1 = tblhead.insertRow();
let tr2 = tblbody.insertRow();

let th1 = document.createElement('th');
tr1.appendChild(th1);
th1.appendChild(document.createTextNode('営業日と営業時間'));

th1 = document.createElement('th');
tr2.appendChild(th1);
th1.appendChild(document.createTextNode('月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）'));
  
//見やすいようにp要素
let num99 = document.querySelector('ul.all');
let p99 = document.createElement('p');
p99.classList.add('vvv');
num99.insertAdjacentElement('beforeend', p99);
let padd99 = document.querySelector('ul.all > p.vvv');
padd99.textContent = '　' ;	



///////////////////////////////////////////////////////////////////////////
//ul要素の追加
let num14 = document.querySelector('div#result');
let lis2 = document.createElement('ul');
lis2.classList.add('all2');
num14.insertAdjacentElement('beforeend', lis2);

//h2要素の追加
let num15 = document.querySelector('ul.all2');
let htwo1 = document.createElement('h2');
num15.insertAdjacentElement('beforeend', htwo1);

//h2要素の中の文章
let htwotext1 = document.querySelector('ul.all2 > h2');
htwotext1.textContent = '＜検索結果2件目＞';	

//ul要素の追加
let lis3 = document.createElement('ul');
lis3.classList.add('body1');
num15.insertAdjacentElement('beforeend', lis3);

//div要素の追加
let num16 = document.querySelector('ul.body1');
let divs1 = document.createElement('div');
divs1.classList.add('main2');
num16.insertAdjacentElement('beforeend', divs1);

//h3要素の追加
let num17 = document.querySelector('div.main2');
let hthree1 = document.createElement('h3');
hthree1.classList.add('text3');
num17.insertAdjacentElement('beforeend', hthree1);

//h3要素の中にp要素を追加
let num18 = document.querySelector('h3.text3');
let p4 = document.createElement('p');
num18.insertAdjacentElement('beforeend', p4);

//p要素の中の文章(店名)
let num19 = document.querySelector('h3.text3 > p');
num19.textContent = data.results.shop[1].name ;	

//h3要素の中にp要素を追加
let num20 = document.querySelector('div.main2');
let p5 = document.createElement('p');
num20.insertAdjacentElement('beforeend', p5);

//p要素の中の文章(キャッチコピー)
let num21 = document.querySelector('div.main2 > p');
num21.textContent = data.results.shop[1].catch ;	

//見やすいようにp要素
let num22 = document.querySelector('ul.body1');
let p6 = document.createElement('p');
num22.insertAdjacentElement('beforeend', p6);
let padd1 = document.querySelector('ul.body1 > p');
padd1.textContent = '　' ;	

//ジャンルから予算までのループ
let num23 = document.querySelector('ul.body1');
for(let i = 0; i < 6; i++){
  //li.listg[i]の追加
  let lists1 = document.createElement('li');
  num23.insertAdjacentElement('beforeend', lists1);
  lists1.classList.add('listg1' + i);

  //li.listg[i]の子要素pの追加
  let num24 = document.querySelector('ul.body1 > li.listg1' + i);
  let p7 = document.createElement('p');
  num24.insertAdjacentElement('beforeend', p7);

  //pの中身の追加
  let num25 = document.querySelector('li.listg1' + i + '> p');
  if(i == 0){
    num25.textContent = 'ジャンル:居酒屋';	
  }
  if(i == 1){
    num25.textContent = 'サブジャンル:ダイニングバー・バル';	
  }
  if(i == 2){
    num25.textContent = 'アクセス:ＪＲ八王子駅北口徒歩1分/京王八王子駅徒歩3分';	
  }
  if(i == 3){
    num25.textContent = '最寄駅:八王子';	
  }
  if(i == 4){
    num25.textContent = '住所:東京都八王子市東町12-14';	
  }
  if(i == 5){
    num25.textContent = '予算:2001～3000円';	
  }

  
}

//表の追加
let num26 = document.querySelector('ul.body1');
let tbl1 = document.createElement('table');
tbl1.classList.add('tbl1');
num26.insertAdjacentElement('beforeend', tbl1);

let num27 = document.querySelector('table.tbl1');
let tblhead1 = tbl1.createTHead();
let tblbody1 = tbl1.createTBody();
let tr3 = tblhead1.insertRow();
let tr4 = tblbody1.insertRow();

let th2 = document.createElement('th');
tr3.appendChild(th2);
th2.appendChild(document.createTextNode('営業日と営業時間'));

th2 = document.createElement('th');
tr4.appendChild(th2);
th2.appendChild(document.createTextNode('月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）'));
  
//見やすいようにp要素
let num999 = document.querySelector('ul.all2');
let p999 = document.createElement('p');
p999.classList.add('vvvv');
num999.insertAdjacentElement('beforeend', p999);
let padd999 = document.querySelector('ul.all2 > p.vvvv');
padd999.textContent = '　' ;	
}