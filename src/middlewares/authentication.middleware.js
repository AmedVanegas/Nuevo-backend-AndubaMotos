import { verifyToken } from "../helpers/jwt.helper.js";

const authenticationUser = (req, res, next) => {

  // 1.Se obtiene el Token

  const token = req.header('Token')

  if(!token){

    return res.status(400).json({
      msg:'Sin token'
    })

  }

  // 2.Verificar formato del token 

  const tokenParts = token.split( '.' )

  if( tokenParts.length !== 3 ) {
        return res.status(400).json({
            msg: 'Formato del token invalido'
        });
    }

  // 3. Verificar la autenticidad del token
  const payload = verifyToken(token)

  console.log('payload', payload);
  console.log(payload)

  next();
};

export default authenticationUser;
