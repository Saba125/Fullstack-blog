import jwt from 'jsonwebtoken'
export const authVerify = async(req, res, next) => {
    const token = req.cookies.accessToken
    if (!token) return res.status(404).json("Must be authenticated");
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) return res.status(500).send("Token is not valid");
      req.userId = payload.id;
    });
    next()
}