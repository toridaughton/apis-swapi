

let residentsBtn = document.querySelector(`#residents-btn`)

const clickBtn = event => {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(res => {
        console.log(res.data.results[0].residents)
        let residents = res.data.results[0].residents
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then(()=> {
                let residentsHeading = document.createElement(`h2`)
                residentsHeading.textContent = residents[i].content_url
                body.appendChild(residentsHeading)
            })
        }
    })
    console.log(`button clicked`)
}

residentsBtn.addEventListener(`click`, clickBtn())