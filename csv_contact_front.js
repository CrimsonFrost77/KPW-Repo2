fetch('/api/contact-info')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById('contact-table-body');
        data.forEach(row => {
            let tr = document.createElement('tr');
            Object.values(row).forEach(value => {
                let td = document.createElement('td');
                td.innerText = value;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    });
