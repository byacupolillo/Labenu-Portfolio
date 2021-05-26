import { Request, Response } from 'express'
import selectByName from '../data/selectByName'
import { user } from "../types"

export const getUserByName = async (req:Request, res:Response): Promise<void> => {
    try {
        const name:string = req.params.name as string

        if(!name) {
            res.statusCode = 406
            throw new Error("Insira um nome.");
        } else {
            const users: user[] = await selectByName(name)

            if(!users.length) {
                res.statusCode = 404
                throw new Error("Nenhum usuário encontrado");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}