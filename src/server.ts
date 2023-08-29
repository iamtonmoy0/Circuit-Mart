import express ,{Application} from 'express';
// initializing application
const init=():Application=>{
let app = express();
let routes=[
	{
		method:'get',
		path: '/new',
		headers:(req:express.Request,res:express.Response)=>{
			res.send(`route is working \n on method ${req.method} `)
		}
	}
]
routes.forEach(route=>{
	(app as any)[route.method](route.path,route.headers);
})

// basic route root
app.get('/',(req,res)=>{
	res.send('hello world')
})


return app;
}

const app = init();
app.listen(3000,()=>{
	console.log('Listening on port 3000');
})