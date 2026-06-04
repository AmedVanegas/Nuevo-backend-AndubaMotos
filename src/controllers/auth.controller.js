import { validatePassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserbyUsername } from "../services/user.service.js";

const loginUser = async (req, res) => {
  const inputData = req.body; // toma el usuario y contraseña

  // 2.Verificar si el usuario exisite

  const dbUser = await dbGetUserbyUsername(inputData.username);

  if (!dbUser) {
    return res.status(400).json({
      error: "El usuario no existe, por favor registrese",
    });
  }

  // 3. Verificar si la contraseña es valida

  const validatedPassword = validatePassword(
    inputData.password,
    dbUser.password,
  );

  if (!validatedPassword) {
    return res.status(400).json({
      msg: "Contraseña incorrecta",
    });
  }

  // 4. Generar el token

  const payload = {
    _id: dbUser._id,
    name: dbUser.name,
    email: dbUser.email,
    rol: dbUser.rol,
    status: dbUser.status,
  };

  const token = generateToken(payload);

  // 5.Convertir un BJSON a JSON para eliminar password

  const dbUserObject = dbUser.toObject()

  delete dbUserObject.password

  // 6.responde al cliente

  res.json({
    msg: "login exitoso",
    token,
    data: dbUserObject
  });
};

export { loginUser };
