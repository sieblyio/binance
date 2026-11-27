# **Binance API Examples** - Node.js, JavaScript & TypeScript SDK for Binance Spot, USD-M & COIN-M Futures REST APIs, WebSockets & WebSocket API

Short, copy-ready snippets for the [`binance`](https://www.npmjs.com/package/binance) package. Each block is a complete file: paste it into `example.ts` and run it with `npx tsx example.ts`. Snippets that need an API key read it from `API_KEY_COM` and `API_SECRET_COM`.

Longer runnable examples live in [`examples/Rest`](./Rest) and [`examples/WebSockets`](./WebSockets). The full endpoint map is in [`docs/endpointFunctionList.md`](../docs/endpointFunctionList.md).

## Installation

```bash
npm install binance
# or
yarn add binance
# or
pnpm add binance
```

## Which client do I need?

| Client | Use it for |
| --- | --- |
| `MainClient` | Spot, margin, wallet, savings and the rest of `api.binance.com` |
| `USDMClient` | USD-M futures (`fapi.binance.com`) |
| `CoinMClient` | COIN-M futures (`dapi.binance.com`) |
| `PortfolioClient` | Portfolio margin (`papi.binance.com`) |
| `WebsocketClient` | Market data and user data streams |
| `WebsocketAPIClient` | Sending requests (orders, account queries) over Binance's WebSocket API, awaited like REST calls |

## Create a client

### Public client (no key)

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const price = await client.getSymbolPriceTicker({ symbol: 'BTCUSDT' });
console.log(price);
```

### Private client (API key and secret)

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
  beautifyResponses: true,
});

const account = await client.getAccountInformation();
console.log(account.balances.filter((b) => Number(b.free) > 0));
```

HMAC, RSA and Ed25519 keys all work: pass the PEM private key as `api_secret` for RSA or Ed25519. See [`examples/auth`](./auth).

### Demo trading and testnet

```typescript
import { MainClient, USDMClient } from 'binance';

// Demo trading: real market data, simulated balances and orders
const spotDemo = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
  demoTrading: true,
});

// Futures testnet (separate keys from testnet.binancefuture.com)
const usdmTestnet = new USDMClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
  testnet: true,
});

console.log(await spotDemo.getServerTime());
console.log(await usdmTestnet.getServerTime());
```

### CommonJS

```javascript
const { MainClient } = require('binance');

const client = new MainClient();

client
  .getSymbolPriceTicker({ symbol: 'ETHUSDT' })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

## Spot market data (no key)

### 24h ticker, one or many symbols

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const one = await client.get24hrChangeStatistics({ symbol: 'BTCUSDT' });
console.log(one.lastPrice, one.highPrice, one.lowPrice, one.quoteVolume);

const many = await client.get24hrChangeStatistics({ symbols: ['BTCUSDT', 'ETHUSDT'] });
console.log(many.map((t) => [t.symbol, t.lastPrice]));
```

### Symbol rules (tick size, step size, minimum notional)

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const info = await client.getExchangeInfo({ symbol: 'BTCUSDT' });
const symbol = info.symbols[0];

for (const filter of symbol.filters) {
  if (filter.filterType === 'PRICE_FILTER') console.log('tickSize', filter.tickSize);
  if (filter.filterType === 'LOT_SIZE') console.log('stepSize', filter.stepSize, 'minQty', filter.minQty);
  if (filter.filterType === 'NOTIONAL') console.log('minNotional', filter.minNotional);
}
```

### Order book

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const book = await client.getOrderBook({ symbol: 'BTCUSDT', limit: 5 });
console.log('best bid', book.bids[0], 'best ask', book.asks[0]);
```

### Candles (klines)

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const candles = await client.getKlines({ symbol: 'BTCUSDT', interval: '1h', limit: 3 });

// [openTime, open, high, low, close, volume, closeTime, quoteVolume, trades, ...]
for (const [openTime, open, high, low, close] of candles) {
  console.log(new Date(openTime).toISOString(), open, high, low, close);
}
```

### Recent trades

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

const trades = await client.getRecentTrades({ symbol: 'ETHUSDT', limit: 5 });
console.log(trades.map((t) => ({ price: t.price, qty: t.qty, buyerMaker: t.isBuyerMaker })));
```

## USD-M futures market data (no key)

```typescript
import { USDMClient } from 'binance';

const client = new USDMClient();

const mark = await client.getMarkPrice({ symbol: 'BTCUSDT' });
console.log('mark', mark.markPrice, 'funding', mark.lastFundingRate, 'next', new Date(mark.nextFundingTime));

const funding = await client.getFundingRateHistory({ symbol: 'BTCUSDT', limit: 3 });
console.log(funding.map((f) => [new Date(f.fundingTime).toISOString(), f.fundingRate]));

const oi = await client.getOpenInterest({ symbol: 'BTCUSDT' });
console.log('open interest', oi.openInterest);

const candles = await client.getKlines({ symbol: 'BTCUSDT', interval: '15m', limit: 2 });
console.log(candles);
```

## COIN-M futures market data (no key)

```typescript
import { CoinMClient } from 'binance';

const client = new CoinMClient();

const book = await client.getOrderBook({ symbol: 'BTCUSD_PERP', limit: 5 });
console.log('best bid', book.bids[0], 'best ask', book.asks[0]);

const candles = await client.getKlines({ symbol: 'BTCUSD_PERP', interval: '1h', limit: 2 });
console.log(candles);
```

## Spot trading

### Balances

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

const account = await client.getAccountInformation();
for (const b of account.balances) {
  if (Number(b.free) + Number(b.locked) > 0) console.log(b.asset, b.free, b.locked);
}
```

### Post-only limit order, then cancel it

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

// LIMIT_MAKER is rejected instead of filling if it would take liquidity
const order = await client.submitNewOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT_MAKER',
  quantity: 0.0001,
  price: 50000,
});
console.log('placed', order);

const cancelled = await client.cancelOrder({ symbol: 'BTCUSDT', orderId: order.orderId });
console.log('cancelled', cancelled.status);
```

### Market order by quote amount

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

// Spend 10 USDT; Binance works out the BTC quantity
const order = await client.submitNewOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'MARKET',
  quoteOrderQty: 10,
  newOrderRespType: 'FULL',
});
console.log(order.executedQty, order.fills);
```

### Validate an order without placing it

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

// Runs the same checks as a real order (filters, balance, permissions) but sends nothing to the matching engine
const result = await client.testNewOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  timeInForce: 'GTC',
  quantity: 0.0001,
  price: 50000,
});
console.log(result); // {} when the order would be accepted
```

