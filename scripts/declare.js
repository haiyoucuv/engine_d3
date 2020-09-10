/**
 * Created by rockyl on 2020-01-11.
 */

const fs = require('fs');
const ts = require("typescript");

const regLine = /(export|declare)((?!from).)*/g;

function compile(fileNames, options) {
	const host = ts.createCompilerHost(options);
	const exports = [];
	host.writeFile = (fileName, fileContent) => {
		const result = fileContent.match(regLine);
		for (let line of result) {
			if(line.match(/export (default)? \w+;/)){
				continue;
			}
			if(line.endsWith(';')){
				if(!line.startsWith('_') && !line.startsWith('export default function')){
					exports.push(line);
				}
			}else {
				if(line.endsWith('{')){
					let start = fileContent.indexOf(line);
					const block = fileContent.substring(start, fileContent.indexOf('\n}', start) + 2);
					if(!block.startsWith('_')){
						exports.push(block);
					}
				}
			}
		}
	};

	const program = ts.createProgram(fileNames, options, host);
	program.emit();

	let allExports = exports.join('\n\n')
		.replace(/export default _default;/g, '')
		.replace(/export declare/g, 'export ')
		.replace(/export default/g, 'export ')
		.replace(/declare /g, 'export ')
	;

	const content = `
declare module hycv{
${allExports}
}
`;

	fs.writeFileSync('debug/types.d.ts', content);
}

compile(process.argv.slice(2), {
	allowJs: true,
	declaration: true,
	emitDeclarationOnly: true,
});
