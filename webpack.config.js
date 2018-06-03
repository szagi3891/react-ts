const path = require('path');
const webpack = require('webpack');
//const WebpackProgress = require('./webpack.progress.js');

const getNodeConfig = () => ({
    target: 'node',
    node: {
        __filename: true
    }
});

const make = (mode, entryFileName, outFileName) => {
    const nodeConf = mode === 'client' ? {} : getNodeConfig();

    return {
        mode: 'development',
        //mode: 'production',
        entry: entryFileName,
        output: {
            path: path.join(__dirname, 'dist/static'),
            publicPath: '/static/',
            filename: outFileName,
            pathinfo: true
        },
        module: {
            rules: [
                {
                    test: /\.(svg|png|jpg|gif|ico)$/,
                    loaders: ['file-loader'],
                },
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            modules: [
                path.join(__dirname, 'src'),
                'node_modules'
            ]
        },
        plugins: [
            //new WebpackProgress(),
        ],
        target: nodeConf.target,
        node: nodeConf.node
    };
};

module.exports = [
    make('client', './src/index.tsx', 'index.js'),
    make('server', './src/server.ts', '../server.js')
];

/*
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
*/