const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/contact', function (request, response){
    response.render('contact', {
        title: 'My Contact',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890'
    })
})

app.use('/fio', function (request, response){
    response.render('fio', {
        fam: 'Zabytulin',
        name: 'Igor',
        otc: 'Ivanych',
    })

})

app.use('/bio', function (request, response){
    response.render('bio', {
        bio1: 'My name is Igor, mne 16 let, ya rabotay profesionalnym hakerom v gorode Pod-Zalypinsk',
        bio2: 'ya lyublyu igrat v bravl stars, a tak je razrabotal chit na bs pod nazvaniem Brawl Sex',
    })

})
app.use('/naviky', function (request, response){
    response.render('naviky', {
        navik: 'Moi Naviky:',
        navik1: 'vzlom brawl starsa',
        navik2: 'vzlom telika v moem gorode',
        uvlechenia: 'Moi uvlechenia:',
        uvlechenia1: 'igray v brawl stars'
    })

})
app.use('/languages', function (request, response){
    response.render('languages', {
        languages: 'Yaziki kotorie ya znay',
        csharp: 'C#',
        cplus: 'c++',
        python: 'python',
    })

})
app.use('/', function (request, response) {
    response.render('gefdhbdshba')
})
app.listen(3000)