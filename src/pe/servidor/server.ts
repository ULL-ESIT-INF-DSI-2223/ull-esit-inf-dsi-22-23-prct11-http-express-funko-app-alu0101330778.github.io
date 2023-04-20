/*const app = express();

app.get('/execmd', (_, res) => {
  const command = typeof(_.query.cmd) == 'string' ? _.query.cmd : ""
  const args = typeof(_.query.args) == 'string' ? _.query.args : ""

  const argumentos = args.split(' ');
  //Buscar que el comando exista
  if (command == "") {
    //Si no existe, devolver error en formato JSON
    res.send({error: 'No command specified'});
  }

  const commando = spawn(command, argumentos )
  
  

  commando.on('error', (errormsg) => {
    res.send({"error": errormsg});
  });

  commando.stdout.on('data', (data) => {
    res.send({type: 'data', 'content' : data.toString()});
  });

  commando.stderr.on('data', (data) => {
    res.send({error: "No se ha podido ejecutar el comando"});
  });

  commando.on('close', (code) => {
    //
  });
});


app.get('/*', (req, res) => {
  res.send({error: 'Bad address'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});*/
