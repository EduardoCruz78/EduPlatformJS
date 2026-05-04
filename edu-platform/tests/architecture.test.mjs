import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const workspaceRoot = new URL('../', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const ignoredDirectories = new Set([
  '.git',
  '.next',
  '.turbo',
  'dist',
  'generated',
  'node_modules',
]);

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(fullPath)));
      continue;
    }

    if (/\.(ts|tsx|js|mjs|cjs)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function findViolations(directory, forbiddenImports, allowFile = () => false) {
  const files = await collectSourceFiles(join(workspaceRoot, directory));
  const violations = [];

  for (const file of files) {
    const relativePath = relative(workspaceRoot, file).replaceAll('\\', '/');

    if (allowFile(relativePath)) {
      continue;
    }

    const source = await readFile(file, 'utf8');

    for (const pattern of forbiddenImports) {
      if (pattern.test(source)) {
        violations.push(`${relativePath} matches ${pattern}`);
      }
    }
  }

  return violations;
}

test('core stays independent from framework, persistence and infrastructure packages', async () => {
  const violations = await findViolations('packages/core/src', [
    /from ['"]@edu-platform\/infrastructure['"]/,
    /from ['"]@prisma\/client['"]/,
    /from ['"]next(?:\/|['"])/,
    /from ['"]react(?:\/|['"])/,
  ]);

  assert.deepEqual(violations, []);
});

test('web UI routes do not import infrastructure directly', async () => {
  const violations = await findViolations('apps/web/app', [
    /from ['"]@edu-platform\/infrastructure['"]/,
    /from ['"].*repositories.*['"]/,
  ]);

  assert.deepEqual(violations, []);
});

test('generated Prisma client is not tracked as source code', async () => {
  const violations = await collectSourceFiles(join(workspaceRoot, 'packages/infrastructure/src'))
    .then((files) =>
      files
        .map((file) => relative(workspaceRoot, file).replaceAll('\\', '/'))
        .filter((file) => file.includes('/generated/'))
    );

  assert.deepEqual(violations, []);
});
