# App Prescripciones

Fullstack prescription management application with NestJS backend and React frontend.

## Project Structure

```
app-prescripciones/
├── backend/          # NestJS API
│   ├── src/
│   ├── prisma/       # Database schema and migrations
│   ├── test/
│   └── package.json
└── fronted/          # React Frontend
```

## Backend Setup

### Prerequisites
- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Database

```bash
# Run migrations
npx prisma migrate dev

# View database
npx prisma studio
```

### Running the Application

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

### Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

## Database Schema

The application uses Prisma ORM with PostgreSQL:

- **User**: System users (doctors, admins)
- **Doctor**: Doctor-specific information linked to User
- **Patient**: Patient information linked to User
- **Prescription**: Medical prescriptions
- **PrescriptionItem**: Individual medicines within a prescription

## API Endpoints

_To be documented_

## License

UNLICENSED
