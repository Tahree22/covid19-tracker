const table = document.getElementById("table")


fetch('https://covidnigeria.herokuapp.com/api')
  .then(response => response.json())
    .then(json =>
        json.data.states.map((value,index)=>{
        const tr = document.createElement('tr')
        const affected_states = document.createElement('td')
        const lab_confirmed = document.createElement('td')
        const on_admission = document.createElement('td')
        const discharged_numbers = document.createElement('td')
        const death_numbers  = document.createElement('td')

        affected_states.setAttribute("id","affected_states")
        lab_confirmed.setAttribute("id","lab_confirmed")
        on_admission.setAttribute("id","on_admission")
        discharged_numbers.setAttribute("id","discharged_numbers")
        death_numbers.setAttribute("id","death_numbers")

        affected_states.textContent = value.state
        lab_confirmed.textContent = value.confirmedCases
        on_admission.textContent = value.casesOnAdmission
        discharged_numbers.textContent = value.discharged
        death_numbers.textContent =value.death

        tr.appendChild(affected_states)
        tr.appendChild(lab_confirmed)
        tr.appendChild(on_admission)
        tr.appendChild(discharged_numbers)
        tr.appendChild(death_numbers)

        table.appendChild(tr)
      })
    ).catch(err=>console.log(err))
