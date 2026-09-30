import fs from 'fs';
import path from 'path';

const root = process.cwd();
const required = [
  'backend/src/server.ts',
  'frontend/src/main.tsx',
  'frontend/src/styles.css',
  'database/schema.sql',
  'database/seed.sql',
  'docker-compose.yml',
  'DEPLOYMENT.md',
  'PRODUCTION-QA.md'
];
const requiredEndpoints = [
  '/api/health','/api/auth/login','/api/dashboard','/api/users','/api/products','/api/pos',
  '/api/stock-receipts','/api/stock-adjustments','/api/stock-periods','/api/pos-daily',
  '/api/cash-movements','/api/expenses','/api/safes','/api/safe-movements','/api/banking',
  '/api/card-settlements','/api/reconciliation','/api/reports/summary','/api/audit'
];
let failures = 0;
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) { console.error(`FAIL file: ${file}`); failures++; }
}
const server = fs.readFileSync(path.join(root,'backend/src/server.ts'),'utf8');
for (const endpoint of requiredEndpoints) {
  if (!server.includes(endpoint)) { console.error(`FAIL endpoint: ${endpoint}`); failures++; }
}
const schema = fs.readFileSync(path.join(root,'database/schema.sql'),'utf8');
for (const table of ['users','products','product_prices','pos_terminals','stock_receipts','stock_periods','stock_balances','stock_sold','stock_adjustments','customer_exchanges','empty_movements','pos_daily_balances','cash_movements','expenses','safes','safe_movements','banking_transactions','card_settlements','period_reconciliations','audit_logs']) {
  if (!schema.toLowerCase().includes(`create table if not exists ${table}`)) { console.error(`FAIL table: ${table}`); failures++; }
}
if (!server.includes("opening_cash") || !server.includes("cash_variance") || !server.includes("card_variance")) { console.error('FAIL POS calculation markers'); failures++; }
if (!server.includes("status='BALANCED'") || !server.includes('totalStockSoldValue')) { console.error('FAIL stock period completion markers'); failures++; }
if (!server.includes('empty_value')) { console.error('FAIL empty-value markers'); failures++; }
if (failures) { console.error(`\nSmoke check failed with ${failures} issue(s).`); process.exit(1); }
console.log('Smoke check passed: required project files, core endpoints, tables and calculation markers are present.');
