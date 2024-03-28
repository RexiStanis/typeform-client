import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: "http://127.0.0.1:7071/api/graphql",

    documents: ["src/**/*.ts"],
    generates: {
        "./src/__generated__/": {
            preset: 'client'
        }
    }
};

export default config;