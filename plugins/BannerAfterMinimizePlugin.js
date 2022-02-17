import {
    ConcatSource
} from 'webpack-sources';

// ----------------

class BannerAfterMinimizePlugin {
    constructor ({
                     banner = '',
                     raw = true
                 }) {
        this.raw = raw;
        this.banner = raw ? banner : `/*${banner}*/`;
    }

    apply (compiler) {
        compiler.hooks.emit.tapAsync('BannerAfterMinimizePlugin', (compilation, callback) => {
            compilation.chunks.forEach((chunk) => {
                chunk.files.forEach((file) => {
                    compilation.updateAsset(
                        file,
                        (old) => new ConcatSource(this.banner, '\n', old)
                    );
                });
            });
            callback();
        });
    }
}

module.exports = BannerAfterMinimizePlugin;