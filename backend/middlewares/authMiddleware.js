const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Kullanici = require("../models/kullaniciModel");

const kullaniciKontrol = asyncHandler(async (req, res, next) => {
    let sifrelenmisToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            sifrelenmisToken = req.headers.authorization.split(' ')[1];
            const token = jwt.verify(sifrelenmisToken, process.env.JWT_SECRET);
            req.user = await Kullanici.findById(token.id).select('-parola');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Giriş Yapılamaz!')
        }
    }

    if (!sifrelenmisToken) {
        res.status(401);
        throw new Error('Giriş Yapılamaz, Token Bulunamadı!')
    }


})

module.exports = { kullaniciKontrol }