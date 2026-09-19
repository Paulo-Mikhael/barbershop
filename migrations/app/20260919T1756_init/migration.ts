#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/1ceb5aaac9bbfe88f68e2c9ee82fdedec4fe88c6a04c553941e1c63874328333/contract';
import endContract from '../../snapshots/1ceb5aaac9bbfe88f68e2c9ee82fdedec4fe88c6a04c553941e1c63874328333/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
