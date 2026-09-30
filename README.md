# Tavern Stock & Cash Management System

Production-ready application package for the approved Tavern Stock & Cash Management System design.

## Stack
- React + TypeScript + Vite
- Node.js + Express + TypeScript
- PostgreSQL
- REST API
- JWT authentication
- Docker deployment files

## Run locally
1. Create PostgreSQL database `tavern_management`.
2. Apply `database/migrations/001_initial.sql` then `database/migrations/002_completion.sql`.
3. Apply `database/seeds/001_seed.sql`.
4. Copy `backend/.env.example` to `backend/.env` and set a strong `JWT_SECRET` and `DATABASE_URL`.
5. Install dependencies in `backend` and `frontend` with npm.
6. Start backend with `npm run dev` and frontend with `npm run dev`.

## Business rules
The approved rules are documented in `docs/business-rules.md` and are not changed by this build.

## Reports
Report downloads are Excel-compatible CSV exports. Browser print is available for PDF output without requiring an additional proprietary PDF dependency.

## Production
See `DEPLOYMENT.md` and `PRODUCTION-QA.md`. PostgreSQL, hosting, HTTPS/domain, production secrets and backup/restore testing are environment-specific steps that must be completed in the target hosting environment before live financial use.
