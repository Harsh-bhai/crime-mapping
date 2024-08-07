module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),    
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'), // Not required
       ssl: {
         rejectUnauthorized: false,
       },
    },
    // debug: false,
  },
});
// 192.168.7.37