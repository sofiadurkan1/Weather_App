const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
    const inputBtn = document.getElementById('input-btn').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=d22b41e1d8a5c6683e536eed748995c2')
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('des').innerText = description;


    })
    .catch(res => alert('Please Type Right City Name'))
});
