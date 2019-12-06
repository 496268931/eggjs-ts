import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.cluster = {
        listen: {
            port: 3000,
            hostname: '0.0.0.0',
        },
    };
    config.typeorm = {
        client: {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'root',
            synchronize: true,
            logging: false,
        },
    };
    return config;
};
