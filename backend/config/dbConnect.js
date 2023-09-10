import mongoose from 'mongoose'

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongod connected with server: ${data.connection.host}`)
    })
}

export default dbConnect; 