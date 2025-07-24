 
        document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                checkmyresult();
                document.getElementById('marks').value = "";
            }
        })
        // 15 line of codes 
       function checkmyresult(){
        let result;
        let marks = document.getElementById("marks").value;
        if(marks >= 40){
           result =  "Congratulation Your have Pass the Exam with " + marks + " marks";
              document.getElementById("output").style.background = "green"
        }
        else if(marks < 40 ){
            result = "Sorry you failed in exam with " + marks +" marks"
         document.getElementById("output").style.background = "red"
        }
        else {
            result = "Please enter the right input."
            document.getElementById("output").style.background = "red"
        }
        document.getElementById("output").style.display = "flex"
        document.getElementById("output").innerHTML = result;
       }
//1 
    //1 
     //1 
     //1 
   //1 
   //1 
//1 
           //1 
//1 
              //1 
//1 
//1 
//1 
//1 
//1 
//1 
         //1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 