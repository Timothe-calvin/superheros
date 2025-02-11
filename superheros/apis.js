const Hero = async() => {
try {
    let response= await fetch("https://akabab.github.io/superhero-api/api/all.json");
     const data= await response.json();
  return data;
 }
  catch(error) {
     console.log(error);
 }
};

