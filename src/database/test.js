const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // insert data into table
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6465874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9845612345",
        images: [
            "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // consult table data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);
    
    // consult only one orphanage by ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(orphanage);

    // remove data from table
    //await db.run("DELETE FROM tabela WHERE id = '4'");
})