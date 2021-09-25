registerCity = () => {
    const htmlEls = {
        cityName: document.getElementById('cityName'),
        cityLat: document.getElementById('cityLat'),
        cityLng: document.getElementById('cityLng'),
        registerCityBtn: document.getElementById('registerCity')
    }

    if (htmlEls.cityName.value == '' || htmlEls.cityLat.value == '' || htmlEls.cityLng.value == '') {
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
            if (response.status == 200) {
                htmlEls.cityName.value = ''
                htmlEls.cityLat.value = ''
                htmlEls.cityLng.value = ''
                htmlEls.registerCityBtn.classList.remove('disabled')
                alert('Cidade cadastrada!')
            } else {
                alert('Erro ao cadastrar a cidade, tente novamente!')
            }
        });
    }
}