### Order status, open orders and fills

```typescript
import { MainClient } from 'binance';

const client = new MainClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

const open = await client.getOpenOrders({ symbol: 'BTCUSDT' });
console.log('open orders', open.length);

if (open[0]) {
  const status = await client.getOrder({ symbol: 'BTCUSDT', orderId: open[0].orderId });
  console.log(status.status, status.executedQty);
}

const fills = await client.getAccountTradeList({ symbol: 'BTCUSDT', limit: 10 });
console.log(fills.map((f) => [f.price, f.qty, f.commission, f.commissionAsset]));
```

## USD-M futures trading

```typescript
import { USDMClient } from 'binance';

const client = new USDMClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

await client.setLeverage({ symbol: 'BTCUSDT', leverage: 5 });

const order = await client.submitNewOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  timeInForce: 'GTX', // post-only
  quantity: 0.002,
  price: 50000,
});
console.log('placed', order.orderId, order.status);

const positions = await client.getPositionsV3({ symbol: 'BTCUSDT' });
console.log(positions.map((p) => [p.symbol, p.positionSide, p.positionAmt, p.entryPrice]));

const balances = await client.getBalanceV3();
console.log(balances.filter((b) => Number(b.balance) > 0));

await client.cancelOrder({ symbol: 'BTCUSDT', orderId: order.orderId });
```

In hedge mode, add `positionSide: 'LONG'` or `'SHORT'` to each order, otherwise Binance returns `-4061`.

## WebSockets

### Public market data (spot and USD-M)

