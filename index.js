const express=require('express');
const app= express();
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/api/:n',(req,res)=>{
    let n=parseInt(req.params.n);
    let count=0
    if(n>50000000000)n=50000000000;
    for(let i=0;i<n;i++){
        count+=i;
    }
    res.send(`count is ${count}`)
})
app.listen(4001,(err)=>{
    err?console.log(err):console.log(`application is listening on host 4001`)
})
