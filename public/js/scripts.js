console.log("Inicio del script")
fetch('https://starwars-developuptc.vercel.app/')
    .then(resp => resp.json())
    .then(data => {
        const tbody = document.getElementById('tbody')
        console.log(data)

        const select1 = document.getElementById('select1')
        const select2 = document.getElementById('select2')

        data.data.forEach(element => {
            const option = document.createElement('option')
            option.value = element.homeworld
            option.textContent = element.homeworld
            select1.appendChild(option)
        })

        data.data.forEach(element => {
            const option = document.createElement('option')
            option.value = element.species
            option.textContent = element.species
            select2.appendChild(option)
        })

        data.data.forEach(element => {
            const tr = document.createElement('tr')
            const colName = document.createElement('td')
            colName.appendChild(document.createTextNode(element.name))
            tr.appendChild(colName)

            const gender = document.createElement('td')
            gender.appendChild(document.createTextNode(element.gender))
            tr.appendChild(gender)

            const homeworld = document.createElement('td')
            homeworld.appendChild(document.createTextNode(element.homeworld))
            tr.appendChild(homeworld)

            const species = document.createElement('td')
            species.appendChild(document.createTextNode(element.species))
            tr.appendChild(species)

            const btn = document.createElement('button')
            btn.appendChild(document.createTextNode('Ver a detalle'))
            tr.appendChild(btn)

            btn.onclick = () => {
                //Crear la tabla secundaria de detalles
                buscarDetalles(element._id)
            }

            tbody.appendChild(tr)
        })

    })
    .catch(error => console.log(error))

const tbody = document.getElementById('tbody')
const tbody2 = document.getElementById('tbody2')

function buscarDetalles(id) {
    const idElement = id
    fetch(`https://starwars-developuptc.vercel.app/${idElement}`)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data)
            //console.log(data.data.name)
            tbody2.innerHTML = ''
            if (idElement == data.data._id) {
                //alert(idElement)
                const tr = document.createElement('tr')
                const colName = document.createElement('td')
                colName.appendChild(document.createTextNode(data.data.name))
                tr.appendChild(colName)

                const height = document.createElement('td')
                height.appendChild(document.createTextNode(data.data.height))
                tr.appendChild(height)

                const mass = document.createElement('td')
                mass.appendChild(document.createTextNode(data.data.mass))
                tr.appendChild(mass)

                const hair_color = document.createElement('td')
                hair_color.appendChild(document.createTextNode(data.data.hair_color))
                tr.appendChild(hair_color)

                const skin_color = document.createElement('td')
                skin_color.appendChild(document.createTextNode(data.data.skin_color))
                tr.appendChild(skin_color)

                const eye_color = document.createElement('td')
                eye_color.appendChild(document.createTextNode(data.data.eye_color))
                tr.appendChild(eye_color)

                const birth_year = document.createElement('td')
                birth_year.appendChild(document.createTextNode(data.data.birth_year))
                tr.appendChild(birth_year)

                const gender = document.createElement('td')
                gender.appendChild(document.createTextNode(data.data.gender))
                tr.appendChild(gender)

                const homeworld = document.createElement('td')
                homeworld.appendChild(document.createTextNode(data.data.homeworld))
                tr.appendChild(homeworld)

                const species = document.createElement('td')
                species.appendChild(document.createTextNode(data.data.species))
                tr.appendChild(species)

                tbody2.appendChild(tr)
            }
        })
        .catch(error => console.log(error))
}

function actualizarTabla() {
    tbody.innerHTML = ''
    const slc1 = document.getElementById('select1')
    const slc2 = document.getElementById('select2')
    const valslc1 = slc1.options[slc1.selectedIndex].value
    const valslc2 = slc2.options[slc2.selectedIndex].value

    fetch('https://starwars-developuptc.vercel.app/')
        .then(resp => resp.json())
        .then(data => {
            data.data.forEach(element => {
                if (element.homeworld == valslc1 || element.gender == valslc2) {
                    const tr = document.createElement('tr')
                    const colName = document.createElement('td')
                    colName.appendChild(document.createTextNode(element.name))
                    tr.appendChild(colName)

                    const gender = document.createElement('td')
                    gender.appendChild(document.createTextNode(element.gender))
                    tr.appendChild(gender)

                    const homeworld = document.createElement('td')
                    homeworld.appendChild(document.createTextNode(element.homeworld))
                    tr.appendChild(homeworld)

                    const species = document.createElement('td')
                    species.appendChild(document.createTextNode(element.species))
                    tr.appendChild(species)

                    const btn = document.createElement('button')
                    btn.appendChild(document.createTextNode('Ver a detalle'))
                    tr.appendChild(btn)


                    btn.onclick = () => {
                        //Crear la tabla secundaria de detalles
                        buscarDetalles(element._id)
                    }
                    tbody.appendChild(tr)
                }
            })
        })
        .catch(error => console.log(error))
}

document.getElementById('select1').addEventListener('change', (event) => {
    event.preventDefault()
    actualizarTabla()
})
document.getElementById('select2').addEventListener('change', (event) => {
    event.preventDefault()
    actualizarTabla()
})
