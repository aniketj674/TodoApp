module.exports = {
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                alias: {
                    components: './src/js/components',
                    svgs: './src/svgs',
                    reduxStore: './src/js/reduxStore',
                    actions: './src/js/reduxStore/actions',
                    initialStates: './src/js/reduxStore/initialState',
                    constants: './src/js/data/constants',
                },
            },
        ],
    ],
    presets: [
        '@babel/env',
        '@babel/react',
    ],
};
