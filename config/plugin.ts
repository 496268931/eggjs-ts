import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    typeorm: {
        enable: true,
        package: 'egg-ts-typeorm',
    },
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    validate: {
        enable: true,
        package: 'egg-validate',
    },
    oss: {
        enable: false,
        package: 'egg-oss',
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    }
};

export default plugin;
