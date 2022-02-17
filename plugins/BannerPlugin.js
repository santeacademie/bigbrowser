// set a string as preamble
import {
    ConcatSource
} from 'webpack-sources';
class BannerPlugin {
	constructor(options) {
		this.banner = options.banner;
	}

	apply(compiler) {
		compiler.hooks.emit.tapAsync('BannerPlugin', (compilation, callback) => {
			compilation.chunks.forEach(chunk => {
				chunk.files.forEach(filename => {
					const asset = compilation.assets[filename];
                    compilation.updateAsset(
                        filename,
                        (old) => new ConcatSource(this.banner, '\n', old)
                    );
					asset._value = 'var lol = 3223232;' + asset._value; // append banner
				});
			});

			callback();
		});
	}
}

module.exports = BannerPlugin;