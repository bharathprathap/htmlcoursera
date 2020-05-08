var nameset=["Bharath","Prathap","Jeremy","Anand","Abijith","Jayashree"];

var speakWord1 = "Hello";
var speakWord2 = "Good Bye";
  
function speak(name) 
{
      
    if (name[0]==('J' || 'j'))
    {
        console.log(speakWord2 + " " + name);
    }
    else
    console.log(speakWord1 + " " + name);
}

    
for (var name=0;name<nameset.length;name++){
  speak(nameset[name]);
}