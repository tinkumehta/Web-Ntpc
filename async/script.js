

 async function f() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const r = await res.json();
    console.log(r[0].userId);
    console.log(r[0].id);
    console.log(r[0].title);
    console.log(r[0].body);
    r.forEach(p => document.write(p.title)
    )
    
}

f();