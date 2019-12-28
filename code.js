function police()
{
    var input = document.getElementById("input").value;

    if(input >10)
        document.getElementById("output").innerHTML = "Good luck Batman";
    else if ( (input <= 10) && (input > 5) )
        document.getElementById("output").innerHTML = "I could use some help";
    else
        document.getElementById("output").innerHTML = "No Need For Backup";
}