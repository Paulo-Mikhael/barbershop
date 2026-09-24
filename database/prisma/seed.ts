import "dotenv/config";
import { db } from "./db";
import reset from "./reset_function";

async function main() {
  db.connect();

  await reset({ client: db });

  console.log("Etapas do processo de seed");
  // ============================================================
  // BARBEARIAS
  // ============================================================

  const barbershop1 = await db.orm.public.Barbershop.create({
    name: "Barbearia Central",
    phone: "(92) 3234-5678",
    email: "contato@barbeariacentral.com",
    address: {
      cep: "69005-000",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Centro",
      house_number: "125",
    },
  });

  const barbershop2 = await db.orm.public.Barbershop.create({
    name: "Barber House",
    phone: "(92) 3345-6789",
    email: "contato@barberhouse.com",
    address: {
      cep: "69050-000",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Adrianópolis",
      house_number: "420",
    },
  });

  console.log("├── Barbearias criadas");

  // ============================================================
  // FUNCIONÁRIOS
  // ============================================================

  const employee1 = await db.orm.public.Employee.create({
    barbershop_id: barbershop1.id,
    name: "Carlos Eduardo",
    email: "carlos@barbeariacentral.com",
    phone: "(92) 99111-2233",
    position: "manager",
    active: true,
    address: {
      cep: "69010-100",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Centro",
      house_number: "80",
    },
  });

  const employee2 = await db.orm.public.Employee.create({
    barbershop_id: barbershop1.id,
    name: "Rafael Silva",
    email: "rafael@barbeariacentral.com",
    phone: "(92) 99222-3344",
    position: "employee",
    active: true,
    address: {
      cep: "69020-200",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Compensa",
      house_number: "145",
    },
  });

  const employee3 = await db.orm.public.Employee.create({
    barbershop_id: barbershop2.id,
    name: "Lucas Martins",
    email: "lucas@barberhouse.com",
    phone: "(92) 99333-4455",
    position: "manager",
    active: true,
    address: {
      cep: "69057-300",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Adrianópolis",
      house_number: "215",
    },
  });

  console.log("├── Funcionários criados");

  // ============================================================
  // SERVIÇOS
  // ============================================================

  const haircut = await db.orm.public.Service.create({
    barbershop_id: barbershop1.id,
    name: "Corte Masculino",
    description: "Corte masculino tradicional ou moderno.",
    price: "35.0",
    minutes_duration: 40,
    active: true,
  });

  const beard = await db.orm.public.Service.create({
    barbershop_id: barbershop1.id,
    name: "Barba",
    description: "Modelagem e acabamento da barba.",
    price: "25.0",
    minutes_duration: 30,
    active: true,
  });

  const haircutBeard = await db.orm.public.Service.create({
    barbershop_id: barbershop1.id,
    name: "Corte + Barba",
    description: "Corte masculino completo com barba.",
    price: "55.0",
    minutes_duration: 70,
    active: true,
  });

  const kidsHaircut = await db.orm.public.Service.create({
    barbershop_id: barbershop2.id,
    name: "Corte Infantil",
    description: "Corte especialmente pensado para crianças.",
    price: "30.0",
    minutes_duration: 35,
    active: true,
  });

  const premiumHaircut = await db.orm.public.Service.create({
    barbershop_id: barbershop2.id,
    name: "Corte Premium",
    description: "Corte completo com acabamento detalhado.",
    price: "50.0",
    minutes_duration: 60,
    active: true,
  });

  console.log("├── Serviços criados");

  // ============================================================
  // CLIENTES
  // ============================================================

  const client1 = await db.orm.public.Client.create({
    name: "João Pedro",
    email: "joao@example.com",
    phone: "(92) 99444-5566",
    cpf: "12345678901",
    address: {
      cep: "69060-100",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Flores",
      house_number: "100",
    },
  });

  const client2 = await db.orm.public.Client.create({
    name: "Marcos Vinícius",
    email: "marcos@example.com",
    phone: "(92) 99555-6677",
    cpf: "23456789012",
    address: {
      cep: "69070-200",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Aleixo",
      house_number: "250",
    },
  });

  const client3 = await db.orm.public.Client.create({
    name: "Pedro Henrique",
    email: "pedro@example.com",
    phone: "(92) 99666-7788",
    cpf: "34567890123",
    address: {
      cep: "69080-300",
      uf: "AM",
      city: "Manaus",
      neighbourhood: "Jorge Teixeira",
      house_number: "315",
    },
  });

  console.log("├── Clientes criados");

  // ============================================================
  // PERFIS
  // ============================================================

  const profile1 = await db.orm.public.Profile.create({
    client_id: client1.id,
    username: "joaopedro",
    biography: "Apaixonado por cortes clássicos.",
    birthday: Temporal.Instant.from("2001-05-15T00:00:00Z"),
  });

  const profile2 = await db.orm.public.Profile.create({
    client_id: client2.id,
    username: "marcosv",
    biography: "Sempre em busca de um bom corte.",
    birthday: Temporal.Instant.from("1998-09-20T00:00:00Z"),
  });

  const profile3 = await db.orm.public.Profile.create({
    client_id: client3.id,
    username: "pedrohenrique",
    biography: "Cortes modernos e barba bem feita.",
    birthday: Temporal.Instant.from("2003-02-10T00:00:00Z"),
  });

  console.log("├── Perfis criados");

  // ============================================================
  // AVATARES
  // ============================================================

  await db.orm.public.Avatar.create({
    profile_id: profile1.id,
    url: "https://i.pravatar.cc/300?img=11",
    alt: "Avatar de João Pedro",
  });

  await db.orm.public.Avatar.create({
    profile_id: profile2.id,
    url: "https://i.pravatar.cc/300?img=12",
    alt: "Avatar de Marcos Vinícius",
  });

  await db.orm.public.Avatar.create({
    profile_id: profile3.id,
    url: "https://i.pravatar.cc/300?img=13",
    alt: "Avatar de Pedro Henrique",
  });

  console.log("├── Avatares criados");

  // ============================================================
  // AGENDAMENTOS
  // ============================================================

  const appointment1 = await db.orm.public.Appointment.create({
    client_id: client1.id,
    employee_id: employee1.id,
    service_id: haircut.id,
    barbershop_id: barbershop1.id,
    datetime: Temporal.Instant.from("2026-09-21T10:00:00Z"),
    status: "scheduled",
    note: "Preferência por degradê baixo.",
  });

  const appointment2 = await db.orm.public.Appointment.create({
    client_id: client2.id,
    employee_id: employee2.id,
    service_id: haircutBeard.id,
    barbershop_id: barbershop1.id,
    datetime: Temporal.Instant.from("2026-09-20T15:00:00Z"),
    status: "scheduled",
    note: "Manter o comprimento da barba.",
  });

  const appointment3 = await db.orm.public.Appointment.create({
    client_id: client3.id,
    employee_id: employee3.id,
    service_id: premiumHaircut.id,
    barbershop_id: barbershop2.id,
    datetime: Temporal.Instant.from("2026-09-18T14:00:00Z"),
    status: "done",
    note: "Cliente solicitou acabamento detalhado.",
  });

  console.log("├── Agendamentos criados");

  // ============================================================
  // FAVORITOS
  // ============================================================

  await db.orm.public.FavoriteBarbershop.create({
    client_id: client1.id,
    barbershop_id: barbershop1.id,
  });

  await db.orm.public.FavoriteBarbershop.create({
    client_id: client2.id,
    barbershop_id: barbershop1.id,
  });

  await db.orm.public.FavoriteBarbershop.create({
    client_id: client3.id,
    barbershop_id: barbershop2.id,
  });

  console.log("├── Favoritos criados");

  // ============================================================
  // HISTÓRICO DE SERVIÇOS
  // ============================================================

  await db.orm.public.ServiceHistory.create({
    client_id: client3.id,
    service_id: premiumHaircut.id,
    barbershop_id: barbershop2.id,
    employee_id: employee3.id,
    appointment_id: appointment3.id,
    date: Temporal.PlainDate.from("2026-09-18T00:00:00"),
  });

  console.log("├── Histórico criado");

  console.log("└── Seed concluído com sucesso!");
}

main()
  .catch((error) => {
    console.error("\n❌ Erro ao executar seed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
