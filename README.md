# Personal Portfolio

A full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, and a backend for collecting anonymous visitor analytics and contact messages.

The portfolio showcases my projects, skills, and background while also collecting basic usage analytics. An admin dashboard is used to monitor site activity and review messages submitted through the contact form.

## Features

* Responsive portfolio website
* Dark/light theme
* Project showcase with individual project pages
* Skills and technology overview
* Contact form
* Anonymous visitor analytics
* Project click tracking
* Page visit tracking
* Admin dashboard
* Submitted message management
* Basic visitor statistics

## Architecture

```text
Next.js Portfolio
│
├── Frontend
│   ├── Next.js
│   ├── TypeScript
│   ├── Tailwind CSS
│   └── next-themes
│
├── Backend
│   ├── API
│   ├── Analytics
│   └── Contact form handling
│
└── Database
    └── PostgreSQL
```

## Analytics

The backend stores anonymous usage data to provide insight into how the portfolio is being used.

Examples of tracked events:

* Page visits
* Project clicks
* Project page visits
* Timestamp
* Referrer
* Device/browser information where appropriate

The purpose is to understand which projects receive the most attention and how visitors interact with the portfolio.

Example analytics:

```text
Total visitors
Total page views
Most viewed projects
Most clicked projects
Visits over time
Project engagement
```

## Admin Dashboard

The portfolio includes a private admin dashboard where the collected data can be viewed.

The dashboard can display:

* Total visitors
* Total page views
* Project click statistics
* Most popular projects
* Visitor activity over time
* Submitted contact messages

Contact form submissions are stored in the database and can be reviewed from the admin dashboard.

## Database

PostgreSQL is used to store analytics and contact form data.

Example entities:

```text
visitors
    id
    created_at
    session_id

page_views
    id
    visitor_id
    page
    created_at

project_clicks
    id
    project
    visitor_id
    created_at

messages
    id
    name
    email
    message
    created_at
```

The exact database structure may change as the application develops.

## Security

The admin dashboard is protected and is not publicly accessible.

The application should avoid storing unnecessary personal information. Analytics are designed to provide useful statistics without unnecessarily identifying individual visitors.

Contact form data is stored only for the purpose of handling messages and managing the portfolio.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=your_postgresql_connection_string
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```

Additional environment variables may be required depending on the backend and authentication implementation.

## Project Structure

```text
app/
├── admin/
│   └── ...
├── projects/
│   ├── chrome-extension/
│   ├── stocks/
│   └── prototype/
├── ui/
│   ├── navbar/
│   ├── hero/
│   ├── projects/
│   └── skills/
├── api/
│   ├── analytics/
│   └── contact/
├── page.tsx
└── layout.tsx

public/
├── images/
└── ...

```

## Technologies

* Next.js
* TypeScript
* React
* Tailwind CSS
* PostgreSQL
* REST API
* Git / GitHub
* Vercel / Cloud deployment

## Development

Run the development server:

```bash
pnpm dev
```

Build the application:

```bash
pnpm build
```

Start the production build:

```bash
pnpm start
```

## Purpose

The project is not only a portfolio but also a practical full-stack application.

It demonstrates:

* Frontend development
* Backend/API development
* Database design
* Authentication
* Data collection
* Analytics
* Responsive UI development
* Full-stack application architecture

```
```
