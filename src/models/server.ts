import express, { Application, Request, Response } from 'express';
import router from '../router/padron';
import sequelize from '../db/conn';
import cors from 'cors';

class Server{

    private port: string;
    private api: Application;

    constructor(){
        this.port = process.env.PORT || '3001';
        this.api = express();
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.api.listen( this.port, ()=>{
            console.log(`aplicacion corriendo en el puerto ${this.port}`)
        } )
    }

    routes(){
        this.api.get('/',( req: Request, res:Response)=>{
            res.json({
                msg:'aplicacion corriendo chidoliro'
            })
        })
        this.api.use('/api/padron/',router)
    }

    midlewares(){
        this.api.use( express.json() )
        this.api.use(cors())
    }

    async dbConnection(){
        
        try {
            await sequelize.authenticate();
            console.log('base de datos conectada')
        } catch (error) {
            console.log(error)
            console.log("error en la conexion")
        }
        
    }

}

export default Server;