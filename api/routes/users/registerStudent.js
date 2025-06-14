import logic from '../../logic/index.js'


const { JWT_SECRET } = process.env

//registerStudent

export default  async (req, res, next) => {

    try {
        const { userId } = req
       
        const { name, surname, email, password } = req.body

        await logic.registerStudent(userId, name, surname, email, password)
        
        res.status(201).send()      

    } catch (error) {
        next(error)
    }
}