/**
 * Created by rockyl on 2018/11/16.
 */

const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const progress = require('rollup-plugin-progress');
const typescript = require('rollup-plugin-typescript');
const {uglify} = require('rollup-plugin-uglify');
const fs = require('fs');

const tslibWrapper = 'var tslib = {__extends: __extends,__assign: __assign,__rest: __rest,__decorate: __decorate,__param: __param,__metadata: __metadata,__awaiter: __awaiter,__generator: __generator,__exportStar: __exportStar,__values: __values,__read: __read,__spread: __spread,__spreadArrays: __spreadArrays,__await: __await,__asyncGenerator: __asyncGenerator,__asyncDelegator: __asyncDelegator,__asyncValues: __asyncValues,__makeTemplateObject: __makeTemplateObject,__importStar: __importStar,__importDefault: __importDefault};'
const tslibCode = fs.readFileSync(__dirname + '/scripts/tslib.min.js');

export default {
	input: 'src/index.ts',
	output: [
		{
			file: `debug/engine.js`,
			format: 'umd',
			name: 'engine',
			globals: {
				tslib: 'tslib'
			},
			banner: tslibCode + '\n' + tslibWrapper,
		},
	],
	plugins: [
		progress(),
		resolve({}),
		typescript({
			//useTsconfigDeclarationDir: true,
		}),
		commonjs(),
		process.env.BUILD === 'production' && uglify({})
	],
	external: ['tslib'],
};
