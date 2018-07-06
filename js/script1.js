function register1() {
    var myRegex = /^([a-z A-Z])+$/;
    var verif = document.getElementById("ftname").value;
if (myRegex.test(verif)) {
    
    document.getElementById("ftname").style.borderColor = "green";
     
}

else if (verif === '')
    {
        document.getElementById("ftname").style.borderColor = "red";
    }
else
{
    document.getElementById("ftname").style.borderColor = "red";
}

}


function register2() {
    var myRegex = /^([a-z A-Z])+$/;
    var verif = document.getElementById("lname").value;
if (myRegex.test(verif)) {
    
    document.getElementById("lname").style.borderColor = "green";
}

else if (verif === '')
    {
        document.getElementById("lname").style.borderColor = "red";
    }
else
{
    document.getElementById("lname").style.borderColor = "red";
}

}

function vfpswd () {
   
    var pswd = document.getElementById("pass").value;
    if ( pswd === '' ) 
    {
        
        document.getElementById("pass").style.borderColor = "red";
        alert('password contains 8 characters');
    }

    else if ((pswd.length <= 8))
    {
        document.getElementById("pass").style.borderColor = "green";
        alert('Password checked');
       
    }
    else
    {
        document.getElementById("pass").style.borderColor = "red";
        alert('password contains 8 characters');
    }


}

function vfmail () {
    var myRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const mail = document.getElementById("email1").value;
    if (myRegex.test(mail)) 
    {

        document.getElementById("email1").style.borderColor = "green";
    }

    else if (mail === '')
    {
        document.getElementById("email1").style.borderColor = "red";
    }
    else
    {
        document.getElementById("email1").style.borderColor = "red";
    }
}


function verifage () {
   
    var age1 = document.getElementById("age").value;
    if ( age1 === '' ) 
    {
        
        document.getElementById("age").style.borderColor = "red";
        
    }

    else if (age1 >=1 && age1 <=99)
    {
        document.getElementById("age").style.borderColor = "green";
       
       
    }
    else
    {
        document.getElementById("age").style.borderColor = "red";
 
 
    }



    
}


function veriftel () {
    var myRegex = /^([0-9])+$/;
    var tel1 = document.getElementById("numberphone").value;
    if ( tel1 === '' ) 
    {
        
        document.getElementById("numberphone").style.borderColor = "red";
        
    }

    else if ( (tel1.length <= 8 ) && (myRegex.test(tel1)))
    {
        document.getElementById("numberphone").style.borderColor = "green";
       
       
    }
    else
    {
        document.getElementById("numberphone").style.borderColor = "red";
    }
}


function veriftext() {
    var lg = document.getElementById("text1").value.length;
    
    if (lg>5) {
        document.getElementById("text1").style.borderColor = "green";
    }
    
    else
    {document.getElementById("text1").style.borderColor = "red";

    }

   
}


