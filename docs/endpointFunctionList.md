
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/binance">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/binance/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/binance/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [main-client](#main-clientts)
- [usdm-client](#usdm-clientts)
- [coinm-client](#coinm-clientts)
- [portfolio-client](#portfolio-clientts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# main-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [main-client.ts](/src/main-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [testConnectivity()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L798) |  | GET | `api/v3/ping` |
| [getExchangeInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L802) |  | GET | `api/v3/exchangeInfo` |
| [getOrderBook()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L822) |  | GET | `api/v3/depth` |
| [getRecentTrades()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L826) |  | GET | `api/v3/trades` |
| [getHistoricalTrades()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L830) |  | GET | `api/v3/historicalTrades` |
| [getHistoricalBlockTrades()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L834) |  | GET | `api/v3/historicalBlockTrades` |
| [getAggregateTrades()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L840) |  | GET | `api/v3/aggTrades` |
| [getKlines()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L846) |  | GET | `api/v3/klines` |
| [getUIKlines()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L850) |  | GET | `api/v3/uiKlines` |
| [getAvgPrice()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L854) |  | GET | `api/v3/avgPrice` |
| [getExecutionRules()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L858) |  | GET | `api/v3/executionRules?symbols=` |
| [getReferencePrice()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L873) |  | GET | `api/v3/referencePrice` |
| [getReferencePriceCalculation()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L879) |  | GET | `api/v3/referencePrice/calculation` |
| [get24hrChangeStatistics()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L886) |  | GET | `api/v3/ticker/24hr?symbols=` |
| [getTradingDayTicker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L916) |  | GET | `api/v3/ticker/tradingDay?symbols=` |
| [getSymbolPriceTicker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L931) |  | GET | `api/v3/ticker/price?symbols=` |
| [getSymbolOrderBookTicker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L948) |  | GET | `api/v3/ticker/bookTicker?symbols=` |
| [getRollingWindowTicker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L965) |  | GET | `api/v3/ticker?symbols=` |
| [submitNewOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L987) | :closed_lock_with_key:  | POST | `api/v3/order` |
| [testNewOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L995) | :closed_lock_with_key:  | POST | `api/v3/order/test` |
| [getOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1003) | :closed_lock_with_key:  | GET | `api/v3/order` |
| [cancelOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1007) | :closed_lock_with_key:  | DELETE | `api/v3/order` |
| [cancelAllSymbolOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1011) | :closed_lock_with_key:  | DELETE | `api/v3/openOrders` |
| [replaceOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1017) | :closed_lock_with_key:  | POST | `api/v3/order/cancelReplace` |
| [amendOrderKeepPriority()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1031) | :closed_lock_with_key:  | PUT | `fapi/v1/order/amend/keepPriority` |
| [getOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1038) | :closed_lock_with_key:  | GET | `api/v3/openOrders` |
| [getAllOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1042) | :closed_lock_with_key:  | GET | `api/v3/allOrders` |
| [submitNewOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1049) | :closed_lock_with_key:  | POST | `api/v3/order/oco` |
| [submitNewOrderList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1056) | :closed_lock_with_key:  | POST | `api/v3/orderList/oco` |
| [submitNewOrderListOTO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1065) | :closed_lock_with_key:  | POST | `api/v3/orderList/oto` |
| [submitNewOrderListOTOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1074) | :closed_lock_with_key:  | POST | `api/v3/orderList/otoco` |
| [submitNewOrderListOPO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1084) | :closed_lock_with_key:  | POST | `api/v3/orderList/opo` |
| [submitNewOrderListOPOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1093) | :closed_lock_with_key:  | POST | `api/v3/orderList/opoco` |
| [cancelOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1103) | :closed_lock_with_key:  | DELETE | `api/v3/orderList` |
| [getOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1108) | :closed_lock_with_key:  | GET | `api/v3/orderList` |
| [getAllOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1112) | :closed_lock_with_key:  | GET | `api/v3/allOrderList` |
| [getAllOpenOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1119) | :closed_lock_with_key:  | GET | `api/v3/openOrderList` |
| [submitNewSOROrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1126) | :closed_lock_with_key:  | POST | `api/v3/sor/order` |
| [testNewSOROrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1137) | :closed_lock_with_key:  | POST | `api/v3/sor/order/test` |
| [getAccountInformation()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1153) | :closed_lock_with_key:  | GET | `api/v3/account` |
| [getAccountTradeList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1159) | :closed_lock_with_key:  | GET | `api/v3/myTrades` |
| [getOrderRateLimit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1165) | :closed_lock_with_key:  | GET | `api/v3/rateLimit/order` |
| [getPreventedMatches()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1169) | :closed_lock_with_key:  | GET | `api/v3/myPreventedMatches` |
| [getAllocations()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1175) | :closed_lock_with_key:  | GET | `api/v3/myAllocations` |
| [getCommissionRates()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1179) | :closed_lock_with_key:  | GET | `api/v3/account/commission` |
| [getCrossMarginCollateralRatio()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1194) | :closed_lock_with_key:  | GET | `sapi/v1/margin/crossMarginCollateralRatio` |
| [getAllCrossMarginPairs()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1208) |  | GET | `sapi/v1/margin/allPairs` |
| [getIsolatedMarginAllSymbols()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1212) | :closed_lock_with_key:  | GET | `sapi/v1/margin/isolated/allPairs` |
| [getAllMarginAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1218) |  | GET | `sapi/v1/margin/allAssets` |
| [getMarginDelistSchedule()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1222) | :closed_lock_with_key:  | GET | `sapi/v1/margin/delist-schedule` |
| [getIsolatedMarginTierData()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1226) | :closed_lock_with_key:  | GET | `sapi/v1/margin/isolatedMarginTier` |
| [queryMarginPriceIndex()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1232) |  | GET | `sapi/v1/margin/priceIndex` |
| [getMarginAvailableInventory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1238) | :closed_lock_with_key:  | GET | `sapi/v1/margin/available-inventory` |
| [getLeverageBracket()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1244) | :closed_lock_with_key:  | GET | `sapi/v1/margin/leverageBracket` |
| [getNextHourlyInterestRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1254) | :closed_lock_with_key:  | GET | `sapi/v1/margin/next-hourly-interest-rate` |
| [getMarginInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1260) | :closed_lock_with_key:  | GET | `sapi/v1/margin/interestHistory` |
| [submitMarginAccountBorrowRepay()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1267) | :closed_lock_with_key:  | POST | `sapi/v1/margin/borrow-repay` |
| [getMarginAccountBorrowRepayRecords()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1273) | :closed_lock_with_key:  | GET | `sapi/v1/margin/borrow-repay` |
| [getMarginInterestRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1279) | :closed_lock_with_key:  | GET | `sapi/v1/margin/interestRateHistory` |
| [queryMaxBorrow()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1285) | :closed_lock_with_key:  | GET | `sapi/v1/margin/maxBorrowable` |
| [getMarginForceLiquidationRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1297) | :closed_lock_with_key:  | GET | `sapi/v1/margin/forceLiquidationRec` |
| [getSmallLiabilityExchangeCoins()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1306) | :closed_lock_with_key:  | GET | `sapi/v1/margin/exchange-small-liability` |
| [getSmallLiabilityExchangeHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1310) | :closed_lock_with_key:  | GET | `sapi/v1/margin/exchange-small-liability-history` |
| [marginAccountCancelOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1322) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/openOrders` |
| [marginAccountCancelOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1328) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/orderList` |
| [marginAccountCancelOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1333) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/order` |
| [marginAccountNewOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1339) | :closed_lock_with_key:  | POST | `sapi/v1/margin/order/oco` |
| [marginAccountNewOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1346) | :closed_lock_with_key:  | POST | `sapi/v1/margin/order` |
| [getMarginOrderCountUsage()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1354) | :closed_lock_with_key:  | GET | `sapi/v1/margin/rateLimit/order` |
| [queryMarginAccountAllOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1360) | :closed_lock_with_key:  | GET | `sapi/v1/margin/allOrderList` |
| [queryMarginAccountAllOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1366) | :closed_lock_with_key:  | GET | `sapi/v1/margin/allOrders` |
| [queryMarginAccountOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1372) | :closed_lock_with_key:  | GET | `sapi/v1/margin/orderList` |
| [queryMarginAccountOpenOCO()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1376) | :closed_lock_with_key:  | GET | `sapi/v1/margin/openOrderList` |
| [queryMarginAccountOpenOTOOrderLists()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1383) | :closed_lock_with_key:  | GET | `sapi/v1/margin/oto/openOrderList` |
| [queryMarginAccountOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1389) | :closed_lock_with_key:  | GET | `sapi/v1/margin/openOrders` |
| [queryMarginAccountOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1393) | :closed_lock_with_key:  | GET | `sapi/v1/margin/order` |
| [queryMarginAccountTradeList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1397) | :closed_lock_with_key:  | GET | `sapi/v1/margin/myTrades` |
| [submitSmallLiabilityExchange()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1403) | :closed_lock_with_key:  | POST | `sapi/v1/margin/exchange-small-liability` |
| [submitManualLiquidation()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1410) | :closed_lock_with_key:  | POST | `sapi/v1/margin/manual-liquidation` |
| [submitMarginOTOOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1419) | :closed_lock_with_key:  | POST | `sapi/v1/margin/order/oto` |
| [submitMarginOTOCOOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1431) | :closed_lock_with_key:  | POST | `sapi/v1/margin/order/otoco` |
| [createMarginSpecialLowLatencyKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1444) | :closed_lock_with_key:  | POST | `sapi/v1/margin/apiKey` |
| [deleteMarginSpecialLowLatencyKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1450) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/apiKey` |
| [updateMarginIPForSpecialLowLatencyKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1458) | :closed_lock_with_key:  | PUT | `sapi/v1/margin/apiKey/ip` |
| [getMarginSpecialLowLatencyKeys()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1469) | :closed_lock_with_key:  | GET | `sapi/v1/margin/api-key-list` |
| [getMarginSpecialLowLatencyKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1478) | :closed_lock_with_key:  | GET | `sapi/v1/margin/apiKey` |
| [getMarginLiquidationLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1488) | :closed_lock_with_key:  | GET | `sapi/v1/margin/liquidation-loan` |
| [repayMarginLiquidationLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1495) | :closed_lock_with_key:  | POST | `sapi/v1/margin/liquidation-loan/repay` |
| [getMarginLiquidationLoanRepayHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1504) | :closed_lock_with_key:  | GET | `sapi/v1/margin/liquidation-loan/repay-history` |
| [exitMarginSpecialKeyMode()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1516) | :closed_lock_with_key:  | POST | `sapi/v1/margin/exit-special-key-mode` |
| [getCrossMarginTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1526) | :closed_lock_with_key:  | GET | `sapi/v1/margin/transfer` |
| [queryMaxTransferOutAmount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1532) | :closed_lock_with_key:  | GET | `sapi/v1/margin/maxTransferable` |
| [updateCrossMarginMaxLeverage()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1544) | :closed_lock_with_key:  | POST | `sapi/v1/margin/max-leverage` |
| [disableIsolatedMarginAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1550) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/isolated/account` |
| [enableIsolatedMarginAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1557) | :closed_lock_with_key:  | POST | `sapi/v1/margin/isolated/account` |
| [getBNBBurn()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1564) | :closed_lock_with_key:  | GET | `sapi/v1/bnbBurn` |
| [getMarginSummary()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1568) | :closed_lock_with_key:  | GET | `sapi/v1/margin/tradeCoeff` |
| [queryCrossMarginAccountDetails()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1572) | :closed_lock_with_key:  | GET | `sapi/v1/margin/account` |
| [getCrossMarginFeeData()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1576) | :closed_lock_with_key:  | GET | `sapi/v1/margin/crossMarginData` |
| [getIsolatedMarginAccountLimit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1582) | :closed_lock_with_key:  | GET | `sapi/v1/margin/isolated/accountLimit` |
| [getIsolatedMarginAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1589) | :closed_lock_with_key:  | GET | `sapi/v1/margin/isolated/account` |
| [getIsolatedMarginFeeData()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1595) | :closed_lock_with_key:  | GET | `sapi/v1/margin/isolatedMarginData` |
| [toggleBNBBurn()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1601) | :closed_lock_with_key:  | POST | `sapi/v1/bnbBurn` |
| [getMarginCapitalFlow()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1609) | :closed_lock_with_key:  | GET | `sapi/v1/margin/capital-flow` |
| [queryLoanRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1618) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan` |
| [queryRepayRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1627) | :closed_lock_with_key:  | GET | `sapi/v1/margin/repay` |
| [isolatedMarginAccountTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1636) | :closed_lock_with_key:  | POST | `sapi/v1/margin/isolated/transfer` |
| [getBalances()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1648) | :closed_lock_with_key:  | GET | `sapi/v1/capital/config/getall` |
| [withdraw()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1652) | :closed_lock_with_key:  | POST | `sapi/v1/capital/withdraw/apply` |
| [getWithdrawHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1656) | :closed_lock_with_key:  | GET | `sapi/v1/capital/withdraw/history` |
| [getWithdrawAddresses()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1662) | :closed_lock_with_key:  | GET | `sapi/v1/capital/withdraw/address/list` |
| [getWithdrawQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1666) | :closed_lock_with_key:  | GET | `sapi/v1/capital/withdraw/quota` |
| [getDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1673) | :closed_lock_with_key:  | GET | `sapi/v1/capital/deposit/hisrec` |
| [getDepositAddress()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1677) | :closed_lock_with_key:  | GET | `sapi/v1/capital/deposit/address` |
| [getDepositAddresses()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1683) | :closed_lock_with_key:  | GET | `sapi/v1/capital/deposit/address/list` |
| [submitDepositCredit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1689) | :closed_lock_with_key:  | POST | `sapi/v1/capital/deposit/credit-apply` |
| [getAutoConvertStablecoins()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1698) | :closed_lock_with_key:  | GET | `sapi/v1/capital/contract/convertible-coins` |
| [setConvertibleCoins()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1705) | :closed_lock_with_key:  | POST | `sapi/v1/capital/contract/convertible-coins` |
| [getAssetDetail()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1718) | :closed_lock_with_key:  | GET | `sapi/v1/asset/assetDetail` |
| [getWalletBalances()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1724) | :closed_lock_with_key:  | GET | `sapi/v1/asset/wallet/balance` |
| [getUserAsset()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1730) | :closed_lock_with_key:  | POST | `sapi/v3/asset/getUserAsset` |
| [getSpotAssetTags()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1734) |  | GET | `sapi/v1/spot/asset/tags` |
| [submitUniversalTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1738) | :closed_lock_with_key:  | POST | `sapi/v1/asset/transfer` |
| [getUniversalTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1744) | :closed_lock_with_key:  | GET | `sapi/v1/asset/transfer` |
| [getDust()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1750) | :closed_lock_with_key:  | POST | `sapi/v1/asset/dust-btc` |
| [convertDustToBnb()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1754) | :closed_lock_with_key:  | POST | `sapi/v1/asset/dust` |
| [convertDustAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1761) | :closed_lock_with_key:  | POST | `sapi/v1/asset/dust-convert/convert` |
| [queryDustConvertibleAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1768) | :closed_lock_with_key:  | POST | `sapi/v1/asset/dust-convert/query-convertible-assets` |
| [getDustLog()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1777) | :closed_lock_with_key:  | GET | `sapi/v1/asset/dribblet` |
| [getAssetDividendRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1781) | :closed_lock_with_key:  | GET | `sapi/v1/asset/assetDividend` |
| [getTradeFee()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1785) | :closed_lock_with_key:  | GET | `sapi/v1/asset/tradeFee` |
| [getFundingAsset()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1789) | :closed_lock_with_key:  | POST | `sapi/v1/asset/get-funding-asset` |
| [getCloudMiningHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1793) | :closed_lock_with_key:  | GET | `sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage` |
| [getDelegationHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1803) | :closed_lock_with_key:  | GET | `sapi/v1/asset/custody/transfer-history` |
| [submitNewFutureAccountTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1833) | :closed_lock_with_key:  | POST | `sapi/v1/futures/transfer` |
| [getFutureAccountTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1843) | :closed_lock_with_key:  | GET | `sapi/v1/futures/transfer` |
| [getCrossCollateralBorrowHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1852) | :closed_lock_with_key:  | GET | `sapi/v1/futures/loan/borrow/history` |
| [getCrossCollateralRepaymentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1859) | :closed_lock_with_key:  | GET | `sapi/v1/futures/loan/repay/history` |
| [getCrossCollateralWalletV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1866) | :closed_lock_with_key:  | GET | `sapi/v2/futures/loan/wallet` |
| [getAdjustCrossCollateralLTVHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1873) | :closed_lock_with_key:  | GET | `sapi/v1/futures/loan/adjustCollateral/history` |
| [getCrossCollateralLiquidationHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1885) | :closed_lock_with_key:  | GET | `sapi/v1/futures/loan/liquidationHistory` |
| [getCrossCollateralInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1894) | :closed_lock_with_key:  | GET | `sapi/v1/futures/loan/interestHistory` |
| [getAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1906) | :closed_lock_with_key:  | GET | `sapi/v1/account/info` |
| [getDailyAccountSnapshot()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1910) | :closed_lock_with_key:  | GET | `sapi/v1/accountSnapshot` |
| [disableFastWithdrawSwitch()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1916) | :closed_lock_with_key:  | POST | `sapi/v1/account/disableFastWithdrawSwitch` |
| [enableFastWithdrawSwitch()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1920) | :closed_lock_with_key:  | POST | `sapi/v1/account/enableFastWithdrawSwitch` |
| [getAccountStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1924) | :closed_lock_with_key:  | GET | `sapi/v1/account/status` |
| [getApiTradingStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1928) | :closed_lock_with_key:  | GET | `sapi/v1/account/apiTradingStatus` |
| [getApiKeyPermissions()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1932) | :closed_lock_with_key:  | GET | `sapi/v1/account/apiRestrictions` |
| [withdrawTravelRule()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1948) | :closed_lock_with_key:  | POST | `sapi/v1/localentity/withdraw/apply` |
| [getTravelRuleWithdrawHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1959) | :closed_lock_with_key:  | GET | `sapi/v1/localentity/withdraw/history` |
| [getTravelRuleWithdrawHistoryV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1968) | :closed_lock_with_key:  | GET | `sapi/v2/localentity/withdraw/history` |
| [submitTravelRuleDepositQuestionnaire()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1980) | :closed_lock_with_key:  | PUT | `sapi/v1/localentity/deposit/provide-info` |
| [getTravelRuleDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L1989) | :closed_lock_with_key:  | GET | `sapi/v1/localentity/deposit/history` |
| [getOnboardedVASPList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2000) | :closed_lock_with_key:  | GET | `sapi/v1/localentity/vasp` |
| [getTravelRuleCountryList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2004) | :closed_lock_with_key:  | GET | `sapi/v1/localentity/country/list` |
| [getTravelRuleRegionList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2008) | :closed_lock_with_key:  | GET | `sapi/v1/localentity/region/list` |
| [getSystemStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2020) |  | GET | `sapi/v1/system/status` |
| [getDelistSchedule()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2024) | :closed_lock_with_key:  | GET | `sapi/v1/spot/delist-schedule` |
| [createVirtualSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2034) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/virtualSubAccount` |
| [getSubAccountList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2040) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/list` |
| [subAccountEnableFutures()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2046) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/futures/enable` |
| [subAccountEnableMargin()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2054) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/margin/enable` |
| [enableOptionsForSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2058) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/eoptions/enable` |
| [subAccountEnableLeverageToken()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2068) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/blvt/enable` |
| [getSubAccountStatusOnMarginOrFutures()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2074) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/status` |
| [getSubAccountFuturesPositionRisk()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2080) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/futures/positionRisk` |
| [getSubAccountFuturesPositionRiskV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2088) | :closed_lock_with_key:  | GET | `sapi/v2/sub-account/futures/positionRisk` |
| [getSubAccountTransactionStatistics()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2094) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/transaction-statistics` |
| [getSubAccountApiKeys()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2112) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/subAccountApi` |
| [createSubAccountApiKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2122) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/subAccountApi` |
| [deleteSubAccountApiKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2131) | :closed_lock_with_key:  | DELETE | `sapi/v1/sub-account/subAccountApi` |
| [modifySubAccountApiKeyPermission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2141) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/subAccountApiPermission` |
| [getSubAccountIPRestriction()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2150) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/subAccountApi/ipRestriction` |
| [subAccountDeleteIPList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2159) | :closed_lock_with_key:  | DELETE | `sapi/v1/sub-account/subAccountApi/ipRestriction/ipList` |
| [subAccountAddIPRestriction()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2168) | :closed_lock_with_key:  | POST | `sapi/v2/sub-account/subAccountApi/ipRestriction` |
| [subAccountAddIPList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2181) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/subAccountApi/ipRestriction/ipList` |
| [subAccountEnableOrDisableIPRestriction()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2194) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/subAccountApi/ipRestriction` |
| [subAccountFuturesTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2209) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/futures/transfer` |
| [getSubAccountFuturesAccountDetail()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2215) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/futures/account` |
| [getSubAccountDetailOnFuturesAccountV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2221) | :closed_lock_with_key:  | GET | `sapi/v2/sub-account/futures/account` |
| [getSubAccountDetailOnMarginAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2227) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/margin/account` |
| [getSubAccountDepositAddress()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2233) | :closed_lock_with_key:  | GET | `sapi/v1/capital/deposit/subAddress` |
| [getSubAccountDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2239) | :closed_lock_with_key:  | GET | `sapi/v1/capital/deposit/subHisrec` |
| [getSubAccountFuturesAccountSummary()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2245) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/futures/accountSummary` |
| [getSubAccountSummaryOnFuturesAccountV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2249) | :closed_lock_with_key:  | GET | `sapi/v2/sub-account/futures/accountSummary` |
| [getSubAccountsSummaryOfMarginAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2258) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/margin/accountSummary` |
| [subAccountMarginTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2262) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/margin/transfer` |
| [getSubAccountAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2268) | :closed_lock_with_key:  | GET | `sapi/v3/sub-account/assets` |
| [getSubAccountAssetsMaster()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2274) | :closed_lock_with_key:  | GET | `sapi/v4/sub-account/assets` |
| [getSubAccountFuturesAssetTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2280) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/futures/internalTransfer` |
| [getSubAccountSpotAssetTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2289) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/sub/transfer/history` |
| [getSubAccountSpotAssetsSummary()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2295) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/spotSummary` |
| [getSubAccountUniversalTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2301) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/universalTransfer` |
| [subAccountFuturesAssetTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2307) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/futures/internalTransfer` |
| [subAccountTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2316) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/transfer/subUserHistory` |
| [subAccountTransferToMaster()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2325) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/transfer/subToMaster` |
| [subAccountTransferToSameMaster()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2331) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/transfer/subToSub` |
| [subAccountUniversalTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2337) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/universalTransfer` |
| [subAccountMovePosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2343) | :closed_lock_with_key:  | POST | `sapi/v1/sub-account/futures/move-position` |
| [getSubAccountFuturesPositionMoveHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2352) | :closed_lock_with_key:  | GET | `sapi/v1/sub-account/futures/move-position` |
| [depositAssetsIntoManagedSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2367) | :closed_lock_with_key:  | POST | `sapi/v1/managed-subaccount/deposit` |
| [getManagedSubAccountDepositAddress()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2373) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/deposit/address` |
| [withdrawAssetsFromManagedSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2382) | :closed_lock_with_key:  | POST | `sapi/v1/managed-subaccount/withdraw` |
| [getManagedSubAccountTransfersParent()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2388) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/queryTransLogForTradeParent` |
| [getManagedSubAccountTransferLog()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2400) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/query-trans-log` |
| [getManagedSubAccountTransfersInvestor()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2412) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/queryTransLogForInvestor` |
| [getManagedSubAccounts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2424) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/info` |
| [getManagedSubAccountSnapshot()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2431) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/accountSnapshot` |
| [getManagedSubAccountAssetDetails()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2440) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/asset` |
| [getManagedSubAccountMarginAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2446) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/marginAsset` |
| [getManagedSubAccountFuturesAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2453) | :closed_lock_with_key:  | GET | `sapi/v1/managed-subaccount/fetch-future-asset` |
| [getAutoInvestAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2469) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/all/asset` |
| [getAutoInvestSourceAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2476) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/source-asset/list` |
| [getAutoInvestTargetAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2485) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/target-asset/list` |
| [getAutoInvestTargetAssetsROI()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2494) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/target-asset/roi/list` |
| [getAutoInvestIndex()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2503) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/index/info` |
| [getAutoInvestPlans()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2509) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/plan/list` |
| [submitAutoInvestOneTimeTransaction()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2527) | :closed_lock_with_key:  | POST | `sapi/v1/lending/auto-invest/one-off` |
| [updateAutoInvestPlanStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2543) | :closed_lock_with_key:  | POST | `sapi/v1/lending/auto-invest/plan/edit-status` |
| [updateAutoInvestmentPlan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2552) | :closed_lock_with_key:  | POST | `sapi/v1/lending/auto-invest/plan/edit` |
| [submitAutoInvestRedemption()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2569) | :closed_lock_with_key:  | POST | `sapi/v1/lending/auto-invest/redeem` |
| [getAutoInvestSubscriptionTransactions()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2577) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/history/list` |
| [getOneTimeTransactionStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2583) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/one-off/status` |
| [submitAutoInvestmentPlan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2592) | :closed_lock_with_key:  | POST | `sapi/v1/lending/auto-invest/plan/add` |
| [getAutoInvestRedemptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2607) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/redeem/history` |
| [getAutoInvestPlan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2616) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/plan/id` |
| [getAutoInvestUserIndex()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2620) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/index/user-summary` |
| [getAutoInvestRebalanceHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2629) | :closed_lock_with_key:  | GET | `sapi/v1/lending/auto-invest/rebalance/history` |
| [getConvertPairs()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2644) | :closed_lock_with_key:  | GET | `sapi/v1/convert/exchangeInfo` |
| [getConvertAssetInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2648) | :closed_lock_with_key:  | GET | `sapi/v1/convert/assetInfo` |
| [convertQuoteRequest()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2658) | :closed_lock_with_key:  | POST | `sapi/v1/convert/getQuote` |
| [acceptQuoteRequest()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2662) | :closed_lock_with_key:  | POST | `sapi/v1/convert/acceptQuote` |
| [getConvertTradeHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2666) | :closed_lock_with_key:  | GET | `sapi/v1/convert/tradeFlow` |
| [getOrderStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2670) | :closed_lock_with_key:  | GET | `sapi/v1/convert/orderStatus` |
| [submitConvertLimitOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2674) | :closed_lock_with_key:  | POST | `sapi/v1/convert/limit/placeOrder` |
| [cancelConvertLimitOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2678) | :closed_lock_with_key:  | POST | `sapi/v1/convert/limit/cancelOrder` |
| [getConvertLimitOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2682) | :closed_lock_with_key:  | GET | `sapi/v1/convert/limit/queryOpenOrders` |
| [getEthStakingAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2697) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/account` |
| [getEthStakingAccountV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2701) | :closed_lock_with_key:  | GET | `sapi/v2/eth-staking/account` |
| [getEthStakingQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2705) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/quota` |
| [subscribeEthStakingV1()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2718) | :closed_lock_with_key:  | POST | `sapi/v1/eth-staking/eth/stake` |
| [subscribeEthStakingV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2724) | :closed_lock_with_key:  | POST | `sapi/v2/eth-staking/eth/stake` |
| [redeemEth()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2730) | :closed_lock_with_key:  | POST | `sapi/v1/eth-staking/eth/redeem` |
| [wrapBeth()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2734) | :closed_lock_with_key:  | POST | `sapi/v1/eth-staking/wbeth/wrap` |
| [getEthStakingHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2744) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/history/stakingHistory` |
| [getEthRedemptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2754) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/history/redemptionHistory` |
| [getBethRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2764) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/history/rewardsHistory` |
| [getWbethRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2774) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/history/wbethRewardsHistory` |
| [getEthRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2783) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/eth/history/rateHistory` |
| [getBethWrapHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2793) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/wbeth/history/wrapHistory` |
| [getBethUnwrapHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2803) | :closed_lock_with_key:  | GET | `sapi/v1/eth-staking/wbeth/history/unwrapHistory` |
| [getBfusdAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2819) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/account` |
| [getBfusdQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2823) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/quota` |
| [subscribeBfusd()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2827) | :closed_lock_with_key:  | POST | `sapi/v1/bfusd/subscribe` |
| [redeemBfusd()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2833) | :closed_lock_with_key:  | POST | `sapi/v1/bfusd/redeem` |
| [getBfusdSubscriptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2837) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/history/subscriptionHistory` |
| [getBfusdRedemptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2843) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/history/redemptionHistory` |
| [getBfusdRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2849) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/history/rewardsHistory` |
| [getBfusdRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2855) | :closed_lock_with_key:  | GET | `sapi/v1/bfusd/history/rateHistory` |
| [getRwusdAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2867) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/account` |
| [getRwusdQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2871) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/quota` |
| [subscribeRwusd()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2875) | :closed_lock_with_key:  | POST | `sapi/v1/rwusd/subscribe` |
| [redeemRwusd()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2881) | :closed_lock_with_key:  | POST | `sapi/v1/rwusd/redeem` |
| [getRwusdSubscriptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2885) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/history/subscriptionHistory` |
| [getRwusdRedemptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2891) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/history/redemptionHistory` |
| [getRwusdRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2897) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/history/rewardsHistory` |
| [getRwusdRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2903) | :closed_lock_with_key:  | GET | `sapi/v1/rwusd/history/rateHistory` |
| [getStakingProducts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2912) | :closed_lock_with_key:  | GET | `sapi/v1/staking/productList` |
| [getStakingProductPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2923) | :closed_lock_with_key:  | GET | `sapi/v1/staking/position` |
| [getStakingHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2935) | :closed_lock_with_key:  | GET | `sapi/v1/staking/stakingRecord` |
| [getPersonalLeftQuotaOfStakingProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2942) | :closed_lock_with_key:  | GET | `sapi/v1/staking/personalLeftQuota` |
| [getSolStakingAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2955) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/account` |
| [getSolStakingQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2959) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/quota` |
| [subscribeSolStaking()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2969) | :closed_lock_with_key:  | POST | `sapi/v1/sol-staking/sol/stake` |
| [redeemSol()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2975) | :closed_lock_with_key:  | POST | `sapi/v1/sol-staking/sol/redeem` |
| [claimSolBoostRewards()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2979) | :closed_lock_with_key:  | POST | `sapi/v1/sol-staking/sol/claim` |
| [getSolStakingHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L2991) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/stakingHistory` |
| [getSolRedemptionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3001) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/redemptionHistory` |
| [getBnsolRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3011) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/bnsolRewardsHistory` |
| [getBnsolRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3022) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/rateHistory` |
| [getSolBoostRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3032) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/boostRewardsHistory` |
| [getSolUnclaimedRewards()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3042) | :closed_lock_with_key:  | GET | `sapi/v1/sol-staking/sol/history/unclaimedRewards` |
| [getOnchainYieldsLockedProducts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3057) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/list` |
| [getOnchainYieldsLockedPersonalLeftQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3063) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/personalLeftQuota` |
| [getOnchainYieldsLockedPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3072) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/position` |
| [getOnchainYieldsAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3078) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/account` |
| [getOnchainYieldsLockedSubscriptionPreview()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3088) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/subscriptionPreview` |
| [subscribeOnchainYieldsLockedProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3097) | :closed_lock_with_key:  | POST | `sapi/v1/onchain-yields/locked/subscribe` |
| [setOnchainYieldsLockedAutoSubscribe()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3103) | :closed_lock_with_key:  | POST | `sapi/v1/onchain-yields/locked/setAutoSubscribe` |
| [setOnchainYieldsLockedRedeemOption()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3112) | :closed_lock_with_key:  | POST | `sapi/v1/onchain-yields/locked/setRedeemOption` |
| [redeemOnchainYieldsLockedProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3121) | :closed_lock_with_key:  | POST | `sapi/v1/onchain-yields/locked/redeem` |
| [getOnchainYieldsLockedSubscriptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3133) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/history/subscriptionRecord` |
| [getOnchainYieldsLockedRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3142) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/history/rewardsRecord` |
| [getOnchainYieldsLockedRedemptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3151) | :closed_lock_with_key:  | GET | `sapi/v1/onchain-yields/locked/history/redemptionRecord` |
| [getSoftStakingProductList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3166) | :closed_lock_with_key:  | GET | `sapi/v1/soft-staking/list` |
| [setSoftStaking()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3172) | :closed_lock_with_key:  | GET | `sapi/v1/soft-staking/set` |
| [getSoftStakingRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3178) | :closed_lock_with_key:  | GET | `sapi/v1/soft-staking/history/rewardsRecord` |
| [getFuturesLeadTraderStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3193) | :closed_lock_with_key:  | GET | `sapi/v1/copyTrading/futures/userStatus` |
| [getFuturesLeadTradingSymbolWhitelist()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3197) | :closed_lock_with_key:  | GET | `sapi/v1/copyTrading/futures/leadSymbol` |
| [getMiningAlgos()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3209) |  | GET | `sapi/v1/mining/pub/algoList` |
| [getMiningCoins()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3213) |  | GET | `sapi/v1/mining/pub/coinList` |
| [getHashrateResales()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3217) | :closed_lock_with_key:  | GET | `sapi/v1/mining/hash-transfer/config/details/list` |
| [getMiners()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3226) | :closed_lock_with_key:  | GET | `sapi/v1/mining/worker/list` |
| [getMinerDetails()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3230) | :closed_lock_with_key:  | GET | `sapi/v1/mining/worker/detail` |
| [getExtraBonuses()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3236) | :closed_lock_with_key:  | GET | `sapi/v1/mining/payment/other` |
| [getMiningEarnings()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3242) | :closed_lock_with_key:  | GET | `sapi/v1/mining/payment/list` |
| [cancelHashrateResaleConfig()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3248) | :closed_lock_with_key:  | POST | `sapi/v1/mining/hash-transfer/config/cancel` |
| [getHashrateResale()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3257) | :closed_lock_with_key:  | GET | `sapi/v1/mining/hash-transfer/profit/details` |
| [getMiningAccountEarnings()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3266) | :closed_lock_with_key:  | GET | `sapi/v1/mining/payment/uid` |
| [getMiningStatistics()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3272) | :closed_lock_with_key:  | GET | `sapi/v1/mining/statistics/user/status` |
| [submitHashrateResale()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3278) | :closed_lock_with_key:  | POST | `sapi/v1/mining/hash-transfer/config` |
| [getMiningAccounts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3282) | :closed_lock_with_key:  | GET | `sapi/v1/mining/statistics/user/list` |
| [submitVpNewOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3294) | :closed_lock_with_key:  | POST | `sapi/v1/algo/futures/newOrderVp` |
| [submitTwapNewOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3301) | :closed_lock_with_key:  | POST | `sapi/v1/algo/futures/newOrderTwap` |
| [cancelAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3308) | :closed_lock_with_key:  | DELETE | `sapi/v1/algo/futures/order` |
| [getAlgoSubOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3316) | :closed_lock_with_key:  | GET | `sapi/v1/algo/futures/subOrders` |
| [getAlgoOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3322) | :closed_lock_with_key:  | GET | `sapi/v1/algo/futures/openOrders` |
| [getAlgoHistoricalOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3329) | :closed_lock_with_key:  | GET | `sapi/v1/algo/futures/historicalOrders` |
| [submitSpotAlgoTwapOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3342) | :closed_lock_with_key:  | POST | `sapi/v1/algo/spot/newOrderTwap` |
| [cancelSpotAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3349) | :closed_lock_with_key:  | DELETE | `sapi/v1/algo/spot/order` |
| [getSpotAlgoSubOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3357) | :closed_lock_with_key:  | GET | `sapi/v1/algo/spot/subOrders` |
| [getSpotAlgoOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3363) | :closed_lock_with_key:  | GET | `sapi/v1/algo/spot/openOrders` |
| [getSpotAlgoHistoricalOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3370) | :closed_lock_with_key:  | GET | `sapi/v1/algo/spot/historicalOrders` |
| [getCryptoLoanFlexibleCollateralAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3385) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/collateral/data` |
| [getCryptoLoanFlexibleAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3394) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/loanable/data` |
| [borrowCryptoLoanFlexible()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3407) | :closed_lock_with_key:  | POST | `sapi/v2/loan/flexible/borrow` |
| [repayCryptoLoanFlexible()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3413) | :closed_lock_with_key:  | POST | `sapi/v2/loan/flexible/repay` |
| [repayCryptoLoanFlexibleWithCollateral()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3419) | :closed_lock_with_key:  | POST | `sapi/v2/loan/flexible/repay/collateral` |
| [adjustCryptoLoanFlexibleLTV()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3425) | :closed_lock_with_key:  | POST | `sapi/v2/loan/flexible/adjust/ltv` |
| [getCryptoLoanFlexibleLTVAdjustmentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3437) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/ltv/adjustment/history` |
| [getFlexibleLoanCollateralRepayRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3449) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/repay/rate` |
| [getLoanFlexibleBorrowHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3460) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/borrow/history` |
| [getCryptoLoanFlexibleOngoingOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3469) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/ongoing/orders` |
| [getFlexibleLoanLiquidationHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3478) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/liquidation/history` |
| [getLoanFlexibleRepaymentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3487) | :closed_lock_with_key:  | GET | `sapi/v2/loan/flexible/repay/history` |
| [getCryptoLoanLoanableAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3505) | :closed_lock_with_key:  | GET | `sapi/v1/loan/loanable/data` |
| [getCryptoLoanCollateralRepayRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3512) | :closed_lock_with_key:  | GET | `sapi/v1/loan/repay/collateral/rate` |
| [getCryptoLoanCollateralAssetsData()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3521) | :closed_lock_with_key:  | GET | `sapi/v1/loan/collateral/data` |
| [getCryptoLoansIncomeHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3534) | :closed_lock_with_key:  | GET | `sapi/v1/loan/income` |
| [borrowCryptoLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3549) | :closed_lock_with_key:  | POST | `sapi/v1/loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3558) | :closed_lock_with_key:  | POST | `sapi/v1/loan/repay` |
| [adjustCryptoLoanLTV()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3567) | :closed_lock_with_key:  | POST | `sapi/v1/loan/adjust/ltv` |
| [customizeCryptoLoanMarginCall()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3576) | :closed_lock_with_key:  | POST | `sapi/v1/loan/customize/margin_call` |
| [getCryptoLoanOngoingOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3592) | :closed_lock_with_key:  | GET | `sapi/v1/loan/ongoing/orders` |
| [getCryptoLoanBorrowHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3603) | :closed_lock_with_key:  | GET | `sapi/v1/loan/borrow/history` |
| [getCryptoLoanLTVAdjustmentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3614) | :closed_lock_with_key:  | GET | `sapi/v1/loan/ltv/adjustment/history` |
| [getCryptoLoanRepaymentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3627) | :closed_lock_with_key:  | GET | `sapi/v1/loan/repay/history` |
| [getSimpleEarnAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3639) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/account` |
| [getFlexibleSavingProducts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3643) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/list` |
| [getSimpleEarnLockedProductList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3650) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/list` |
| [getFlexibleProductPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3659) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/position` |
| [getLockedProductPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3668) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/position` |
| [getFlexiblePersonalLeftQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3677) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/personalLeftQuota` |
| [getLockedPersonalLeftQuota()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3686) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/personalLeftQuota` |
| [purchaseFlexibleProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3701) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/flexible/subscribe` |
| [subscribeSimpleEarnLockedProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3707) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/locked/subscribe` |
| [redeemFlexibleProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3713) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/flexible/redeem` |
| [redeemLockedProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3719) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/locked/redeem` |
| [setFlexibleAutoSubscribe()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3725) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/flexible/setAutoSubscribe` |
| [setLockedAutoSubscribe()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3734) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/locked/setAutoSubscribe` |
| [getFlexibleSubscriptionPreview()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3743) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/subscriptionPreview` |
| [getLockedSubscriptionPreview()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3752) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/subscriptionPreview` |
| [setLockedProductRedeemOption()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3761) | :closed_lock_with_key:  | POST | `sapi/v1/simple-earn/locked/setRedeemOption` |
| [getFlexibleSubscriptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3779) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/history/subscriptionRecord` |
| [getLockedSubscriptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3791) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/history/subscriptionRecord` |
| [getFlexibleRedemptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3803) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/history/redemptionRecord` |
| [getLockedRedemptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3815) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/history/redemptionRecord` |
| [getFlexibleRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3825) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/history/rewardsRecord` |
| [getLockedRewardsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3835) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/locked/history/rewardsRecord` |
| [getCollateralRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3845) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/history/collateralRecord` |
| [getRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3855) | :closed_lock_with_key:  | GET | `sapi/v1/simple-earn/flexible/history/rateHistory` |
| [getVipBorrowInterestRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3871) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/request/interestRate` |
| [getVipLoanInterestRateHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3877) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/interestRateHistory` |
| [getVipLoanableAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3886) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/loanable/data` |
| [getVipCollateralAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3893) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/collateral/data` |
| [getVipLoanOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3906) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/ongoing/orders` |
| [getVipLoanRepaymentHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3913) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/repay/history` |
| [checkVipCollateralAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3922) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/collateral/account` |
| [getVipApplicationStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3929) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/request/data` |
| [renewVipLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3942) | :closed_lock_with_key:  | POST | `sapi/v1/loan/vip/renew` |
| [repayVipLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3946) | :closed_lock_with_key:  | POST | `sapi/v1/loan/vip/repay` |
| [borrowVipLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3950) | :closed_lock_with_key:  | POST | `sapi/v1/loan/vip/borrow` |
| [getVipLoanFixedRateMarket()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3954) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/fixed/market` |
| [borrowVipLoanFixedRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3961) | :closed_lock_with_key:  | POST | `sapi/v1/loan/vip/fixed/borrow` |
| [getDualInvestmentProducts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3973) | :closed_lock_with_key:  | GET | `sapi/v1/dci/product/list` |
| [subscribeDualInvestmentProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3988) | :closed_lock_with_key:  | POST | `sapi/v1/dci/product/subscribe` |
| [getDualInvestmentPositions()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L3994) | :closed_lock_with_key:  | GET | `sapi/v1/dci/product/positions` |
| [getDualInvestmentAccounts()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4003) | :closed_lock_with_key:  | GET | `sapi/v1/dci/product/accounts` |
| [getVipLoanAccruedInterest()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4007) | :closed_lock_with_key:  | GET | `sapi/v1/loan/vip/accruedInterest` |
| [updateAutoCompoundStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4021) | :closed_lock_with_key:  | POST | `sapi/v1/dci/product/auto_compound/edit-status` |
| [createGiftCard()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4036) | :closed_lock_with_key:  | POST | `sapi/v1/giftcard/createCode` |
| [createDualTokenGiftCard()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4040) | :closed_lock_with_key:  | POST | `sapi/v1/giftcard/buyCode` |
| [redeemGiftCard()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4044) | :closed_lock_with_key:  | POST | `sapi/v1/giftcard/redeemCode` |
| [verifyGiftCard()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4048) | :closed_lock_with_key:  | GET | `sapi/v1/giftcard/verify` |
| [getTokenLimit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4052) | :closed_lock_with_key:  | GET | `sapi/v1/giftcard/buyCode/token-limit` |
| [getRsaPublicKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4056) | :closed_lock_with_key:  | GET | `sapi/v1/giftcard/cryptography/rsa-public-key` |
| [getNftTransactionHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4066) | :closed_lock_with_key:  | GET | `sapi/v1/nft/history/transactions` |
| [getNftDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4073) | :closed_lock_with_key:  | GET | `sapi/v1/nft/history/deposit` |
| [getNftWithdrawHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4080) | :closed_lock_with_key:  | GET | `sapi/v1/nft/history/withdraw` |
| [getNftAsset()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4087) | :closed_lock_with_key:  | GET | `sapi/v1/nft/user/getAsset` |
| [getC2CTradeHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4100) | :closed_lock_with_key:  | GET | `sapi/v1/c2c/orderMatch/listUserOrderHistory` |
| [getFiatOrderHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4115) | :closed_lock_with_key:  | GET | `sapi/v1/fiat/orders` |
| [getFiatPaymentsHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4121) | :closed_lock_with_key:  | GET | `sapi/v1/fiat/payments` |
| [fiatWithdraw()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4127) | :closed_lock_with_key:  | POST | `/sapi/v2/fiat/withdraw` |
| [fiatDeposit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4131) | :closed_lock_with_key:  | POST | `sapi/v1/fiat/deposit` |
| [getFiatOrderDetail()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4135) | :closed_lock_with_key:  | GET | `sapi/v1/fiat/get-order-detail` |
| [getSpotRebateHistoryRecords()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4147) | :closed_lock_with_key:  | GET | `sapi/v1/rebate/taxQuery` |
| [getPortfolioMarginIndexPrice()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4160) |  | GET | `sapi/v1/portfolio/asset-index-price` |
| [getPortfolioMarginAssetLeverage()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4166) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/margin-asset-leverage` |
| [getPortfolioMarginProCollateralRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4172) |  | GET | `sapi/v1/portfolio/collateralRate` |
| [getPortfolioMarginProTieredCollateralRate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4178) |  | GET | `sapi/v2/portfolio/collateralRate` |
| [getPortfolioMarginProAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4189) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/account` |
| [getPortfolioDeltaMode()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4193) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/delta-mode` |
| [switchPortfolioDeltaMode()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4197) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/delta-mode` |
| [setPortfolioMarginMarginCallLevel()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4203) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/margin-call-level` |
| [getPortfolioMarginMarginCallLevel()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4209) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/margin-call-level` |
| [deletePortfolioMarginMarginCallLevel()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4213) | :closed_lock_with_key:  | DELETE | `sapi/v1/portfolio/margin-call-level` |
| [bnbTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4217) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/bnb-transfer` |
| [submitPortfolioMarginProFullTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4223) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/auto-collection` |
| [submitPortfolioMarginProSpecificTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4236) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/asset-collection` |
| [repayPortfolioMarginProBankruptcyLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4246) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/repay` |
| [getPortfolioMarginProBankruptcyLoanAmount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4254) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/pmLoan` |
| [repayFuturesNegativeBalance()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4258) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/repay-futures-negative-balance` |
| [updateAutoRepayFuturesStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4264) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/repay-futures-switch` |
| [getAutoRepayFuturesStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4270) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/repay-futures-switch` |
| [getPortfolioMarginProInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4276) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/interest-history` |
| [getPortfolioMarginProSpanAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4282) | :closed_lock_with_key:  | GET | `sapi/v2/portfolio/account` |
| [getPortfolioMarginProAccountBalance()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4286) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/balance` |
| [mintPortfolioMarginBFUSD()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4296) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/mint` |
| [redeemPortfolioMarginBFUSD()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4306) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/redeem` |
| [getPortfolioMarginBankruptcyLoanRepayHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4314) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/pmLoan-history` |
| [transferLDUSDTPortfolioMargin()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4329) | :closed_lock_with_key:  | POST | `sapi/v1/portfolio/earn-asset-transfer` |
| [getTransferableEarnAssetBalanceForPortfolioMargin()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4342) | :closed_lock_with_key:  | GET | `sapi/v1/portfolio/earn-asset-balance` |
| [getFuturesTickLevelOrderbookDataLink()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4359) | :closed_lock_with_key:  | GET | `sapi/v1/futures/histDataLink` |
| [getBlvtInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4373) |  | GET | `sapi/v1/blvt/tokenInfo` |
| [subscribeBlvt()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4377) | :closed_lock_with_key:  | POST | `sapi/v1/blvt/subscribe` |
| [getBlvtSubscriptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4381) | :closed_lock_with_key:  | GET | `sapi/v1/blvt/subscribe/record` |
| [redeemBlvt()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4387) | :closed_lock_with_key:  | POST | `sapi/v1/blvt/redeem` |
| [getBlvtRedemptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4391) | :closed_lock_with_key:  | GET | `sapi/v1/blvt/redeem/record` |
| [getBlvtUserLimitInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4397) | :closed_lock_with_key:  | GET | `sapi/v1/blvt/userLimit` |
| [getPayTransactions()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4408) | :closed_lock_with_key:  | GET | `sapi/v1/pay/transactions` |
| [getInstLoanRiskUnit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4418) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/ltv-details` |
| [closeInstLoanRiskUnit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4424) | :closed_lock_with_key:  | DELETE | `sapi/v1/margin/loan-group` |
| [addInstLoanCollateralAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4428) | :closed_lock_with_key:  | POST | `sapi/v1/margin/loan-group/edit-member` |
| [getActiveInstLoanRiskUnits()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4434) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-groups/activated` |
| [getClosedInstLoanRiskUnits()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4438) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-groups/closed` |
| [getInstLoanForceLiquidationRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4450) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/force-liquidation` |
| [transferInstLoanRiskUnit()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4464) | :closed_lock_with_key:  | POST | `sapi/v1/margin/loan-group/transfer-out` |
| [getInstitutionalLoanMaxBorrowable()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4476) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/max-borrowable` |
| [borrowInstitutionalLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4482) | :closed_lock_with_key:  | POST | `sapi/v1/margin/loan-group/borrow` |
| [getInstLoanInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4488) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/interest-history` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4497) | :closed_lock_with_key:  | POST | `sapi/v1/margin/loan-group/repay` |
| [getInstLoanBorrowRepayRecords()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4503) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/borrow-repay` |
| [getMarginInterestRebateBalance()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4509) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/interest-rebate-balance` |
| [getMarginInterestRebateBalanceRecords()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4513) | :closed_lock_with_key:  | GET | `sapi/v1/margin/loan-group/interest-rebate-balance/records` |
| [getAlphaTokenList()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4528) |  | GET | `bapi/defi/v1/public/wallet-direct/buw/wallet/cex/alpha/all/token/list` |
| [getAlphaExchangeInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4535) |  | GET | `bapi/defi/v1/public/alpha-trade/get-exchange-info` |
| [getAlphaAggTrades()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4542) |  | GET | `bapi/defi/v1/public/alpha-trade/agg-trades` |
| [getAlphaKlines()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4550) |  | GET | `bapi/defi/v1/public/alpha-trade/klines` |
| [getAlphaTicker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4558) |  | GET | `bapi/defi/v1/public/alpha-trade/ticker` |
| [getAlphaFullDepth()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4566) |  | GET | `bapi/defi/v1/public/alpha-trade/fullDepth` |
| [createBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4582) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount` |
| [getBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4588) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccount` |
| [enableMarginBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4594) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount/futures` |
| [createApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4600) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi` |
| [changePermissionApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4606) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/permission` |
| [changeComissionBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4612) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/permission` |
| [enableUniversalTransferApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4618) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/permission/universalTransfer` |
| [updateIpRestrictionForSubAccountApiKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4627) | :closed_lock_with_key:  | POST | `sapi/v2/broker/subAccountApi/ipRestriction` |
| [deleteIPRestrictionForSubAccountApiKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4641) | :closed_lock_with_key:  | DELETE | `sapi/v1/broker/subAccountApi/ipRestriction/ipList` |
| [deleteApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4657) | :closed_lock_with_key:  | DELETE | `sapi/v1/broker/subAccountApi` |
| [getSubAccountBrokerIpRestriction()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4663) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccountApi/ipRestriction` |
| [getApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4679) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccountApi` |
| [getBrokerInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4685) | :closed_lock_with_key:  | GET | `sapi/v1/broker/info` |
| [updateSubAccountBNBBurn()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4689) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount/bnbBurn/spot` |
| [updateSubAccountMarginInterestBNBBurn()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4699) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount/bnbBurn/marginInterest` |
| [getSubAccountBNBBurnStatus()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4712) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccount/bnbBurn/status` |
| [deleteBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4728) | :closed_lock_with_key:  | DELETE | `/sapi/v1/broker/subAccount` |
| [transferBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4738) | :closed_lock_with_key:  | POST | `sapi/v1/broker/transfer` |
| [getBrokerSubAccountHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4744) | :closed_lock_with_key:  | GET | `sapi/v1/broker/transfer` |
| [submitBrokerSubFuturesTransfer()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4750) | :closed_lock_with_key:  | POST | `sapi/v1/broker/transfer/futures` |
| [getSubAccountFuturesTransferHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4765) | :closed_lock_with_key:  | GET | `sapi/v1/broker/transfer/futures` |
| [getBrokerSubDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4777) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccount/depositHist` |
| [getBrokerSubAccountSpotAssets()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4783) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccount/spotSummary` |
| [getSubAccountMarginAssetInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4792) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccount/marginSummary` |
| [querySubAccountFuturesAssetInfo()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4801) | :closed_lock_with_key:  | GET | `sapi/v3/broker/subAccount/futuresSummary` |
| [universalTransferBroker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4810) | :closed_lock_with_key:  | POST | `sapi/v1/broker/universalTransfer` |
| [getUniversalTransferBroker()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4817) | :closed_lock_with_key:  | GET | `sapi/v1/broker/universalTransfer` |
| [updateBrokerSubAccountCommission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4829) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/commission` |
| [updateBrokerSubAccountFuturesCommission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4835) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/commission/futures` |
| [getBrokerSubAccountFuturesCommission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4844) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccountApi/commission/futures` |
| [updateBrokerSubAccountCoinFuturesCommission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4853) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccountApi/commission/coinFutures` |
| [getBrokerSubAccountCoinFuturesCommission()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4862) | :closed_lock_with_key:  | GET | `sapi/v1/broker/subAccountApi/commission/coinFutures` |
| [getBrokerSpotCommissionRebate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4871) | :closed_lock_with_key:  | GET | `sapi/v1/broker/rebate/recentRecord` |
| [getBrokerFuturesCommissionRebate()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4877) | :closed_lock_with_key:  | GET | `sapi/v1/broker/rebate/futures/recentRecord` |
| [getBrokerIfNewSpotUser()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4914) | :closed_lock_with_key:  | GET | `sapi/v1/apiReferral/ifNewUser` |
| [getBrokerSubAccountDepositHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4925) | :closed_lock_with_key:  | GET | `sapi/v1/bv1/apiReferral/ifNewUser` |
| [enableFuturesBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4944) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount` |
| [enableMarginApiKeyBrokerSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4954) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount/margin` |
| [getSpotUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4995) |  | POST | `api/v3/userDataStream` |
| [keepAliveSpotUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L4999) |  | PUT | `api/v3/userDataStream?listenKey=${listenKey}` |
| [closeSpotUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5003) |  | DELETE | `api/v3/userDataStream?listenKey=${listenKey}` |
| [getMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5010) |  | POST | `sapi/v1/userDataStream` |
| [keepAliveMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5014) |  | PUT | `sapi/v1/userDataStream?listenKey=${listenKey}` |
| [closeMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5018) |  | DELETE | `sapi/v1/userDataStream?listenKey=${listenKey}` |
| [getIsolatedMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5023) |  | POST | `sapi/v1/userDataStream/isolated?${serialiseParams(params` |
| [keepAliveIsolatedMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5031) |  | PUT | `sapi/v1/userDataStream/isolated?${serialiseParams(params` |
| [closeIsolatedMarginUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5040) |  | DELETE | `sapi/v1/userDataStream/isolated?${serialiseParams(params` |
| [getMarginRiskUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5052) |  | POST | `sapi/v1/margin/listen-key` |
| [keepAliveMarginRiskUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5056) |  | PUT | `sapi/v1/margin/listen-key?listenKey=${listenKey}` |
| [closeMarginRiskUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5060) |  | DELETE | `sapi/v1/margin/listen-key` |
| [getMarginUserDataListenKeyV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5072) |  | POST | `sapi/v2/margin/listen-key` |
| [keepAliveMarginUserDataListenKeyV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5080) |  | PUT | `sapi/v2/margin/listen-key?listenKey=${listenKey}` |
| [closeMarginUserDataListenKeyV2()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5088) |  | DELETE | `sapi/v2/margin/listen-key` |
| [getMarginUtaUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5092) |  | POST | `sapi/v2/margin/uta/listen-key` |
| [keepAliveMarginUtaUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5096) |  | PUT | `sapi/v2/margin/uta/listen-key?listenKey=${listenKey}` |
| [closeMarginUtaUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5100) |  | DELETE | `sapi/v2/margin/uta/listen-key` |
| [getMarginListenToken()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5108) | :closed_lock_with_key:  | POST | `sapi/v1/userListenToken` |
| [getBSwapLiquidity()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5130) | :closed_lock_with_key:  | GET | `sapi/v1/bswap/liquidity` |
| [addBSwapLiquidity()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5137) | :closed_lock_with_key:  | POST | `sapi/v1/bswap/liquidityAdd` |
| [removeBSwapLiquidity()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5146) | :closed_lock_with_key:  | POST | `sapi/v1/bswap/liquidityRemove` |
| [getBSwapOperations()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5155) | :closed_lock_with_key:  | GET | `sapi/v1/bswap/liquidityOps` |
| [getLeftDailyPurchaseQuotaFlexibleProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5170) | :closed_lock_with_key:  | GET | `sapi/v1/lending/daily/userLeftQuota` |
| [getLeftDailyRedemptionQuotaFlexibleProduct()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5179) | :closed_lock_with_key:  | GET | `sapi/v1/lending/daily/userRedemptionQuota` |
| [purchaseFixedAndActivityProject()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5193) | :closed_lock_with_key:  | POST | `sapi/v1/lending/customizedFixed/purchase` |
| [getFixedAndActivityProjects()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5203) | :closed_lock_with_key:  | GET | `sapi/v1/lending/project/list` |
| [getFixedAndActivityProductPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5212) | :closed_lock_with_key:  | GET | `sapi/v1/lending/project/position/list` |
| [getLendingAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5221) | :closed_lock_with_key:  | GET | `sapi/v1/lending/union/account` |
| [getPurchaseRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5228) | :closed_lock_with_key:  | GET | `sapi/v1/lending/union/purchaseRecord` |
| [getRedemptionRecord()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5235) | :closed_lock_with_key:  | GET | `sapi/v1/lending/union/redemptionRecord` |
| [getInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5242) | :closed_lock_with_key:  | GET | `sapi/v1/lending/union/interestHistory` |
| [changeFixedAndActivityPositionToDailyPosition()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5249) | :closed_lock_with_key:  | POST | `sapi/v1/lending/positionChanged` |
| [enableConvertSubAccount()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5266) | :closed_lock_with_key:  | POST | `sapi/v1/broker/subAccount/convert` |
| [convertBUSD()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5274) | :closed_lock_with_key:  | POST | `sapi/v1/asset/convert-transfer` |
| [getConvertBUSDHistory()](https://github.com/sieblyio/binance/blob/master/src/main-client.ts#L5281) | :closed_lock_with_key:  | GET | `sapi/v1/asset/convert-transfer/queryByPage` |

# usdm-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [usdm-client.ts](/src/usdm-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [testConnectivity()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L142) |  | GET | `fapi/v1/ping` |
| [getExchangeInfo()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L146) |  | GET | `fapi/v1/exchangeInfo` |
| [getOrderBook()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L150) |  | GET | `fapi/v1/depth` |
| [getRpiOrderBook()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L154) |  | GET | `fapi/v1/rpiDepth` |
| [getRecentTrades()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L161) |  | GET | `fapi/v1/trades` |
| [getHistoricalTrades()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L165) |  | GET | `fapi/v1/historicalTrades` |
| [getAggregateTrades()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L171) |  | GET | `fapi/v1/aggTrades` |
| [getKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L177) |  | GET | `fapi/v1/klines` |
| [getContinuousContractKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L181) |  | GET | `fapi/v1/continuousKlines` |
| [getIndexPriceKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L187) |  | GET | `fapi/v1/indexPriceKlines` |
| [getMarkPriceKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L191) |  | GET | `fapi/v1/markPriceKlines` |
| [getPremiumIndexKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L195) |  | GET | `fapi/v1/premiumIndexKlines` |
| [getMarkPrice()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L199) |  | GET | `fapi/v1/premiumIndex` |
| [getFundingRateHistory()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L207) |  | GET | `fapi/v1/fundingRate` |
| [getFundingRates()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L213) |  | GET | `fapi/v1/fundingInfo` |
| [get24hrChangeStatistics()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L217) |  | GET | `fapi/v1/ticker/24hr` |
| [getSymbolPriceTicker()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L227) |  | GET | `fapi/v1/ticker/price` |
| [getSymbolPriceTickerV2()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L237) |  | GET | `fapi/v2/ticker/price` |
| [getSymbolOrderBookTicker()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L247) |  | GET | `fapi/v1/ticker/bookTicker` |
| [getQuarterlyContractSettlementPrices()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L259) |  | GET | `futures/data/delivery-price` |
| [getOpenInterest()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L265) |  | GET | `fapi/v1/openInterest` |
| [getOpenInterestStatistics()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L269) |  | GET | `futures/data/openInterestHist` |
| [getTopTradersLongShortPositionRatio()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L275) |  | GET | `futures/data/topLongShortPositionRatio` |
| [getTopTradersLongShortAccountRatio()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L281) |  | GET | `futures/data/topLongShortAccountRatio` |
| [getGlobalLongShortAccountRatio()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L287) |  | GET | `futures/data/globalLongShortAccountRatio` |
| [getTakerBuySellVolume()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L293) |  | GET | `futures/data/takerlongshortRatio` |
| [getHistoricalBlvtNavKlines()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L297) |  | GET | `fapi/v1/lvtKlines` |
| [getCompositeSymbolIndex()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L301) |  | GET | `fapi/v1/indexInfo` |
| [getMultiAssetsModeAssetIndex()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L305) |  | GET | `fapi/v1/assetIndex` |
| [getBasis()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L312) |  | GET | `futures/data/basis` |
| [getIndexPriceConstituents()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L316) |  | GET | `fapi/v1/constituents` |
| [getInsuranceFundBalance()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L322) |  | GET | `fapi/v1/insuranceBalance` |
| [getTradingSchedule()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L328) |  | GET | `fapi/v1/tradingSchedule` |
| [submitNewOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L338) | :closed_lock_with_key:  | POST | `fapi/v1/order` |
| [submitMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L350) | :closed_lock_with_key:  | POST | `fapi/v1/batchOrders` |
| [modifyOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L379) | :closed_lock_with_key:  | PUT | `fapi/v1/order` |
| [modifyMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L385) | :closed_lock_with_key:  | PUT | `fapi/v1/batchOrders` |
| [getOrderModifyHistory()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L393) | :closed_lock_with_key:  | GET | `fapi/v1/orderAmendment` |
| [cancelOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L399) | :closed_lock_with_key:  | DELETE | `fapi/v1/order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L403) | :closed_lock_with_key:  | DELETE | `fapi/v1/batchOrders` |
| [cancelAllOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L423) | :closed_lock_with_key:  | DELETE | `fapi/v1/allOpenOrders` |
| [setCancelOrdersOnTimeout()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L430) | :closed_lock_with_key:  | POST | `fapi/v1/countdownCancelAll` |
| [getOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L436) | :closed_lock_with_key:  | GET | `fapi/v1/order` |
| [getAllOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L440) | :closed_lock_with_key:  | GET | `fapi/v1/allOrders` |
| [getAllOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L444) | :closed_lock_with_key:  | GET | `fapi/v1/openOrders` |
| [getCurrentOpenOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L448) | :closed_lock_with_key:  | GET | `fapi/v1/openOrder` |
| [getForceOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L452) | :closed_lock_with_key:  | GET | `fapi/v1/forceOrders` |
| [getAccountTrades()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L456) | :closed_lock_with_key:  | GET | `fapi/v1/userTrades` |
| [setMarginType()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L462) | :closed_lock_with_key:  | POST | `fapi/v1/marginType` |
| [setPositionMode()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L466) | :closed_lock_with_key:  | POST | `fapi/v1/positionSide/dual` |
| [setLeverage()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L476) | :closed_lock_with_key:  | POST | `fapi/v1/leverage` |
| [setMultiAssetsMode()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L480) | :closed_lock_with_key:  | POST | `fapi/v1/multiAssetsMargin` |
| [setIsolatedPositionMargin()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L486) | :closed_lock_with_key:  | POST | `fapi/v1/positionMargin` |
| [getPositions()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L496) | :closed_lock_with_key:  | GET | `fapi/v2/positionRisk` |
| [getPositionsV3()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L500) | :closed_lock_with_key:  | GET | `fapi/v3/positionRisk` |
| [getADLQuantileEstimation()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L504) | :closed_lock_with_key:  | GET | `fapi/v1/adlQuantile` |
| [getSymbolAdlRisk()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L508) |  | GET | `fapi/v1/symbolAdlRisk` |
| [getPositionMarginChangeHistory()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L518) | :closed_lock_with_key:  | GET | `fapi/v1/positionMargin/history` |
| [getBalanceV3()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L530) | :closed_lock_with_key:  | GET | `fapi/v3/balance` |
| [getBalance()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L538) | :closed_lock_with_key:  | GET | `fapi/v2/balance` |
| [getAccountInformationV3()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L542) | :closed_lock_with_key:  | GET | `fapi/v3/account` |
| [getAccountInformation()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L550) | :closed_lock_with_key:  | GET | `fapi/v2/account` |
| [getAccountCommissionRate()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L554) | :closed_lock_with_key:  | GET | `fapi/v1/commissionRate` |
| [getFuturesAccountConfig()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L560) | :closed_lock_with_key:  | GET | `fapi/v1/accountConfig` |
| [getFuturesSymbolConfig()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L564) | :closed_lock_with_key:  | GET | `fapi/v1/symbolConfig` |
| [getUserForceOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L568) | :closed_lock_with_key:  | GET | `fapi/v1/rateLimit/order` |
| [getNotionalAndLeverageBrackets()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L575) | :closed_lock_with_key:  | GET | `fapi/v1/leverageBracket` |
| [getMultiAssetsMode()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L581) | :closed_lock_with_key:  | GET | `fapi/v1/multiAssetsMargin` |
| [getCurrentPositionMode()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L585) | :closed_lock_with_key:  | GET | `fapi/v1/positionSide/dual` |
| [getIncomeHistory()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L593) | :closed_lock_with_key:  | GET | `fapi/v1/income` |
| [getApiQuantitativeRulesIndicators()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L597) | :closed_lock_with_key:  | GET | `fapi/v1/apiTradingStatus` |
| [getFuturesTransactionHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L608) | :closed_lock_with_key:  | GET | `fapi/v1/income/asyn` |
| [getFuturesTransactionHistoryDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L615) | :closed_lock_with_key:  | GET | `fapi/v1/income/asyn/id` |
| [getFuturesOrderHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L621) | :closed_lock_with_key:  | GET | `fapi/v1/order/asyn` |
| [getFuturesOrderHistoryDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L628) | :closed_lock_with_key:  | GET | `fapi/v1/order/asyn/id` |
| [getFuturesTradeHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L634) | :closed_lock_with_key:  | GET | `fapi/v1/trade/asyn` |
| [getFuturesTradeDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L641) | :closed_lock_with_key:  | GET | `fapi/v1/trade/asyn/id` |
| [setBNBBurnEnabled()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L647) | :closed_lock_with_key:  | POST | `fapi/v1/feeBurn` |
| [getBNBBurnStatus()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L653) | :closed_lock_with_key:  | GET | `fapi/v1/feeBurn` |
| [signTradFiPerpsAgreement()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L659) | :closed_lock_with_key:  | POST | `fapi/v1/stock/contract` |
| [testOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L663) | :closed_lock_with_key:  | POST | `fapi/v1/order/test` |
| [submitNewAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L675) | :closed_lock_with_key:  | POST | `fapi/v1/algoOrder` |
| [cancelAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L682) | :closed_lock_with_key:  | DELETE | `fapi/v1/algoOrder` |
| [cancelAllAlgoOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L688) | :closed_lock_with_key:  | DELETE | `fapi/v1/algoOpenOrders` |
| [getAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L694) | :closed_lock_with_key:  | GET | `fapi/v1/algoOrder` |
| [getOpenAlgoOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L700) | :closed_lock_with_key:  | GET | `fapi/v1/openAlgoOrders` |
| [getAllAlgoOrders()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L706) | :closed_lock_with_key:  | GET | `fapi/v1/allAlgoOrders` |
| [getAllConvertPairs()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L718) |  | GET | `fapi/v1/convert/exchangeInfo` |
| [submitConvertQuoteRequest()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L725) | :closed_lock_with_key:  | POST | `fapi/v1/convert/getQuote` |
| [acceptConvertQuote()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L731) | :closed_lock_with_key:  | POST | `fapi/v1/convert/acceptQuote` |
| [getConvertOrderStatus()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L739) | :closed_lock_with_key:  | GET | `fapi/v1/convert/orderStatus` |
| [getPortfolioMarginProAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L752) | :closed_lock_with_key:  | GET | `fapi/v1/pmAccountInfo` |
| [getBrokerIfNewFuturesUser()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L769) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/ifNewUser` |
| [setBrokerCustomIdForClient()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L782) | :closed_lock_with_key:  | POST | `fapi/v1/apiReferral/customization` |
| [getBrokerClientCustomIds()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L795) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/customization` |
| [getBrokerUserCustomId()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L812) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/userCustomization` |
| [getBrokerRebateDataOverview()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L821) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/overview` |
| [getBrokerUserTradeVolume()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L830) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/tradeVol` |
| [getBrokerRebateVolume()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L847) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/rebateVol` |
| [getBrokerTradeDetail()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L864) | :closed_lock_with_key:  | GET | `fapi/v1/apiReferral/traderSummary` |
| [getFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L886) |  | POST | `fapi/v1/listenKey` |
| [keepAliveFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L890) |  | PUT | `fapi/v1/listenKey` |
| [closeFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/usdm-client.ts#L894) |  | DELETE | `fapi/v1/listenKey` |

# coinm-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [coinm-client.ts](/src/coinm-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [testConnectivity()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L128) |  | GET | `dapi/v1/ping` |
| [getExchangeInfo()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L132) |  | GET | `dapi/v1/exchangeInfo` |
| [getOrderBook()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L136) |  | GET | `dapi/v1/depth` |
| [getRecentTrades()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L140) |  | GET | `dapi/v1/trades` |
| [getHistoricalTrades()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L144) |  | GET | `dapi/v1/historicalTrades` |
| [getAggregateTrades()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L150) |  | GET | `dapi/v1/aggTrades` |
| [getMarkPrice()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L159) |  | GET | `dapi/v1/premiumIndex` |
| [getFundingRateHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L163) |  | GET | `dapi/v1/fundingRate` |
| [getFundingRate()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L169) |  | GET | `dapi/v1/fundingInfo` |
| [getKlines()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L173) |  | GET | `dapi/v1/klines` |
| [getContinuousContractKlines()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L177) |  | GET | `dapi/v1/continuousKlines` |
| [getIndexPriceKlines()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L183) |  | GET | `dapi/v1/indexPriceKlines` |
| [getMarkPriceKlines()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L187) |  | GET | `dapi/v1/markPriceKlines` |
| [getPremiumIndexKlines()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L191) |  | GET | `dapi/v1/premiumIndexKlines` |
| [get24hrChangeStatistics()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L195) |  | GET | `dapi/v1/ticker/24hr` |
| [getSymbolPriceTicker()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L202) |  | GET | `dapi/v1/ticker/price` |
| [getSymbolOrderBookTicker()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L209) |  | GET | `dapi/v1/ticker/bookTicker` |
| [getOpenInterest()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L218) |  | GET | `dapi/v1/openInterest` |
| [getOpenInterestStatistics()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L222) |  | GET | `futures/data/openInterestHist` |
| [getTopTradersLongShortAccountRatio()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L226) |  | GET | `futures/data/topLongShortAccountRatio` |
| [getTopTradersLongShortPositionRatio()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L232) |  | GET | `futures/data/topLongShortPositionRatio` |
| [getGlobalLongShortAccountRatio()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L238) |  | GET | `futures/data/globalLongShortAccountRatio` |
| [getTakerBuySellVolume()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L244) |  | GET | `futures/data/takerBuySellVol` |
| [getCompositeSymbolIndex()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L250) |  | GET | `futures/data/basis` |
| [getIndexPriceConstituents()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L258) |  | GET | `dapi/v1/constituents` |
| [getQuarterlyContractSettlementPrices()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L268) |  | GET | `futures/data/delivery-price` |
| [submitNewOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L280) | :closed_lock_with_key:  | POST | `dapi/v1/order` |
| [submitMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L290) | :closed_lock_with_key:  | POST | `dapi/v1/batchOrders` |
| [modifyOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L307) | :closed_lock_with_key:  | PUT | `dapi/v1/order` |
| [modifyMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L316) | :closed_lock_with_key:  | PUT | `dapi/v1/batchOrders` |
| [getOrderModifyHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L329) | :closed_lock_with_key:  | GET | `dapi/v1/orderAmendment` |
| [cancelOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L335) | :closed_lock_with_key:  | DELETE | `dapi/v1/order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L339) | :closed_lock_with_key:  | DELETE | `dapi/v1/batchOrders` |
| [cancelAllOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L359) | :closed_lock_with_key:  | DELETE | `dapi/v1/allOpenOrders` |
| [setCancelOrdersOnTimeout()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L366) | :closed_lock_with_key:  | POST | `dapi/v1/countdownCancelAll` |
| [getOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L372) | :closed_lock_with_key:  | GET | `dapi/v1/order` |
| [getAllOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L376) | :closed_lock_with_key:  | GET | `dapi/v1/allOrders` |
| [getAllOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L380) | :closed_lock_with_key:  | GET | `dapi/v1/openOrders` |
| [getCurrentOpenOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L384) | :closed_lock_with_key:  | GET | `dapi/v1/openOrder` |
| [submitNewAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L395) | :closed_lock_with_key:  | POST | `dapi/v1/algoOrder` |
| [cancelAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L402) | :closed_lock_with_key:  | DELETE | `dapi/v1/algoOrder` |
| [getOpenAlgoOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L408) | :closed_lock_with_key:  | GET | `dapi/v1/openAlgoOrders` |
| [getForceOrders()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L414) | :closed_lock_with_key:  | GET | `dapi/v1/forceOrders` |
| [getAccountTrades()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L418) | :closed_lock_with_key:  | GET | `dapi/v1/userTrades` |
| [getPositions()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L424) | :closed_lock_with_key:  | GET | `dapi/v1/positionRisk` |
| [setPositionMode()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L431) | :closed_lock_with_key:  | POST | `dapi/v1/positionSide/dual` |
| [setMarginType()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L435) | :closed_lock_with_key:  | POST | `dapi/v1/marginType` |
| [setLeverage()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L439) | :closed_lock_with_key:  | POST | `dapi/v1/leverage` |
| [getADLQuantileEstimation()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L443) | :closed_lock_with_key:  | GET | `dapi/v1/adlQuantile` |
| [setIsolatedPositionMargin()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L447) | :closed_lock_with_key:  | POST | `dapi/v1/positionMargin` |
| [getPositionMarginChangeHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L453) | :closed_lock_with_key:  | GET | `dapi/v1/positionMargin/history` |
| [getBalance()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L464) | :closed_lock_with_key:  | GET | `dapi/v1/balance` |
| [getAccountCommissionRate()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L468) | :closed_lock_with_key:  | GET | `dapi/v1/commissionRate` |
| [getAccountInformation()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L474) | :closed_lock_with_key:  | GET | `dapi/v1/account` |
| [getNotionalAndLeverageBrackets()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L481) | :closed_lock_with_key:  | GET | `dapi/v2/leverageBracket` |
| [getCurrentPositionMode()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L490) | :closed_lock_with_key:  | GET | `dapi/v1/positionSide/dual` |
| [getIncomeHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L498) | :closed_lock_with_key:  | GET | `dapi/v1/income` |
| [getDownloadIdForFuturesTransactionHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L507) | :closed_lock_with_key:  | GET | `dapi/v1/income/asyn` |
| [getFuturesTransactionHistoryDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L517) | :closed_lock_with_key:  | GET | `dapi/v1/income/asyn/id` |
| [getDownloadIdForFuturesOrderHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L523) | :closed_lock_with_key:  | GET | `dapi/v1/order/asyn` |
| [getFuturesOrderHistoryDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L533) | :closed_lock_with_key:  | GET | `dapi/v1/order/asyn/id` |
| [getDownloadIdForFuturesTradeHistory()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L539) | :closed_lock_with_key:  | GET | `dapi/v1/trade/asyn` |
| [getFuturesTradeHistoryDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L549) | :closed_lock_with_key:  | GET | `dapi/v1/trade/asyn/id` |
| [getClassicPortfolioMarginAccount()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L561) | :closed_lock_with_key:  | GET | `dapi/v1/pmAccountInfo` |
| [getClassicPortfolioMarginNotionalLimits()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L570) | :closed_lock_with_key:  | GET | `dapi/v1/pmExchangeInfo` |
| [getBrokerIfNewFuturesUser()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L589) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/ifNewUser` |
| [setBrokerCustomIdForClient()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L602) | :closed_lock_with_key:  | POST | `dapi/v1/apiReferral/customization` |
| [getBrokerClientCustomIds()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L615) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/customization` |
| [getBrokerUserCustomId()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L632) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/userCustomization` |
| [getBrokerRebateDataOverview()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L641) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/overview` |
| [getBrokerUserTradeVolume()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L650) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/tradeVol` |
| [getBrokerRebateVolume()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L667) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/rebateVol` |
| [getBrokerTradeDetail()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L684) | :closed_lock_with_key:  | GET | `dapi/v1/apiReferral/traderSummary` |
| [getFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L704) |  | POST | `dapi/v1/listenKey` |
| [keepAliveFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L708) |  | PUT | `dapi/v1/listenKey` |
| [closeFuturesUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/coinm-client.ts#L712) |  | DELETE | `dapi/v1/listenKey` |

# portfolio-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [portfolio-client.ts](/src/portfolio-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [testConnectivity()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L167) |  | GET | `papi/v1/ping` |
| [signTradFiPerpsContract()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L171) | :closed_lock_with_key:  | POST | `papi/v1/um/stock/contract` |
| [submitNewUMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L181) | :closed_lock_with_key:  | POST | `papi/v1/um/order` |
| [submitNewUMConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L191) | :closed_lock_with_key:  | POST | `papi/v1/um/conditional/order` |
| [submitNewUMAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L198) | :closed_lock_with_key:  | POST | `papi/v1/um/algo/order` |
| [submitNewCMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L205) | :closed_lock_with_key:  | POST | `papi/v1/cm/order` |
| [submitNewCMConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L212) | :closed_lock_with_key:  | POST | `papi/v1/cm/conditional/order` |
| [submitNewMarginOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L219) | :closed_lock_with_key:  | POST | `papi/v1/margin/order` |
| [submitMarginLoan()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L226) | :closed_lock_with_key:  | POST | `papi/v1/marginLoan` |
| [submitMarginRepay()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L232) | :closed_lock_with_key:  | POST | `papi/v1/repayLoan` |
| [submitNewMarginOCO()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L238) | :closed_lock_with_key:  | POST | `papi/v1/margin/order/oco` |
| [cancelUMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L247) | :closed_lock_with_key:  | DELETE | `papi/v1/um/order` |
| [cancelAllUMOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L253) | :closed_lock_with_key:  | DELETE | `papi/v1/um/allOpenOrders` |
| [cancelUMConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L263) | :closed_lock_with_key:  | DELETE | `papi/v1/um/conditional/order` |
| [cancelUMAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L269) | :closed_lock_with_key:  | DELETE | `papi/v1/um/algo/order` |
| [cancelAllUMConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L278) | :closed_lock_with_key:  | DELETE | `papi/v1/um/conditional/allOpenOrders` |
| [cancelAllUMAlgoOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L285) | :closed_lock_with_key:  | DELETE | `papi/v1/um/algo/allOpenOrders` |
| [cancelCMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L291) | :closed_lock_with_key:  | DELETE | `papi/v1/cm/order` |
| [cancelAllCMOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L297) | :closed_lock_with_key:  | DELETE | `papi/v1/cm/allOpenOrders` |
| [cancelCMConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L304) | :closed_lock_with_key:  | DELETE | `papi/v1/cm/conditional/order` |
| [cancelAllCMConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L310) | :closed_lock_with_key:  | DELETE | `papi/v1/cm/conditional/allOpenOrders` |
| [cancelMarginOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L317) | :closed_lock_with_key:  | DELETE | `papi/v1/margin/order` |
| [cancelMarginOCO()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L323) | :closed_lock_with_key:  | DELETE | `papi/v1/margin/orderList` |
| [cancelAllMarginOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L329) | :closed_lock_with_key:  | DELETE | `papi/v1/margin/allOpenOrders` |
| [modifyUMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L335) | :closed_lock_with_key:  | PUT | `papi/v1/um/order` |
| [modifyCMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L341) | :closed_lock_with_key:  | PUT | `papi/v1/cm/order` |
| [getUMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L347) | :closed_lock_with_key:  | GET | `papi/v1/um/order` |
| [getAllUMOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L351) | :closed_lock_with_key:  | GET | `papi/v1/um/allOrders` |
| [getUMOpenOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L357) | :closed_lock_with_key:  | GET | `papi/v1/um/openOrder` |
| [getAllUMOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L363) | :closed_lock_with_key:  | GET | `papi/v1/um/openOrders` |
| [getAllUMConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L370) | :closed_lock_with_key:  | GET | `papi/v1/um/conditional/allOrders` |
| [getAllUMAlgoOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L376) | :closed_lock_with_key:  | GET | `papi/v1/um/algo/allAlgoOrders` |
| [getUMOpenConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L385) | :closed_lock_with_key:  | GET | `papi/v1/um/conditional/openOrders` |
| [getUMAlgoOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L391) | :closed_lock_with_key:  | GET | `papi/v1/um/algo/openAlgoOrders` |
| [getUMOpenConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L400) | :closed_lock_with_key:  | GET | `papi/v1/um/conditional/openOrder` |
| [getUMAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L406) | :closed_lock_with_key:  | GET | `papi/v1/um/algo/algoOrder` |
| [getUMConditionalOrderHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L415) | :closed_lock_with_key:  | GET | `papi/v1/um/conditional/orderHistory` |
| [getCMOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L421) | :closed_lock_with_key:  | GET | `papi/v1/cm/order` |
| [getAllCMOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L425) | :closed_lock_with_key:  | GET | `papi/v1/cm/allOrders` |
| [getCMOpenOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L431) | :closed_lock_with_key:  | GET | `papi/v1/cm/openOrder` |
| [getAllCMOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L437) | :closed_lock_with_key:  | GET | `papi/v1/cm/openOrders` |
| [getCMOpenConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L444) | :closed_lock_with_key:  | GET | `papi/v1/cm/conditional/openOrders` |
| [getCMOpenConditionalOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L450) | :closed_lock_with_key:  | GET | `papi/v1/cm/conditional/openOrder` |
| [getAllCMConditionalOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L458) | :closed_lock_with_key:  | GET | `papi/v1/cm/conditional/allOrders` |
| [getCMConditionalOrderHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L464) | :closed_lock_with_key:  | GET | `papi/v1/cm/conditional/orderHistory` |
| [getUMForceOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L470) | :closed_lock_with_key:  | GET | `papi/v1/um/forceOrders` |
| [getCMForceOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L476) | :closed_lock_with_key:  | GET | `papi/v1/cm/forceOrders` |
| [getUMOrderModificationHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L482) | :closed_lock_with_key:  | GET | `papi/v1/um/orderAmendment` |
| [getCMOrderModificationHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L488) | :closed_lock_with_key:  | GET | `papi/v1/cm/orderAmendment` |
| [getMarginForceOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L494) | :closed_lock_with_key:  | GET | `papi/v1/margin/forceOrders` |
| [getUMTrades()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L501) | :closed_lock_with_key:  | GET | `papi/v1/um/userTrades` |
| [getCMTrades()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L505) | :closed_lock_with_key:  | GET | `papi/v1/cm/userTrades` |
| [getUMADLQuantile()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L509) | :closed_lock_with_key:  | GET | `papi/v1/um/adlQuantile` |
| [getCMADLQuantile()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L518) | :closed_lock_with_key:  | GET | `papi/v1/cm/adlQuantile` |
| [toggleUMFeeBurn()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L527) | :closed_lock_with_key:  | POST | `papi/v1/um/feeBurn` |
| [getUMFeeBurnStatus()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L533) | :closed_lock_with_key:  | GET | `papi/v1/um/feeBurn` |
| [getMarginOrder()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L537) | :closed_lock_with_key:  | GET | `papi/v1/margin/order` |
| [getMarginOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L543) | :closed_lock_with_key:  | GET | `papi/v1/margin/openOrders` |
| [getAllMarginOrders()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L549) | :closed_lock_with_key:  | GET | `papi/v1/margin/allOrders` |
| [getMarginOCO()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L555) | :closed_lock_with_key:  | GET | `papi/v1/margin/orderList` |
| [getAllMarginOCO()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L561) | :closed_lock_with_key:  | GET | `papi/v1/margin/allOrderList` |
| [getMarginOpenOCO()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L567) | :closed_lock_with_key:  | GET | `papi/v1/margin/openOrderList` |
| [getMarginTrades()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L571) | :closed_lock_with_key:  | GET | `papi/v1/margin/myTrades` |
| [repayMarginDebt()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L577) | :closed_lock_with_key:  | POST | `papi/v1/margin/repay-debt` |
| [getBalance()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L589) | :closed_lock_with_key:  | GET | `papi/v1/balance` |
| [getAccountInfo()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L593) | :closed_lock_with_key:  | GET | `papi/v1/account` |
| [getMarginMaxBorrow()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L597) | :closed_lock_with_key:  | GET | `papi/v1/margin/maxBorrowable` |
| [getMarginMaxWithdraw()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L604) | :closed_lock_with_key:  | GET | `papi/v1/margin/maxWithdraw` |
| [getUMPosition()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L610) | :closed_lock_with_key:  | GET | `papi/v1/um/positionRisk` |
| [getCMPosition()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L614) | :closed_lock_with_key:  | GET | `papi/v1/cm/positionRisk` |
| [updateUMLeverage()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L627) | :closed_lock_with_key:  | POST | `papi/v1/um/leverage` |
| [updateCMLeverage()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L635) | :closed_lock_with_key:  | POST | `papi/v1/cm/leverage` |
| [updateUMPositionMode()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L643) | :closed_lock_with_key:  | POST | `papi/v1/um/positionSide/dual` |
| [updateCMPositionMode()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L652) | :closed_lock_with_key:  | POST | `papi/v1/cm/positionSide/dual` |
| [getUMPositionMode()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L661) | :closed_lock_with_key:  | GET | `papi/v1/um/positionSide/dual` |
| [getCMPositionMode()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L667) | :closed_lock_with_key:  | GET | `papi/v1/cm/positionSide/dual` |
| [getUMLeverageBrackets()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L673) | :closed_lock_with_key:  | GET | `papi/v1/um/leverageBracket` |
| [getCMLeverageBrackets()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L683) | :closed_lock_with_key:  | GET | `papi/v1/cm/leverageBracket` |
| [getUMTradingStatus()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L692) | :closed_lock_with_key:  | GET | `papi/v1/um/apiTradingStatus` |
| [getUMCommissionRate()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L698) | :closed_lock_with_key:  | GET | `papi/v1/um/commissionRate` |
| [getCMCommissionRate()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L706) | :closed_lock_with_key:  | GET | `papi/v1/cm/commissionRate` |
| [getMarginLoanRecords()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L714) | :closed_lock_with_key:  | GET | `papi/v1/margin/marginLoan` |
| [getMarginRepayRecords()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L721) | :closed_lock_with_key:  | GET | `papi/v1/margin/repayLoan` |
| [getAutoRepayFuturesStatus()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L728) | :closed_lock_with_key:  | GET | `papi/v1/repay-futures-switch` |
| [updateAutoRepayFuturesStatus()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L734) | :closed_lock_with_key:  | POST | `papi/v1/repay-futures-switch` |
| [getMarginInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L742) | :closed_lock_with_key:  | GET | `papi/v1/margin/marginInterestHistory` |
| [repayFuturesNegativeBalance()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L749) | :closed_lock_with_key:  | POST | `papi/v1/repay-futures-negative-balance` |
| [getPortfolioNegativeBalanceInterestHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L755) | :closed_lock_with_key:  | GET | `papi/v1/portfolio/interest-history` |
| [autoCollectFunds()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L761) | :closed_lock_with_key:  | POST | `papi/v1/auto-collection` |
| [transferAssetFuturesMargin()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L774) | :closed_lock_with_key:  | POST | `papi/v1/asset-collection` |
| [transferBNB()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L784) | :closed_lock_with_key:  | POST | `papi/v1/bnb-transfer` |
| [getUMIncomeHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L797) | :closed_lock_with_key:  | GET | `papi/v1/um/income` |
| [getCMIncomeHistory()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L807) | :closed_lock_with_key:  | GET | `papi/v1/cm/income` |
| [getUMAccount()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L813) | :closed_lock_with_key:  | GET | `papi/v1/um/account` |
| [getCMAccount()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L820) | :closed_lock_with_key:  | GET | `papi/v1/cm/account` |
| [getUMAccountConfig()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L827) | :closed_lock_with_key:  | GET | `papi/v1/um/accountConfig` |
| [getUMSymbolConfig()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L831) | :closed_lock_with_key:  | GET | `papi/v1/um/symbolConfig` |
| [getUMAccountV2()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L837) | :closed_lock_with_key:  | GET | `papi/v2/um/account` |
| [getUMTradeHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L844) | :closed_lock_with_key:  | GET | `papi/v1/um/trade/asyn` |
| [getUMTradeDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L854) | :closed_lock_with_key:  | GET | `papi/v1/um/trade/asyn/id` |
| [getUMOrderHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L860) | :closed_lock_with_key:  | GET | `papi/v1/um/order/asyn` |
| [getUMOrderDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L870) | :closed_lock_with_key:  | GET | `papi/v1/um/order/asyn/id` |
| [getUMTransactionHistoryDownloadId()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L876) | :closed_lock_with_key:  | GET | `papi/v1/um/income/asyn` |
| [getUMTransactionDownloadLink()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L886) | :closed_lock_with_key:  | GET | `papi/v1/um/income/asyn/id` |
| [getPMUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L925) |  | POST | `papi/v1/listenKey` |
| [keepAlivePMUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L929) |  | PUT | `papi/v1/listenKey` |
| [closePMUserDataListenKey()](https://github.com/sieblyio/binance/blob/master/src/portfolio-client.ts#L933) |  | DELETE | `papi/v1/listenKey` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Binance API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [disconnectAll()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L263) |  | WS | `ping` |
| [testSpotConnectivity()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L276) |  | WS | `ping` |
| [getSpotServerTime()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L288) |  | WS | `time` |
| [getSpotExchangeInfo()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L302) |  | WS | `exchangeInfo` |
| [getSpotOrderBook()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L324) |  | WS | `depth` |
| [getSpotRecentTrades()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L340) |  | WS | `trades.recent` |
| [getSpotHistoricalTrades()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L356) |  | WS | `trades.historical` |
| [getSpotHistoricalBlockTrades()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L371) |  | WS | `blockTrades.historical` |
| [getSpotAggregateTrades()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L387) |  | WS | `trades.aggregate` |
| [getSpotKlines()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L403) |  | WS | `klines` |
| [getSpotUIKlines()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L419) |  | WS | `uiKlines` |
| [getSpotAveragePrice()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L434) |  | WS | `avgPrice` |
| [getSpotExecutionRules()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L449) |  | WS | `executionRules` |
| [getSpotReferencePrice()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L464) |  | WS | `referencePrice` |
| [getSpotReferencePriceCalculation()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L479) |  | WS | `referencePrice.calculation` |
| [getSpot24hrTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L495) |  | WS | `ticker.24hr` |
| [getSpotTradingDayTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L514) |  | WS | `ticker.tradingDay` |
| [getSpotTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L534) |  | WS | `ticker` |
| [getSpotSymbolPriceTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L554) |  | WS | `ticker.price` |
| [getSpotSymbolOrderBookTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L570) |  | WS | `ticker.book` |
| [getSpotSessionStatus()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L590) |  | WS | `session.status` |
| [submitNewSpotOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L608) |  | WS | `order.place` |
| [testSpotOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L623) |  | WS | `order.test` |
| [getSpotOrderStatus()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L640) |  | WS | `order.status` |
| [cancelSpotOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L655) |  | WS | `order.cancel` |
| [cancelReplaceSpotOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L670) |  | WS | `order.cancelReplace` |
| [amendSpotOrderKeepPriority()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L686) |  | WS | `order.amend.keepPriority` |
| [getSpotOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L701) |  | WS | `openOrders.status` |
| [cancelAllSpotOpenOrders()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L716) |  | WS | `openOrders.cancelAll` |
| [placeSpotOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L733) |  | WS | `orderList.place` |
| [placeSpotOCOOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L748) |  | WS | `orderList.place.oco` |
| [placeSpotOTOOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L763) |  | WS | `orderList.place.oto` |
| [placeSpotOTOCOOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L778) |  | WS | `orderList.place.otoco` |
| [placeSpotOPOOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L793) |  | WS | `orderList.place.opo` |
| [placeSpotOPOCOOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L808) |  | WS | `orderList.place.opoco` |
| [getSpotOrderListStatus()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L823) |  | WS | `orderList.status` |
| [cancelSpotOrderList()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L838) |  | WS | `orderList.cancel` |
| [getSpotOpenOrderLists()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L853) |  | WS | `openOrderLists.status` |
| [placeSpotSOROrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L868) |  | WS | `sor.order.place` |
| [testSpotSOROrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L883) |  | WS | `sor.order.test` |
| [getSpotAccountInformation()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L908) |  | WS | `account.status` |
| [getSpotOrderRateLimits()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L923) |  | WS | `account.rateLimits.orders` |
| [getSpotAllOrders()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L938) |  | WS | `allOrders` |
| [getSpotAllOrderLists()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L953) |  | WS | `allOrderLists` |
| [getSpotMyTrades()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L968) |  | WS | `myTrades` |
| [getSpotPreventedMatches()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L983) |  | WS | `myPreventedMatches` |
| [getSpotAllocations()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L998) |  | WS | `myAllocations` |
| [getSpotAccountCommission()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1013) |  | WS | `account.commission` |
| [getFuturesOrderBook()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1034) |  | WS | `depth` |
| [getFuturesSymbolPriceTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1049) |  | WS | `ticker.price` |
| [getFuturesSymbolOrderBookTicker()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1066) |  | WS | `ticker.book` |
| [submitNewFuturesOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1088) |  | WS | `order.place` |
| [modifyFuturesOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1104) |  | WS | `order.modify` |
| [cancelFuturesOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1120) |  | WS | `order.cancel` |
| [getFuturesOrderStatus()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1136) |  | WS | `order.status` |
| [getFuturesPositionV2()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1151) |  | WS | `v2/account.position` |
| [getFuturesPosition()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1167) |  | WS | `account.position` |
| [submitNewFuturesAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1183) |  | WS | `algoOrder.place` |
| [cancelFuturesAlgoOrder()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1199) |  | WS | `algoOrder.cancel` |
| [getFuturesAccountBalanceV2()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1219) |  | WS | `v2/account.balance` |
| [getFuturesAccountBalance()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1235) |  | WS | `account.balance` |
| [getFuturesAccountStatusV2()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1250) |  | WS | `v2/account.status` |
| [getFuturesAccountStatus()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1266) |  | WS | `account.status` |
| [startUserDataStreamForKey()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1292) |  | WS | `userDataStream.start` |
| [pingUserDataStreamForKey()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1312) |  | WS | `userDataStream.ping` |
| [stopUserDataStreamForKey()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1326) |  | WS | `userDataStream.stop` |
| [subscribeUserDataStream()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1357) |  | WS | `userDataStream.unsubscribe` |
| [unsubscribeUserDataStream()](https://github.com/sieblyio/binance/blob/master/src/websocket-api-client.ts#L1482) |  | WS | `userDataStream.unsubscribe` |