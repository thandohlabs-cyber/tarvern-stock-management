# Deployment

This package contains a Docker deployment path for the approved Tavern Stock & Cash Management System.

## Before deployment
1. Change the PostgreSQL password in `docker-compose.yml`.
2. Generate a long random `JWT_SECRET` and replace the placeholder.
3. Change the seeded administrator password immediately after first login.
4. Set the production frontend URL in the backend environment.
5. Put HTTPS in front of the frontend/backend using the hosting provider or a reverse proxy.
6. Configure automated PostgreSQL backups.
7. Test the complete workflow with non-production data before going live.

## Start

```bash
docker compose up -d --build
```

Frontend: `http://localhost`
Backend health: `http://localhost:4000/api/health`

## Stop

```bash
docker compose down
```

## Database persistence
The PostgreSQL data is stored in the Docker volume `tavern_db`. Backups must be configured separately; Docker volumes are not a backup strategy by themselves.
