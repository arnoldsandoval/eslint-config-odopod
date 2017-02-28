import test from 'ava';
import eslint from 'eslint';
import config from './index';

test('it extends airbnb-base', (t) => {
  t.is(config.extends, 'airbnb-base');
});

test('it exports rules', (t) => {
  t.is(typeof config.rules, 'object');
});

test('can parse config with CLIEngine', (t) => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: './index.js',
  });

  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';

  t.is(cli.executeOnText(code).errorCount, 0);
});
