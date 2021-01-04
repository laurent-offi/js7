function showInfos()

 	{
                
    	let shoeSize = document.form.shoeSize.value;
        let yearOfBirth = document.form.yearOfBirth.value;

       let result = ((shoeSize*2) + 5) *50 - yearOfBirth + 1771;

       		if (shoeSize == "") {
        		document.getElementById("error1").innerHTML = "Votre pointure ne peut pas être vide. <br>";
            document.getElementById("error2").innerHTML = "";
            document.getElementById("show").innerHTML = "";
      		} else if(yearOfBirth == "") {
            document.getElementById("error1").innerHTML = "";
        		document.getElementById("error2").innerHTML = "L'année de naissance ne peut pas être vide. <br>";
            document.getElementById("show").innerHTML = "";
       		} else {
              document.getElementById("error1").innerHTML = "";
              document.getElementById("error2").innerHTML = "";
              document.getElementById("show").innerHTML = "Le résulat est égal à " + result;
       		}
   	}