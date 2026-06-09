const express =require('express');
const cors=require('cors');
const {Pool}=require("pg");



const app=express();

app.use(cors());

app.use(express.json({strict:true}));


const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://postgres:AppSecrets@db:5432/mydb"
});
app.get('/api/time',async(req,res)=>{

    try{
        const dbRes=await pool.query('Select now();')
        res.json({time:dbRes.rows[0].now});
    }catch(err){
        res.status(500).json({error:err.message});
    }
})

app.post("/api/data",async(req,res)=>{
    try{
        const {message}=req.body;

        await pool.query(
            'INSERT INTO logs (message) VALUES ($1)',
            [message]
        );

        res.json({
            status:true,
            message:"Data inserted successfully"
        });

    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
});

app.listen(5001,()=>console.log("API is running on port 5001"));
