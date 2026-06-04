import jsonwebtoken from "jsonwebtoken";

const generateToken = (payload) => {
 try {
     return jsonwebtoken.sign(payload, "hola", { expiresIn: "1h" });
 } catch (error) {
    console.log(error)
    return null
 }
};

export { generateToken };
