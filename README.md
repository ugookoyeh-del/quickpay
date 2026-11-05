# QuickPay

A responsive React payment-flow prototype demonstrating controlled forms, state, validation and a review-first checkout interaction.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite. Create a production build with `npm run build`.

## Features
- Editable recipient, payment method and amount
- Controlled React form state
- Basic client-side validation
- Currency formatting with Intl.NumberFormat
- Confirmation state that explicitly identifies the flow as a simulation

## Safety
This project is a UI prototype only. It does not process payments, collect card data, connect to a bank, or move money. Do not enter real payment credentials.

## Roadmap
Add component tests, accessible error messaging, a transaction review step and a sandbox-only payment-provider integration.
