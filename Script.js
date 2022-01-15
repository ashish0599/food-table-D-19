function add(){
  
    var table= document.getElementById("data");
    var newrow= table.insertRow(1);
  
    var cell1= newrow.insertCell(0);
    cell1.innerHTML=document.getElementById("fname").value;
  
    var cell2= newrow.insertCell(1);
    cell2.innerHTML=document.getElementById("lname").value;
  
    var cell5= newrow.insertCell(2);
    cell5.innerHTML=document.getElementById("Gender").value;
  
    var cell3= newrow.insertCell(3);
    cell3.innerHTML=document.getElementById("address").value;
  
    var cell4= newrow.insertCell(4);
    cell4.innerHTML=document.getElementById("Pincode").value;
    
    let food = () =>{
      let s=[];
      if(document.getElementById("Burger").checked == true)  s.push("Burger");
      if(document.getElementById("Pizza").checked == true) s.push("Pizza");
      document.getElementById("chaap").checked == true ? s.push("Rice"):s;
      document.getElementById("chole-bhature").checked == true ? s.push("chole-bhature"):s;
      document.getElementById("pav-bhaji").checked == true ? s.push("pav-bhaji"):s;
      
      return s;
      };
  
    var cell6= newrow.insertCell(5);
      cell6.innerHTML= food();
  
    var cell7= newrow.insertCell(6);
    cell7.innerHTML=document.getElementById("State").value;
  
    var cell8= newrow.insertCell(7);
    cell8.innerHTML=document.getElementById("Country").value;
  
    document.getElementById("form").reset();
  }
  function Validation()  
  {  
    var boxes = document.getElementsByName("food");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < boxes.length; i++)  
    {  
        if(boxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems<3)  
    {  
        alert("you should atleast choose three");  
        return false;  
    }
    if(numberOfCheckedItems>=3){
        add();
    }
  }  
  