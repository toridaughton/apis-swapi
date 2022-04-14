

let residentsBtn = document.querySelector(`#residents-btn`)

const clickBtn = event => {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(res => {
        console.log(res.data.results[0].residents)
        let residents = res.data.results[0].residents
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then((resTwo)=> {
                let body = document.querySelector('body')
                let residentsNames = document.createElement(`h2`)
                residentsNames.textContent = resTwo.data.name
                body.appendChild(residentsNames)
            })
        }
    })
    console.log(`button clicked`)
}

residentsBtn.addEventListener(`click`, clickBtn)

