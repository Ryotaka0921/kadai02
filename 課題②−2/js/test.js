
/*================
       page1
=================*/
    //クリックして移動
    function nadenade(){
        
        document.querySelector('#p1').classList.replace('visible','hidden');
        console.log(document.querySelector('#p0'));
        document.querySelector('#p2').classList.replace('hidden','visible');
        console.log(document.querySelector('#p1'));
        // }
        // else{}
    }

    //画像交互表示
    img = new Array("画像/1-1.jpeg","画像/1-2.jpeg"); //複数のファイルを配列変数imgに入れておきます。
    count = -1; //*変数countを準備しています。
    imgTimer();
    function imgTimer() {
        //画像番号
        count++; //*変数countに1を足します。
        //画像の枚数確認
        if (count == img.length) count = 0; //*配列変数imgの要素の数が画像の数なので、変数countがその数に達したら０に戻します。要素の数が6個の場合、変数countは0～5を繰り返します。
        //画像出力
        document.egg.src = img[count]; //*画像を表示します。
        //次のタイマー呼びだし
        setTimeout("imgTimer()",500); //*0.5秒後にユーザー関数imgTimerを呼びだします。これにより同じ処理を繰り返すことになります。
    }

/*================
       page2
=================*/


function btn2_1(){
    const random = Math.floor(Math.random() * 8);
    if (random === 0 || random === 1) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-1').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random === 2 ||random ===  3 ||random ===  4) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-2').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random ===  5 ||random ===  6 ||random ===  7) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-3').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    }}


function btn2_2(){
    const random = Math.floor(Math.random() * 8);
    if (random === 0 || random === 1) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-1').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random === 2 ||random ===  3 ||random ===  4) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-2').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random ===  5 ||random ===  6 ||random ===  7) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-3').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    }}

function btn2_3(){
    const random = Math.floor(Math.random() * 8);
    if (random === 0 || random === 1) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-1').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random === 2 ||random ===  3 ||random ===  4) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-2').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    } else if (random ===  5 ||random ===  6 ||random ===  7) {
    document.querySelector('#p2').classList.replace('visible','hidden');
    console.log(document.querySelector('#p1'));
    document.querySelector('#p3-3').classList.replace('hidden','visible');
    console.log(document.querySelector('#p2'));
    }}



/*================
       page3
=================*/