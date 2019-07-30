const mongoose = require('mongoose');

// configurar conexão com ao banco mongo usando mongoose / a rota 'treinando' indica que banco de dados será usado, no caso, será usando o bd 'treinando', se não existir um banco com esse nome, então o banco será criado automaticamente
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/treinando", {useNewUrlParser: true})
    .then(suc => console.log('Conexão com banco de dados iniciada!'))
    .catch(err => console.log('Erro na conexão ' + err))

// Model - Usuários

const userSchema = mongoose.Schema({
    //mongodb usa os tipos String | Number | Object | Date
    nome: {
        type: String,
        require: true
    }, 
    sobrenome: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

//definir o nome da collection para o model
mongoose.model('usuarios', userSchema)

//criar registro  e salvar esse registro
const Eduardo = mongoose.model('usuarios')

new Eduardo({
    nome: 'Teste',
    sobrenome: 'Ramos',
    idade: 241,
    email: 'edsadd@ewewd'
}).save()
    .then(suc => console.log('Inserido com sucesso'))
    .catch(err => console.log('Erro ao inserir dados ' + err))