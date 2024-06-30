var Start = document.getElementById('Start');
var Pause = document.getElementById('Pause');
var Num3 = document.getElementById('Num3');
var Num2 = document.getElementById('Num2');
var Num1 = document.getElementById('Num1');

var x;
function pseudoStart(){
  startFun();
  Start.style.display="none";
  Pause.style.display="inline-block";
  x = setInterval(startFun, 1000);

}

var count3 = 0;
function startFun(){
  document.title = `${count1-1}:${count2-1}:${count3}`;
  //Make 0 if reaches 60.
  if(count3 > 59){
    count3 = 0;
    changeNum2();
  }

  if(count3 < 10 && count3 >= 0){
    Num3.innerHTML = `0${count3++}`;
  }
  else{
    Num3.innerHTML = count3++;
  }
}

var count2 = 1;
function changeNum2(){
  //Make 0 if reaches 60.
  if(count2 > 59){
    count2 = 0;
    changeNum1();
  }
  if(count2 < 10 && count2 >= 0){
    Num2.innerHTML = `0${count2++}`;
  }
  else{
    Num2.innerHTML = count2++;
  }
}

var count1 = 1;
function changeNum1(){
  if(count1 < 10 && count1 >= 0){
    Num1.innerHTML = `0${count1++}`;
  }
  else{
    Num1.innerHTML = count1++;
  }

}

//Upto this is starting the stopwatch.


//This to Pause the Stopwatch
function pauseFun(){
  if(Start.style.display == "none"){
    Pause.style.display = "none";
    clearInterval(x);
  }
  else if(Start.style.display != "none"){
    alert("First Start and then Pause");
  }
}

//This to Resume the Stopwatch
function resumeFun(){
  Pause.style.display = "inline-block";
  pseudoStart();
}

//For Lap in stopwatch
var i = 0, k = i;
function lapFun(){
  if(Start.style.display == "none" && Pause.style.display=="inline-block"){
    //From here to...
    var showLap = document.createElement("P");
    document.body.appendChild(showLap);

    for(var j = i; j <= i; j++){
      document.getElementsByTagName("P")[j].className = "Laps";
      document.getElementsByClassName("Laps")[j].style.top = `${330+k}px`;
      k += 60;
    }
    i++;
    //here it is to Classname and give so-called margin-bottom (k)
    //[because it's position is absolute]  all the newly created 'p' elements

    //CONTENT
    showLap.innerHTML = `${Num1.innerHTML}:${Num2.innerHTML}: ${Num3.innerHTML}`;
  }
  else{
    if(Start.style.display != "none"){
      alert("Click on Start and then Lap");
    }
    else if(Pause.style.display != "inline-block"){
      alert("Click on Resume and then Lap");
    }
  }
}
//DON'T CHANGE THE VALUE OF i IN BETWEEN lapFun() and ResetFun()

//This to Reset
function ResetFun(){
  Start.style.display = "inline-block";
  Pause.style.display = "inline-block";
  clearInterval(x);
  count3 = 0;
  count2 = count1 = 1;
  Num3.innerHTML = "00";
  Num2.innerHTML = "00";
  Num1.innerHTML = "00";
  for(var m = 0; m < i; m++){
    document.getElementsByClassName("Laps")[0].remove();
    //Remove 0th element because when element 0 is deleted then the next element becomes index 0
  }
  i = 0;
  k = 0;
}
