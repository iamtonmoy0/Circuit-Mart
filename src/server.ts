import express ,{Application} from 'express';

const init=():Application=>{
let app = express();

app.get('/',(req,res)=>{
	res.send('hello world')
})

return app;
}

const app = init();
app.listen(3000,()=>{
	console.log('Listening on port 3000');
})