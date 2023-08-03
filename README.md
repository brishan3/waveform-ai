# Waveform AI

Waveform AI is an OpenAI wrapper/SaaS app built with [Next.js 13](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindui.com/), [Shadcn/ui](https://ui.shadcn.com/), [PrismaDB](https://www.prisma.io/), [Clerk](https://clerk.com/), [Stripe](https://stripe.com/), [OpenAI](https://openai.com/) and [Crisp](https://crisp.chat/).

The objective of this project was to further my experience in setting up modern OAuth based User Authentication (using Clerk), as well as integrating a payment portal (using Stripe) and using TypeScript for type-safe development within NextJS. This project also boasts live customer support via [Crisp Chat](https://crisp.chat/).

## Getting Started

To get started with the project, follow these steps:

Clone the repository:

```console
git clone https://github.com/brishan3/waveform-ai.git
```

Required API Key:

```console
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = Sign up for a free Clerk account and attain API keys https://clerk.com/
CLERK_SECRET_KEY = Sign up for a free Clerk account and attain API keys
OPENAI_API_KEY = Sign up for a OpenAI account to attain API keys (will need credit card) https://openai.com/
STRIPE_API_KEY = Sign up for a free Stripe account and attain API key https://stripe.com/
STRIPE_WEBHOOK_SECRET = Sign up for a free Stripe account and attain Webhook API key https://stripe.com/
DATABASE_URL = Sign up for a free account and create a MySQL DB on https://planetscale.com/ 
```

* You will also want to update the Crisp Chat key in `/components/crisp-chat.tsx` with your own key which can be attained by making an account at [Crisp](https://crisp.chat/).

Install the dependencies:

```console
npm install
```

Set up database:

```console
npx prisma generate
# then
npx prisma db push

# (Tip) if you need to reset the DB run:
npx prisma migrate reset

# then run the first two commands again.
```

Run the development server:

```console
npm run dev
```

Open http://localhost:3000 with your browser to see the result.