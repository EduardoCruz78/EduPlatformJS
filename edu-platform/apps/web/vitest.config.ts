import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const rootDir = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(rootDir, '../..');

export default defineConfig({
  root: rootDir,
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    globals: false,
  },
  resolve: {
    alias: {
      '@': resolve(rootDir, 'src'),
      '@edu-platform/core': resolve(workspaceRoot, 'packages/core/src/index.ts'),
      '@edu-platform/infrastructure': resolve(
        workspaceRoot,
        'packages/infrastructure/src/index.ts'
      ),
    },
  },
});