```typescript
import { WebsocketClient } from 'binance';

const ws = new WebsocketClient({ beautify: true });

ws.on('open', ({ wsKey }) => console.log('connected', wsKey));
ws.on('formattedMessage', (data) => console.log(JSON.stringify(data).slice(0, 160)));
ws.on('reconnected', ({ wsKey }) => console.log('reconnected', wsKey));
ws.on('exception', (err) => console.error('ws error', err));

// Spot: "main" is wss://stream.binance.com:9443; "main2" is the same service on port 443 (handy behind firewalls)
ws.subscribe(['btcusdt@trade', 'btcusdt@bookTicker', 'btcusdt@kline_1m'], 'main2');

// USD-M futures: the SDK routes each topic to the right public or market endpoint
ws.subscribe(['btcusdt@markPrice@1s', 'btcusdt@aggTrade'], 'usdm');

// Stop after 10 seconds
setTimeout(() => ws.closeAll(), 10_000);
```

`!ticker@arr` (all spot tickers) was retired by Binance; use `!miniTicker@arr` or `!ticker_1h@arr` / `!ticker_4h@arr` / `!ticker_1d@arr` instead.

### Private user data stream (spot, via the WebSocket API)

```typescript
import { WebsocketAPIClient, WS_KEY_MAP, isWsFormattedSpotUserDataEvent } from 'binance';

const wsApi = new WebsocketAPIClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
  beautify: true,
  attachEventListeners: false, // use the handlers below instead of the default logging ones
});

const ws = wsApi.getWSClient();
ws.on('formattedMessage', (event) => {
  if (isWsFormattedSpotUserDataEvent(event)) console.log('spot user data', event);
});
ws.on('exception', (err) => console.error('ws error', err));

// No listenKey needed (Binance deprecated it for spot): the SDK authenticates the
// WebSocket API connection and resubscribes after reconnects
await wsApi.subscribeUserDataStream(WS_KEY_MAP.mainWSAPI);
```

### Requests over the WebSocket API

```typescript
import { WebsocketAPIClient } from 'binance';

const wsApi = new WebsocketAPIClient({
  api_key: process.env.API_KEY_COM,
  api_secret: process.env.API_SECRET_COM,
});

// Public request, awaited like REST
const book = await wsApi.getSpotOrderBook({ symbol: 'BTCUSDT', limit: 5 });
console.log(book.result.bids[0]);

// Signed requests need a timestamp. Ed25519 keys are fastest (one session login), HMAC and RSA sign every request
const account = await wsApi.getSpotAccountInformation({ omitZeroBalances: true, timestamp: Date.now() });
console.log(account.result.balances);

// Validate an order over the same connection without placing it
const test = await wsApi.testSpotOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  timeInForce: 'GTC',
  quantity: '0.0001',
  price: '50000',
  timestamp: Date.now(),
});
console.log(test.result);

wsApi.getWSClient().closeAll();
```

The same client has `submitNewSpotOrder`, `cancelSpotOrder`, `submitNewFuturesOrder` and the rest of the WebSocket API; see [`examples/WebSockets/WS-API`](./WebSockets/WS-API).

## Error handling

```typescript
import { MainClient } from 'binance';

const client = new MainClient();

try {
  await client.getOrderBook({ symbol: 'NOTAREALPAIR' });
} catch (e) {
  // Binance errors arrive as { code, message, body, headers, requestOptions }
  const err = e as { code?: number; message?: string };
  console.error(err.code, err.message); // -1121 Invalid symbol.
}
```

Common codes: `-1021` timestamp outside `recvWindow` (sync your clock or raise `recvWindow`), `-2015` invalid key, IP or permissions, `-1013` / `-1111` order breaks a symbol filter (check tick size and step size), `-4061` futures position side does not match the account's position mode.

## More

- Docs: https://sieblyio.github.io/docs/binance/
- SDK overview: https://siebly.io/sdk/binance/javascript
- Endpoint list: [`docs/endpointFunctionList.md`](../docs/endpointFunctionList.md)
- Questions and bug reports: [GitHub issues](https://github.com/sieblyio/binance/issues)
