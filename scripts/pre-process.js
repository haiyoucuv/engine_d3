/**
 * Created by rockyl on 2019-11-22.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const [_, __, id, fileName] = process.argv;

const stream = fs.createReadStream(fileName);
const fsHash = crypto.createHash('sha1');

stream.on('data', function (d) {
	fsHash.update(d);
});

stream.on('end', function () {
	const md5 = fsHash.digest('hex');

	loadComplete(md5);
});

function loadComplete(md5) {
	const extIndex = fileName.lastIndexOf('.');
	const newFileName = fileName.substr(0, extIndex + 1) + md5 + fileName.substr(extIndex);
	fs.renameSync(fileName, newFileName);

	let manifest = {
		id,
		url: path.basename(newFileName),
	};

	fs.writeFileSync('manifest.json', JSON.stringify(manifest));
}
