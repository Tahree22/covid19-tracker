let affected_states = [];
let lab_confirmed = [];
let on_admission = [];
let discharged_numbers = [];
let death_numbers = [];

// const root = "https://documenter.getpostman.com/view/9215231/Szf549gB";


fetch('https://covidnigeria.herokuapp.com/api')
.then(response => console.log(response.json()))
.then(json => console.log(json));
