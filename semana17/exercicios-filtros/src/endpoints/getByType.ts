import { Request, Response } from 'express'
import selectByType from '../data/selectByType'
import { user } from '../types'

export const getUserByType = async (req:Request, res:Response): Promise<void> => {

    try {
        const type:string = req.params.type as string

        if(!type) {
            res.statusCode = 406
            throw new Error("Escreva um tipo");
        } else {
            const users: user[] = await selectByType(type)

            if(!users.length) {
                res.statusCode = 404
                throw new Error("Nenhum usuario encontrado com esse tipo");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}