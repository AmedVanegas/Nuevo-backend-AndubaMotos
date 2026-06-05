import { validatePassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserbyUsername } from "../services/user.service.js";

const loginUser = async (req, res) => {
  try {
    const inputData = req.body; // toma el usuario y contraseña

    // 2.Verificar si el usuario exisite

    if (!inputData.password) {
      throw new Error("Ingrese la contraseña");
    }

    const dbUser = await dbGetUserbyUsername(inputData.username);

    if (!dbUser) {
      console.log(dbUser)
      throw new Error("El usuario no existe, por favor registrese");
    }

    // 3. Verificar si la contraseña es valida

    const validatedPassword = validatePassword(
      inputData.password,
      dbUser.password,
    );

    if (!validatedPassword) {
      throw new Error("Contraseña incorrecta");
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

    if (token === null) {
      throw new Error("No se pudo generar el token de acceso");
    }

    // 5.Convertir un BJSON a JSON para eliminar password

    const dbUserObject = dbUser.toObject();

    delete dbUserObject.password;

    // 6.responde al cliente

    res.json({
      msg: "login exitoso",
      token,
      data: dbUserObject,
    });
  } catch (error) {
    console.log(error);

    if (
      error.message.includes("Ingrese") ||
      error.message.includes("Contraseña incorrecta") ||
      error.message.includes("El usuario no existe")

    ) {
      res.status(400).json({
        msg: error.message,
      });
    }

    if (error.message.includes("No se pudo generar el token de acceso")) {
      res.status(500).json({
        msg: error.message,
      });
    }
    res.status(500).json({
      msg: "Ocurrió un error en el servidor durante el login",
    });
  }
};

const renewToken = (req, res)=>{

  res.json({
    msg:'se renueva el token'
  })

}
export { loginUser, renewToken };
