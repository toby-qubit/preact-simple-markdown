/**
 * @jest-environment jsdom
 */

const snarkdown = require('snarkdown')
const sanitize = require('./lib/sanitize')
const safeMarkdown = require('./lib/safeMarkdown')

// test('Image src onerror', () => {
// 	expect(sanitize('<img src="" onerror="alert()"/>')).toBe('<img src=""/>')
// })

const markdownSyntax = [
	{
		name: 'Heading 1',
		markdown: '# Heading 1',
		result: '<h1>Heading 1</h1>'
	},
	{
		name: 'Heading 2',
		markdown: '## Heading 2',
		result: '<h2>Heading 2</h2>'
	},
	{
		name: 'Heading 3',
		markdown: '### Heading 3',
		result: '<h3>Heading 3</h3>'
	},
	{
		name: 'Bold',
		markdown: '**Bold Text**',
		result: '<strong>Bold Text</strong>'
	},
	{
		name: 'Italics',
		markdown: '*Italics*',
		result: '<em>Italics</em>'
	},
	{
		name: 'Code',
		markdown: '`Code`',
		result: '<code>Code</code>'
	},
	{
		name: 'Bold _',
		markdown: '__Bold Text__',
		result: '<strong>Bold Text</strong>'
	},
	{
		name: 'Italics _',
		markdown: '_Italics_',
		result: '<em>Italics</em>'
	}
]

markdownSyntax.forEach((item) => {
	test(item.name, () => {
		expect(snarkdown(item.markdown)).toBe(item.result)
	})
})



test('img with onerror', () => {
	expect(safeMarkdown('<img src="" onerror="alert()"/>')).toBe('<img src="">')
})