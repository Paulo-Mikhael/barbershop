import { PostgresClient } from "@prisma/orm-postgres/runtime";
import { Contract } from "./contract";

export default async function reset({
  client,
}: {
  client: PostgresClient<Contract>;
}) {
  console.log("Etapas do processo de reset");
  await client.orm.public.ServiceHistory.where({}).deleteAll();
  console.log("├── Tabela ServiceHistory excluída");
  await client.orm.public.FavoriteBarbershop.where({}).deleteAll();
  console.log("├── Tabela FavoriteBarbershop excluída");
  await client.orm.public.Appointment.where({}).deleteAll();
  console.log("├── Tabela Appointment excluída");

  await client.orm.public.Avatar.where({}).deleteAll();
  console.log("├── Tabela Avatar excluída");
  await client.orm.public.Profile.where({}).deleteAll();
  console.log("├── Tabela Profile excluída");
  await client.orm.public.Client.where({}).deleteAll();
  console.log("├── Tabela Client excluída");

  await client.orm.public.Service.where({}).deleteAll();
  console.log("├── Tabela Service excluída");
  await client.orm.public.Employee.where({}).deleteAll();
  console.log("├── Tabela Employee excluída");
  await client.orm.public.Barbershop.where({}).deleteAll();
  console.log("├── Tabela Barbershop excluída");

  console.log("└── Banco de dados resetado");
}
