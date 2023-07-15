module.exports = {
  apps: [
    {
      name: 'nilfoundation',
      script: 'npm run start',
      max_restarts: 2,
      min_uptime: '10s',
      restart_delay: 10000,
      max_memory_restart: '150M',
      env: {
        PORT: '3049',
      },
    },
  ],
};
