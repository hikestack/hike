import constants from "@/constants";

export default () => ({
    port: Number.parseInt(process.env.PORT, 10) || 3000,
    host: '0.0.0.0',
    prefix: 'api',
    multipart: {
        throwFileSizeLimit: true,
        limits: {
            files: 1,
            fileSize: 1024 * 1024 * 50,
        },
    },
    validation: {
        transform: true,
        skipMissingProperties: true,
        skipNullProperties: true,
        skipUndefinedProperties: true,
        stopAtFirstError: true,
        enableDebugMessages: constants.isDev,
    },
});
