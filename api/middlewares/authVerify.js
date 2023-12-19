import jwt from 'jsonwebtoken'
export const authVerify = async(req, res) => {
    const token = res.cookies.accessToken
    if (!token) return res.status(404).json("Must be authenticated");
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) return res.status("Error is not valid");
      req.userId = payload.id;
    });
    next()
}