import {execFileSync} from 'node:child_process';
const changes = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], {encoding:'utf8'});
if (changes.trim()) {
  console.error('Generated output or source differs from the committed checkout:\n'+changes);
  process.exitCode = 1;
}
