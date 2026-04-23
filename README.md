# SHNOOR Website Rebuild

This project is a fresh full-stack rebuild of the current SHNOOR website using:

- React + Vite for the frontend
- Node.js + Express for the backend
- PostgreSQL-ready contact lead storage

## Project Structure

- `frontend/` React application
- `backend/` Express API and database layer

## Run Locally

1. Install dependencies:

```bash
npm run install:all
```

2. Start the backend:

```bash
npm run dev:backend
```

3. In another terminal, start the frontend:

```bash
npm run dev:frontend
```

Frontend runs on `http://localhost:5173` and expects the backend on `http://localhost:4000`.

## Included Pages

- Home
- About
- Services overview
- Service detail pages
- Contact
- Admin enquiries view

## PostgreSQL Setup

Create `backend/.env` from `backend/.env.example` and set `DATABASE_URL`.
You can also set `ADMIN_KEY` to protect the admin enquiries API.

Then run the SQL in `backend/src/schema.sql` to create the `contact_leads` table.

If `DATABASE_URL` is not set, the backend stores contact submissions in memory so development can continue without a database.
