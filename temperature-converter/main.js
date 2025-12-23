document.querySelector('#temp').addEventListener('click',convert)

function convert(){
    
    let celcius=document.querySelector('#cel').value

    celcius = celcius * 9/5 + 32;

    document.querySelector('#placeResult').innerText="Result is " + celcius
}