const data = JSON.parse(localStorage.getItem('schedule')) || [];
console.log(data)
let tbody =document.querySelector('tbody');
data.forEach((e) => {
    let tr = document.createElement('tr');
    console.log(e)
    for(let key in e){
        let td = document.createElement('td');
        td.textContent = e[key]
        console.log(key)
        tr.append(td)

    }

    tbody.append(tr);

    
})

localStorage.setItem('favourites', JSON.stringify(button));