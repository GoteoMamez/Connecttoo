import { CredentialsError, SystemError } from "../../com/errors.js"
import logic from "../logic/index.js"
import jwt from "../util/jsonwebtoken-promised.js"

const { JWT_SECRET } = process.env

const getUserNameHandler = (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const { sub: userId } = payload

                const { userId: targetUserId } = req.params

                try {
                    logic.getUserName(userId, targetUserId)
                        .then(name => res.json(name))
                        .catch((error) => next(error))

                } catch (error) {
                    next(error)
                }
            })
            .catch(error => next(new CredentialsError(error.message)))

    } catch (error) {
        next(error)
    }

}

export default getUserNameHandler
