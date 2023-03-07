module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || "default", //busca a chave de segredo no arquivo auth, ideal que seja mais difícil que default
    expiresIn: "1d"
  }
}