const express=require('express');
const cluster =require('cluster');
const numCPUs=require('os').cpus().length;
const app=express();
const port=3000;
if(cluster.isMaster){
    console.log(`master ${process.pid} is running`);
    for(let i=0;i<numCPUs;i++)
    {
        cluster.fork();
    }
    cluster.on('exit',(worker,code,singal)=>{
        console.log(`worker ${worker.process.pid} died `);
    });

}else{
    app.get('/',(req,res)=>{
        res.send('hello world');
    })
    app.get('/api/:n',(req,res)=>{
        let n=parseInt(req.params.n);
        let count=0;
        if(n>5000000000)n=500000
        for(let i=0;i<n;i++){
            count+=i;
        }
        res.send(`count is ${count}`);
    })
    app.listen(5000,(err)=>{
        err?console.log(`failed to listen on port ${port}`)
        :console.log(`application server in listening on port ${port}`);
    })
}