const { resolve } = require('path')

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	// extends: '@antfu/eslint-config',
	rules: {
		'react/no-string-refs': 'off',
		'react/no-unknown-property': 'off',
		'react/display-name': 'off',
		'vue/no-deprecated-functional-template': 'off',
		'vue/one-component-per-file': 'off',
		'vue/no-template-shadow': 'off',
		'vue/require-prop-types': 'off',
		'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					'data-design',
					'..',
					'../..',
					resolve(__dirname, 'packages/data-design/index.ts'),
				],
			},
		],
		'no-unused-vars': [
			2,
			{
				// 允许声明未使用变量
				vars: 'local',
				// 参数不检查
				args: 'none',
			},
		],
		'node/no-callback-literal': 'off',
		'import/namespace': 'off',
		'import/default': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		parserOptions: {
			ecmaVersion: 'latest',
		},

		env: {
			es6: true,
		},
	},

	overrides: [
		{
			files: [
				'**/*.md',
				'**/*.md/*.*',
				'demo.vue',
				'scripts/*.ts',
				'*.test.ts',
			],
			rules: {
				'no-alert': 'off',
				'no-console': 'off',
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'no-restricted-imports': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-redeclare': 'off',
			},
		},
		{
			files: ['packages/.vitepress/**/*.*'],
			rules: {
				'no-restricted-imports': 'off',
			},
		},
	],
}
