const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Recepção" },
        { name: "PEP" },
        { name: "Compras" },
        { name: "Radiologia" },
        { name: "Estoque" },
        { name: "Enfermaria Internação" },        
      ]
    });

    console.log("Successo");
  } catch (error) {
    console.log("Erro ao propagar as categorias do banco de dados", error);
  } finally {
    await database.$disconnect();
  }
}

main();