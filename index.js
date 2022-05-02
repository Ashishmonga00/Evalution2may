// write js code here corresponding to index.html
// You should add submit event on the form


const form = document.getElementById("masaiForm");
const matchNum = document.getElementById("matchNum");
const teamb=document.getElementById("teamB");
const teama=document.getElementById("teamA");
const date=document.getElementById("date");

const venue=document.getElementById("venue");

const data = localStorage.getItem('schedule') || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    data.push({
        matchNumber: matchNum.value,
        teamA: teama.value,
        teamB: teamb.value,
        date: date.value,
        venue: venue.value
    });

    localStorage.setItem('schedule', JSON.stringify(data));
})
