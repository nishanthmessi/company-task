document.getElementById("reset-data").disabled = true;
var i = 0;
var arr = [];

function addElement() {
  document.getElementById("display").innerHTML = "Input : ";
  arr[i] = document.getElementById("input-number").value;
  i++;
  document.getElementById("input-number").value = "";
  document.getElementById("display").innerHTML += arr;
}
var len = arr.length;

function generateInputTable(){
  document.getElementById("reset-data").disabled = false;
  let n=arr.length;
  let maximum=0;
  for(let i=0;i<n;i++){
    maximum=Math.max(maximum,arr[i])
  }

  for(let row=0;row<=maximum;row++){
    let rows = document.getElementById("inputTable").insertRow(row);
    for (let col=0;col<n;col++){
      rows.insertCell(col)
    }
  }
  let table=document.getElementById("inputTable")

  for(let col=0;col<n;col++){
    for(let row=maximum;row>maximum-arr[col];row--){
      table.rows[row].cells[col].style.backgroundColor = "yellow";
    }
  }
  let left=[]
  left[0]=arr[0]
  for(let i=1;i<n;i++){
    left[i]=Math.max(left[i-1],arr[i])

  }
  console.log(left)
  let right=[]
  right[n-1]=arr[n-1]
  for(let i=n-2;i>=0;i--){
    right[i]=Math.max(right[i+1],arr[i])
  }
  let ans=0
  for (let col = 0; col < n; col++) {
    let count = 0;
    let row = Math.max(left[col], right[col]) - arr[col];
    while (count < Math.min(left[col], right[col]) - arr[col]) {
      table.rows[row].cells[col].style.backgroundColor = "#0F52BA";
      row--;
      count++;
    }
    ans += Math.min(left[col], right[col]) - arr[col];
  }
  document.getElementById("input-button").disabled = true;
}

function showOutputTable(){
let n=arr.length;
let maximum=0;
for(let i=0;i<n;i++){
  maximum=Math.max(maximum,arr[i])
}

for(let row=0;row<=maximum;row++){
  let rows = document.getElementById("outputTable").insertRow(row);
  for (let col=0;col<n;col++){
    rows.insertCell(col)
  }
}
let table=document.getElementById("outputTable")

let left=[]
left[0]=arr[0]
for(let i=1;i<n;i++){
  left[i]=Math.max(left[i-1],arr[i])
}
let right=[]
right[n-1]=arr[n-1]
for(let i=n-2;i>=0;i--){
    right[i]=Math.max(right[i+1],arr[i])
}
let ans=0

for (let col = 0; col < n; col++) {
  let count = 0;
  let row = Math.max(left[col], right[col]) - arr[col];
  while (count < Math.min(left[col], right[col]) - arr[col]) {
    table.rows[row].cells[col].style.backgroundColor = "#0F52BA";
    row--;
    count++;
  }
  ans += Math.min(left[col], right[col]) - arr[col];
}
  document.getElementById("input-button").disabled = true;
  console.log(ans,'answer')
  document.getElementById("result").innerHTML += ans;
}

function resetData() {
  location.reload();
}