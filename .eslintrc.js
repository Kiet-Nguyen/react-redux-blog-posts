module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		indent: ['error', 2, { ignoredNodes: ['JSXElement'] }],
		'react/jsx-indent': ['error', 2],
		'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
	},
	env: {
		browser: true,
		node: true,
	},
};
