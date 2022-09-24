const tables = document.querySelectorAll('table') ? document.querySelectorAll('table') : null;

if (tables != null) {
    tables.forEach((table) => {
        tableRows = table.rows;
        for (let row of tableRows) {
            row.classList.add('hn-hidden');
        }
    });
}

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('hn-show');
                }, 250);

            } else {
                entry.target.classList.remove('hn-show');
            }
        });
    })

    const hiddenElements = document.querySelectorAll('.hn-hidden');
    hiddenElements.forEach((el) => observer.observe(el));
