export default () => ({
    port: Number.parseInt(process.env.PORT, 10) || 3000,
    host: '0.0.0.0',
    prefix: 'api',
});
