import { Request, Response } from "express"
import padron from "../models/padron"


export const getForms = async(req:Request, res:Response)=>{

    const productos = await padron.findAll();

    res.json( productos )


}

export const getForm = async(req:Request, res:Response)=>{

    const {id} = req.params
    const productos = await padron.findByPk(id)


    if (productos) {
        
        res.json( productos )

    } else {
        res.json({
            msg: `no existe un producto con el id ${id}`
        })
    }

}

export const deleteForm = (req:Request, res:Response)=>{ 

    const {id} = req.params

    res.json({
        id,
        msg:'delete Form'
    })

}

export const postForm = (req:Request, res:Response)=>{

    const {body} = req

    res.json({
        body,
        msg:'post Form'
    })

}

export const putForm = async(req:Request, res:Response)=>{

    const {body} = req
    const {id} = req.params

    try {
        
        const productos = await padron.findByPk( id )

        if (productos) {
            
            productos.update(body)
            res.json({
                msg: 'producto actualizado',
                productos
            })

        } else {
            res.json({
                msg: ` no existe un producto con el id ${id}`
            })
        }

    } catch (error) {
        res.json({
            msg:'ups algo paso'
        })
    }




}
