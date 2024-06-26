
/////////// 課題3-2 ここからプログラムを書こう
//ul要素の追加
let a = document.querySelector('#print');
a.addEventListener('click', otpt);

//let key = document.querySelector('input[name="sentence"]');

function otpt(){
  let inp = document.querySelector('select#gourmet');
  let genre;
  switch (inp.value) {
    case 'iza': genre = 'G001'; 
    break;
    case 'dai': genre = 'G002'; 
    break;
    case 'sou': genre = 'G003'; 
    break;
    case 'wa': genre = 'G004'; 
    break;
    case 'you': genre = 'G005'; 
    break;
    case 'italy': genre = 'G006'; 
    break;
    case 'china': genre = 'G007'; 
    break;
    case 'yaki': genre = 'G008'; 
    break;
    case 'asia': genre = 'G009'; 
    break;
    case 'con': genre = 'G010'; 
    break;
    case 'kara': genre = 'G011'; 
    break;
    case 'bar': genre = 'G012'; 
    break;
    case 'ramen': genre = 'G013'; 
    break;
    case 'cafe': genre = 'G014'; 
    break;
    case 'other': genre = 'G015'; 
    break;
    case 'oko': genre = 'G016';
    break;
    case 'korea': genre = 'G017'; 
    break;
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';


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
  ///////////////////////
  let resultDiv = document.querySelector('div#result');
  resultDiv.innerHTML = '';

  data.results.shop.forEach((shop, index) => {
    let shopInfo = `
      <ul>
        <li><strong>${shop.name}</strong></li>
        <li>${shop.catch}</li>
        <li>ジャンル: ${shop.genre.name}</li>
        <li>住所: ${shop.address}</li>
        <li>アクセス: ${shop.access}</li>
        <li>予算: ${shop.budget.average}</li>
        <li>営業時間: ${shop.open}</li>
      </ul>
    `;
    resultDiv.insertAdjacentHTML('beforeend', shopInfo);
  });
  ////////////////////////////////
  //let keyword = document.querySelector('input[name="sentence"]').value;
  //r(data);
  //let filteredData = data.results.shop.filter(shop => shop.name.includes(keyword));
  //r(filteredData);

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

