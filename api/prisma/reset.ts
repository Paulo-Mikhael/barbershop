import { db } from "./db";

async function reset() {
  db.connect();

  console.log("Etapas do processo de reset");
  await db.orm.public.ServiceHistory.where({}).deleteAll();
  console.log("├── Tabela ServiceHistory excluída");
  await db.orm.public.FavoriteBarbershop.where({}).deleteAll();
  console.log("├── Tabela FavoriteBarbershop excluída");
  await db.orm.public.Appointment.where({}).deleteAll();
  console.log("├── Tabela Appointment excluída");

  await db.orm.public.Avatar.where({}).deleteAll();
  console.log("├── Tabela Avatar excluída");
  await db.orm.public.Profile.where({}).deleteAll();
  console.log("├── Tabela Profile excluída");
  await db.orm.public.Client.where({}).deleteAll();
  console.log("├── Tabela Client excluída");

  await db.orm.public.Service.where({}).deleteAll();
  console.log("├── Tabela Service excluída");
  await db.orm.public.Employee.where({}).deleteAll();
  console.log("├── Tabela Employee excluída");
  await db.orm.public.Barbershop.where({}).deleteAll();
  console.log("├── Tabela Barbershop excluída");

  console.log("└── Banco de dados resetado");
}

reset()
  .catch((error) => {
    console.error("\n❌ Erro ao executar reset do banco:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
