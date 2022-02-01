const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "John",
        email: "john@example.com",
        password: "123456",
      },
      {
        name: "Jane",
        email: "jane@example.com",
        password: "123456",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.category.createMany({
    data: [{ name: "Phones" }, { name: "Laptops" }, { name: "Tablets" }],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Samsung Note 10+",
        description: "Samsung Note 10+",
        price: 1000,
        stock: 10,
        sku: "SAMSUNG-NOTE-10+",
        categoryId: 1
      },
      {
        name: "Macbook Pro",
        description: "Macbook Pro",
        price: 2000,
        stock: 10,
        sku: "MACBOOK-PRO",
        categoryId: 2
      },
      {
        name: "Iphone X",
        description: "Iphone X",
        price: 3000,
        stock: 10,
        sku: "IPHONE-X",
        categoryId: 1
      }
    ],
    skipDuplicates: true,
  })

}

main()
.catch(e => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});