console.log("Inicio del script")
fetch(`https://starwars-developuptc.vercel.app/`)
    .then(resp => resp.json())
    .then(data => {
        const tbody = document.getElementById('tbody')
        console.log(data)
        data.data.forEach(element => {

            

            const tr = document.createElement('tr')
            const colName = document.createElement('td')
            colName.appendChild(document.createTextNode(element.name))
            tr.appendChild(colName)

            const height = document.createElement('td')
            height.appendChild(document.createTextNode(element.height))
            tr.appendChild(height)

            const mass = document.createElement('td')
            mass.appendChild(document.createTextNode(element.mass))
            tr.appendChild(mass)

            const hair_color = document.createElement('td')
            hair_color.appendChild(document.createTextNode(element.hair_color))
            tr.appendChild(hair_color)

            const skin_color = document.createElement('td')
            skin_color.appendChild(document.createTextNode(element.skin_color))
            tr.appendChild(skin_color)

            const eye_color = document.createElement('td')
            eye_color.appendChild(document.createTextNode(element.eye_color))
            tr.appendChild(eye_color)

            const birth_year = document.createElement('td')
            birth_year.appendChild(document.createTextNode(element.birth_year))
            tr.appendChild(birth_year)

            const gender = document.createElement('td')
            gender.appendChild(document.createTextNode(element.gender))
            tr.appendChild(gender)

            const homeworld = document.createElement('td')
            homeworld.appendChild(document.createTextNode(element.homeworld))
            tr.appendChild(homeworld)

            const species = document.createElement('td')
            species.appendChild(document.createTextNode(element.species))
            tr.appendChild(species)

            tbody.appendChild(tr)

        })
            .catch(error => console.log(error))

    })