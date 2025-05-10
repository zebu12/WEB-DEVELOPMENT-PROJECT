import expess from "express";

const app = expess();

const port = 3000;

app.get('/',(req, res)=>{
    res.send("<h1>Home Page</h1>");
});
app.get('/about', (req, res)=>{
    res.send(`
        <h1>About Me</h1>
        <p>My name is Jean-Pierre</p>
        `);
});

app.get('/contact', (req,res)=>{
    res.send(`

        <h1>Contact Me</h1>
        
        <lu>
            <li>Jean-Pierre Salum</li>
            <li>073-909 38 50</li>
            <li>Storgatan 65C</li>
            <li>365 42</li>
            <li>Hovmantorp.</li>
        </lu>
        `);
});
app.listen(port, ()=>{
    console.log(`my https is listen on the port ${port}`);
})