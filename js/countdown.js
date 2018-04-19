function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<div class="row align-items-center justify-content-center"><div class="col"><span>:</span><div>'+day+'</div><div class="text">ДНЯ</div></div><div class="col"><span>:</span><div>'+hour+'</div><div class="text">ЧАСОВ</div></div><div class="col"><span>:</span><div>'+this.addZero(min)+'</div><div class="text">МИНУТ</div></div><div class="col"><div>'+this.addZero(sec)+'</div><div class="text">СЕКУНД</div></div></div>';
   // timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Дня</div><span class="number day">'+day+'</span></span>';
   // timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Часов</div><span class="number hour">'+hour+'</span></span>';
   // timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Минут</div><span class="number min">'+this.addZero(min)+'</span></span>';
   // timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2018/02/22 20:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<div class="row align-items-center justify-content-center"><div class="col"><span>:</span><div>00</div><div class="text">ДНЯ</div></div><div class="col"><span>:</span><div>00</div><div class="text">ЧАСОВ</div></div><div class="col"><span>:</span><div>00</div><div class="text">МИНУТ</div></div><div class="col"><div>00</div><div class="text">СЕКУНД</div></div></div>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}