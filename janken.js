function janken(user){
	let pcJankens=['S__335552537.jpg','S__335552539.jpg','S__335552540.jpg','IMG_2779.JPG'];
	let userJankens=['20171223192540.jpg','20171223192617.jpg','20171223192619.jpg'];
	let pc=Math.floor(Math.random()*4);
	let userImg=document.getElementById("userImg");
	userImg.src="img/"+userJankens[user];
	let pcImg=document.getElementById("pcImg");
	pcImg.src="img/"+pcJankens[pc];
	let result=[['あいこ','勝ち','負け','負け'],['負け','あいこ','勝ち','負け'],['勝ち','負け','あいこ','負け']];
	document.getElementById("result").textContent=result[user][pc];

}
