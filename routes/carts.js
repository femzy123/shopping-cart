const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  try {
    const cart = await prisma.cart.findMany({
      include: { product: true },
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Fetch a user's cart
router.get("/:userId", async (req, res) => {
  try {
    const cart = await prisma.cart.findMany({
      where: { userId: Number(req.params.userId) },
      include: { product: true },
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const cart = await prisma.cart.create({
      data: req.body,
    });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cart = await prisma.cart.update({
      where: { id: Number(req.params.id) },
      data: {quantity: req.body.quantity},
      include: { product: true },
    })
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const cart = await prisma.cart.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send("Cart Item deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
