import { db } from "./db";
import reset from "./reset_function";

async function main() {
  db.connect();

  await reset({ client: db });
}

main()
  .catch((error) => {
    console.error("\n❌ Erro ao executar reset do banco:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
