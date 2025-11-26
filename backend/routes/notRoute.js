const express = require("express");

const router = express.Router();

const { getNotlar, setNotlar, updateNotlar, deleteNotlar } = require("../controllers/notController");

const { kullaniciKontrol } = require("../middlewares/authMiddleware");
// router.get("/", getNotlar);
// router.post("/", setNotlar);
// router.put("/:id", updateNotlar);
// router.delete("/:id", deleteNotlar);

//?yukarıdaki route yapısını daha temiz yazalım. Zincirleme route yapısı kullanalım.
router.route('/').get(kullaniciKontrol, getNotlar).post(kullaniciKontrol, setNotlar);
router.route('/:id').put(kullaniciKontrol, updateNotlar).delete(kullaniciKontrol, deleteNotlar);

module.exports = router;