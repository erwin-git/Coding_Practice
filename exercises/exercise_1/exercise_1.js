function sprawdz()
{
    var liczba = document.getElementById("pole").value;
    

    if (liczba>0) document.getElementById("wynik").innerHTML="DODATNIA";
    else if (liczba<0) document.getElementById("wynik").innerHTML="UJEMNA";
    else if (liczba==0) document.getElementById("wynik").innerHTML="ZERO";
    else document.getElementById("wynik").innerHTML="TO NIE JEST LICZBA";
}