registerCity = () => {
    const htmlEls = {
        cityName: document.getElementById('cityName').value,
        cityLat: document.getElementById('cityLat').value,
        cityLng: document.getElementById('cityLng').value,
        registerCityBtn: document.getElementById('registerCity')
    }

    if (htmlEls.cityName == '' || htmlEls.cityLat == '' || htmlEls.cityLng == '') {
        alert('Verifique se vc preencheu todos os campos!')
    } else {
        htmlEls.registerCityBtn.classList.add('disabled')

        var settings = {
            "url": "http://localhost:3000/registerCity",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "cityName": document.getElementById('cityName').value,
                "cityLat": document.getElementById('cityLat').value,
                "cityLng": document.getElementById('cityLng').value
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    console.log(htmlEls)
}