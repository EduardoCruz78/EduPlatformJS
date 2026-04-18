import { spawnSync } from 'node:child_process';
import { ensureNextManifests } from './ensure-next-manifests.mjs';

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('npx', ['prisma', 'generate', '--schema', '../../prisma/schema.prisma']);
run('npx', ['next', 'build', '--webpack']);
ensureNextManifests();
