import jwt from 'jsonwebtoken';

export const verifyAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};