var selectedRow =null

function onFormSubmit(){
      
            var formData = readFormData();
            if(selectedRow == null)
                insertNewRecord(formData);
  
            else
                updateRecord(formData);
            resetForm();


     
            
}


    

function readFormData(){
    var formData ={};
    formData["Idnum"] =  document.getElementById("Idnum").value;
    formData["Date"] = document.getElementById("Date").value;
    formData["ItemN"] = document.getElementById("ItemN").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["Qt"] = document.getElementById("Qt").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("itemList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Idnum;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Date;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.ItemN;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Price;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Qt;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a input type="submit" onclick="onEdit(this)">Edit</a>
                       <a input type="submit" onClick="onDelete(this)">Delete</a>`;
   
}

function resetForm(){
    document.getElementById("Idnum").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("ItemN").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Qt").value = "";
    selectedRow =null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Idnum").value  = selectedRow.cells[0].innerHTML;
    document.getElementById("Date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ItemN").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Qt").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Idnum;
    selectedRow.cells[1].innerHTML = formData.Date;
    selectedRow.cells[2].innerHTML = formData.ItemN;
    selectedRow.cells[3].innerHTML = formData.Price;
    selectedRow.cells[4].innerHTML = formData.Qt;   
}

function onDelete(td){
    if(confirm("Are you sure to delete this Record..?")){
          row = td.parentElement.parentElement;
          document.getElementById("itemList").deleteRow(row.rowIndex);
          resetForm();
    }
 }

// count number of items
// function counter() {
  

// }

var q = document.querySelector('#Price');
var v = document.querySelector('#Qt');

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Price", "Quantity"],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 0, 0,],
        backgroundColor :['#EF5C3D','#BBE142'],
          
        borderWidth: 1,
      }
    ]
  }
  
});

const updateChartValue = (input, dataOrder) => {
    input.addEventListener('change',e =>{
        myChart.data.datasets[0].data[dataOrder] =e.target.value;
        myChart.update();
    });
};
updateChartValue(q,0);
updateChartValue(v,1);


