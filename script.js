
async function fetchAdvice(){
    const adviceId = document.querySelector('#adviceId');
    const adviceContent = document.querySelector('#card-content');

    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    adviceId.textContent = data.slip.id;
    adviceContent.textContent = `"${data.slip.advice}"`
    console.log(data);
    
}