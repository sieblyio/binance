import {
  FuturesAlgoConditionalOrderTypes,
  FuturesAlgoOrderStatus,
  FuturesAlgoOrderType,
  FuturesContractType,
  FuturesOrderType,
  MarginType,
  PositionSide,
  PriceMatchMode,
  WorkingType,
} from '../futures';
import {
  KlineInterval,
  numberInString,
  OCOOrderStatus,
  OCOStatus,
  OrderBookRowFormatted,
  OrderExecutionType,
  OrderListContingencyType,
  OrderSide,
  OrderStatus,
  OrderTimeInForce,
  OrderType,
  SelfTradePreventionMode,
  SpotEffectiveSelfTradePreventionMode,
  SpotExpiryReason,
} from '../shared';
import {
  AccountUpdateEventType,
  FuturesMarketSymbolType,
} from './ws-events-raw';
import { WsSharedBase } from './ws-general';

export interface WsMessageKlineFormatted extends WsSharedBase {
  eventType: 'kline' | 'indexPrice_kline';
  eventTime: number;
  symbol: string;
  kline: {
    startTime: number;
    endTime: number;
    symbol: string;
    interval: KlineInterval;
    firstTradeId: number;
    lastTradeId: number;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    trades: number;
    final: boolean;
    quoteVolume: number;
    volumeActive: number;
    quoteVolumeActive: number;
    ignored: number;
  };
}

export interface WsMessageContinuousKlineFormatted extends WsSharedBase {
  eventType: 'continuous_kline';
  eventTime: number;
  symbol: string;
  contractType: FuturesContractType;
  kline: {
    startTime: number;
    endTime: number;
    symbol: string;
    interval: KlineInterval;
    firstTradeId: number;
    lastTradeId: number;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    trades: number;
    final: boolean;
    quoteVolume: number;
    volumeActive: number;
    quoteVolumeActive: number;
    ignored: number;
  };
}

export interface WsMessageAggTradeFormatted extends WsSharedBase {
  eventType: 'aggTrade';
  eventTime: number;
  symbol: string;
  tradeId: number;
  price: number;
  quantity: number;
  firstTradeId: number;
  lastTradeId: number;
  time: number;
  maker: boolean;
  ignored: boolean;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessageTradeFormatted extends WsSharedBase {
  eventType: 'trade';
  eventTime: number;
  symbol: string;
  tradeId: number;
  price: number;
  quantity: number;
  buyerOrderId: number;
  sellerOrderId: number;
  time: number;
  maker: boolean;
  ignored: boolean;
}

export interface WsMessageBlockTradeFormatted extends WsSharedBase {
  eventType: 'blockTrade';
  eventTime: number;
  symbol: string;
  tradeId: number;
  price: number;
  quantity: number;
  time: number;
  maker: boolean;
}

export interface WsMessage24hrMiniTickerFormatted extends WsSharedBase {
  eventType: '24hrMiniTicker';
  eventTime: number;
  symbol: string;
  contractSymbol?: string; //coinm only
  close: number;
  open: number;
  high: number;
  low: number;
  baseAssetVolume: number;
  quoteAssetVolume: number;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessage24hrTickerFormatted extends WsSharedBase {
  /**
   * @deprecated '!ticker@arr' stream has been deprecated by Binance (2025-11-14).
   * Will be retired on 2026-03-26.
   * Use '<symbol>@ticker' for single symbol or '!miniTicker@arr' for all symbols instead.
   */
  eventType: '24hrTicker' | '!ticker@arr';
  eventTime: number;
  symbol: string;
  priceChange: number;
  priceChangePercent: number;
  weightedAveragePrice: number;
  previousClose: number;
  currentClose: number;
  closeQuantity: number;
  bestBid: number;
  bestBidQuantity: number;
  bestAskPrice: number;
  bestAskQuantity: number;
  open: number;
  high: number;
  low: number;
  baseAssetVolume: number;
  quoteAssetVolume: number;
  openTime: number;
  closeTime: number;
  firstTradeId: number;
  lastTradeId: number;
  trades: number;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessageRollingWindowTickerFormatted extends WsSharedBase {
  eventType: 'ticker';
  eventTime: number;
  symbol: string;
  priceChange: number;
  priceChangePercent: number;
  weightedAveragePrice: number;
  open: number;
  high: number;
  low: number;
  currentClose: number;
  baseAssetVolume: number;
  quoteAssetVolume: number;
  openTime: number;
  closeTime: number;
  firstTradeId: number;
  lastTradeId: number;
  trades: number;
  streamName: string;
  isWSAPIResponse: false;
}

export interface WsMessageBookTickerEventFormatted extends WsSharedBase {
  eventType: 'bookTicker';
  updateId: number;
  eventTime: number;
  transactionTime: number;
  symbol: string;
  bidPrice: number;
  bidQty: number;
  askPrice: number;
  askQty: number;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessagePartialBookDepthEventFormatted extends WsSharedBase {
  eventType: 'partialBookDepth' | 'string';
  lastUpdateId: number;
  bids: OrderBookRowFormatted[];
  asks: OrderBookRowFormatted[];
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessageDiffBookDepthEventFormatted extends WsSharedBase {
  eventType: 'depthUpdate';
  eventTime: number;
  transactionTime: number; // futures only
  symbol: string;
  firstUpdateId: number;
  lastUpdateId: number;
  finalUpdateId: number; // futures only
  bidDepthDelta: { price: number; quantity: number }[];
  askDepthDelta: { price: number; quantity: number }[];
  symbolType?: FuturesMarketSymbolType;
}

/**
 * USER DATA WS EVENTS
 **/

interface SpotBalanceFormatted {
  asset: string;
  availableBalance: number;
  onOrderBalance: number;
}

export interface WsMessageSpotOutboundAccountPositionFormatted
  extends WsSharedBase {
  eventType: 'outboundAccountPosition';
  eventTime: number;
  lastAccountUpdateTime: number;
  balances: SpotBalanceFormatted[];
}

export interface WsMessageSpotBalanceUpdateFormatted extends WsSharedBase {
  eventType: 'balanceUpdate';
  eventTime: number;
  asset: string;
  balanceDelta: number;
  clearTime: number;
}

export interface WsMessageSpotUserDataExecutionReportEventFormatted
  extends WsSharedBase {
  eventType: 'executionReport';
  eventTime: number;
  symbol: string;
  newClientOrderId: string;
  side: OrderSide;
  orderType: OrderType;
  cancelType: OrderTimeInForce;
  quantity: number;
  price: number;
  stopPrice: number;
  icebergQuantity: number;
  orderListId: number;
  originalClientOrderId: string;
  executionType: OrderExecutionType;
  orderStatus: OrderStatus;
  rejectReason: string;
  orderId: number;
  lastTradeQuantity: number;
  accumulatedQuantity: number;
  lastTradePrice: number;
  commission: number;
  commissionAsset: string | null;
  tradeTime: number;
  tradeId: number;
  ignoreThis1: number;
  isOrderOnBook: boolean;
  isMaker: boolean;
  ignoreThis2: true;
  orderCreationTime: number;
  cummulativeQuoteAssetTransactedQty: number;
  lastQuoteAssetTransactedQty: number;
  orderQuoteQty: number;
  workingTime: number;
  selfTradePreventionMode: SelfTradePreventionMode;
  expiryReason?: SpotExpiryReason;
  /** Only present on prevented-match reports when the applied STP mode differs from the order's own selfTradePreventionMode. */
  effectiveSelfTradePreventionMode?: SpotEffectiveSelfTradePreventionMode;
  quoteNotionalLimit?: number;
  trailingDelta?: number;
  preventedMatchId?: number;
  trailingTime?: number;
  strategyId?: number;
  strategyType?: number;
  tradeGroupId?: number;
  counterOrderId?: number;
  /** Allocation ID. */
  allocationId?: number;
  preventedQuantity?: number;
  lastPreventedQuantity?: number;
  counterSymbol?: string;
  preventedExecutionQuantity?: number;
  preventedExecutionPrice?: number;
  preventedExecutionQuoteQty?: number;
}

export interface WsMessagePortfolioMarginProAccountUpdateFormatted
  extends WsSharedBase {
  eventType: 'PM_PRO_ACCOUNT_UPDATE';
  eventTime: number;
  uniMMR: number;
  accountEquity: number;
  actualEquity: number;
  initialMargin: number;
  maintenanceMargin: number;
  availableBalance: number;
  virtualMaxWithdraw: number;
}

export interface WsMessageWsapiServerShutdownFormatted extends WsSharedBase {
  eventType: 'serverShutdown';
  eventTime: number;
  /** Time when the WebSocket session will shut down. */
  shutdownTime?: number;
}

export interface OrderObjectFormatted {
  symbol: string;
  orderId: number;
  clientOrderId: string;
}

export interface WsMessageSpotUserDataListStatusEventFormatted
  extends WsSharedBase {
  eventType: 'listStatus';
  eventTime: number;
  symbol: string;
  orderListId: number;
  contingencyType: OrderListContingencyType;
  listStatusType: OCOStatus;
  listOrderStatus: OCOOrderStatus;
  listRejectReason: string;
  listClientOrderId: string;
  transactionTime: number;
  orders: OrderObjectFormatted[];
}

export interface WsMessageMarginLevelChangeFormatted extends WsSharedBase {
  eventType: 'marginLevelChange';
  eventTime: number;
  marginLevel: string;
  status: string;
}

export interface WsMessageMarginLiabilityChangeAssetFormatted {
  asset: string;
  principal: string;
  interest: string;
}

export interface WsMessageMarginLiabilityChangeFormatted extends WsSharedBase {
  eventType: 'liabilityChange';
  eventTime: number;
  type: string;
  asset?: string;
  transactionId?: number;
  principal?: string;
  interest?: string;
  totalLiability?: string;
  liabilities?: WsMessageMarginLiabilityChangeAssetFormatted[];
}

export interface WsAccountUpdatedBalance {
  asset: string;
  balanceChange: number; // this is except for pnl and commission
  crossWalletBalance: number;
  walletBalance: number;
}

export interface WsUpdatedPosition {
  symbol: string;
  marginAsset: string;
  positionAmount: number;
  entryPrice: number;
  accumulatedRealisedPreFee: number;
  unrealisedPnl: number;
  marginType: 'cross' | 'isolated';
  isolatedWalletAmount: number;
  positionSide: PositionSide;
}

export interface WsMessageFuturesUserDataListenKeyExpiredFormatted
  extends WsSharedBase {
  eventType: 'listenKeyExpired';
  eventTime: number;
}

export interface WsMessageFuturesMarginCalledPositionFormatted {
  symbol: string;
  positionSide: PositionSide;
  positionAmount: number;
  marginType: Uppercase<MarginType>;
  isolatedWalletAmount: number;
  markPrice: number;
  unrealisedPnl: number;
  maintenanceMarginRequired: number;
}

export interface WsMessageFuturesUserDataMarginCallFormatted
  extends WsSharedBase {
  eventType: 'MARGIN_CALL';
  eventTime: number;
  crossWalletBalance: number;
  positions: WsMessageFuturesMarginCalledPositionFormatted[];
}

export interface WsMessageFuturesUserDataAccountUpdateFormatted
  extends WsSharedBase {
  eventType: 'ACCOUNT_UPDATE';
  eventTime: number;
  transactionTime: number;
  updateData: {
    updateEventType: AccountUpdateEventType;
    symbol?: string; // only when updateEventType is FUNDING_FEE
    updatedBalances: WsAccountUpdatedBalance[];
    updatedPositions: WsUpdatedPosition[];
  };
}

export interface WsMessageFuturesUserDataCondOrderTriggerRejectEventFormatted
  extends WsSharedBase {
  eventType: 'CONDITIONAL_ORDER_TRIGGER_REJECT';
  eventTime: number;
  transactionTime: number;
  order: {
    symbol: string;
    orderId: number;
    reason: string;
  };
}

export interface WsMessageFuturesUserDataTradeLiteEventFormatted
  extends WsSharedBase {
  eventType: 'TRADE_LITE';
  eventTime: number;
  transactionTime: number;
  symbol: string;
  originalQuantity: number;
  originalPrice: number;
  isMakerSide: boolean;
  clientOrderId: string;
  side: 'BUY' | 'SELL';
  lastFilledPrice: number;
  lastFilledQuantity: number;
  tradeId: number;
  orderId: number;
}

export interface WsMessageFuturesUserDataTradeUpdateEventFormatted
  extends WsSharedBase {
  eventType: 'ORDER_TRADE_UPDATE';
  eventTime: number;
  transactionTime: number;
  order: {
    symbol: string;
    clientOrderId: string;
    orderSide: OrderSide;
    orderType: FuturesOrderType;
    timeInForce: OrderTimeInForce;
    originalQuantity: number;
    originalPrice: number;
    averagePrice: number;
    stopPrice: number;
    executionType: OrderExecutionType;
    orderStatus: OrderStatus;
    orderId: number;
    lastFilledQuantity: number;
    orderFilledAccumulatedQuantity: number;
    lastFilledPrice: number;
    commissionAsset: string;
    commissionAmount: number;
    orderTradeTime: number;
    tradeId: number;
    bidsNotional: number;
    asksNotional: number;
    isMakerTrade: boolean;
    isReduceOnly: boolean;
    stopPriceWorkingType: WorkingType;
    originalOrderType: FuturesOrderType;
    positionSide: PositionSide;
    isCloseAll: boolean;
    realisedProfit: number;
    trailingStopActivationPrice?: number;
    trailingStopCallbackRate?: number;
    orderExpireReason?: string; // Order expire reason
    modifyId?: string; // from modify request; only when executionType is AMENDMENT
    pP?: boolean; // ignore
    si?: number; // ignore
    ss?: number; // ignore
  };
}

export interface WsMessageFuturesUserDataAccountConfigUpdateEventFormatted
  extends WsSharedBase {
  eventType: 'ACCOUNT_CONFIG_UPDATE';
  eventTime: number;
  transactionTime: number;
  assetConfiguration?: {
    symbol: string;
    leverage: number;
  };
  accountConfiguration?: {
    isMultiAssetsMode: boolean;
  };
}

export interface WsMessageIndexPriceUpdateEventFormatted extends WsSharedBase {
  eventType: 'indexPriceUpdate';
  eventTime: number;
  symbol: string;
  indexPrice: number;
}

export interface WsMessageMarkPriceEventFormatted extends WsSharedBase {
  eventType: 'markPriceUpdate';
  eventTime: number;
  symbol: string;
  markPrice: number;
  /** Mark price moving average (USDⓈ-M). */
  markPriceMovingAverage?: number;
  settlePriceEstimate: number;
  indexPrice?: number; // undefined for coinm
  /** Note this is in decimal format (e.g. 0.0004 === 0.04%). Multiply by 100 to get funding rate percent value */
  fundingRate: number | '';
  nextFundingTime: number;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsLiquidationOrderFormatted {
  symbol: string;
  side: OrderSide;
  orderType: FuturesOrderType;
  timeInForce: OrderTimeInForce;
  quantity: number;
  price: number;
  averagePrice: number;
  orderStatus: OrderStatus;
  lastFilledQuantity: number;
  orderFilledAccumulatedQuantity: number;
  orderTradeTime: number;
}

export interface WsMessageForceOrderFormatted extends WsSharedBase {
  eventType: 'forceOrder';
  eventTime: number;
  liquidationOrder: WsLiquidationOrderFormatted;
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessageFuturesUserDataStrategyUpdateFormatted
  extends WsSharedBase {
  eventType: 'STRATEGY_UPDATE';
  transactionTime: number;
  eventTime: number;
  strategy: {
    strategyId: number;
    strategyType: string;
    strategyStatus: string;
    symbol: string;
    updateTime: number;
    opCode: number;
  };
}

export interface WsMessageFuturesUserDataGridUpdateFormatted
  extends WsSharedBase {
  eventType: 'GRID_UPDATE';
  transactionTime: number;
  eventTime: number;
  grid: {
    strategyId: number;
    strategyType: string;
    strategyStatus: string;
    symbol: string;
    realizedPnl: numberInString;
    unmatchedAveragePrice: numberInString;
    unmatchedQuantity: numberInString;
    unmatchedFee: numberInString;
    matchedPnl: numberInString;
    updateTime: number;
  };
}

export interface WsMessageFuturesUserDataContractInfoFormatted
  extends WsSharedBase {
  eventType: 'contractInfo';
  eventTime: number;
  symbol: string;
  pair: string;
  contractType: string;
  deliveryDateTime: number;
  onboardDateTime: number;
  contractStatus: string;
  notionalBrackets: {
    notionalBracket: number;
    floorNotional: number;
    capNotional: number;
    maintenanceRatio: number;
    auxiliaryNumber: number;
    minLeverage: number;
    maxLeverage: number;
  }[];
  symbolType?: FuturesMarketSymbolType;
}

export interface WsMessageFuturesUserDataAlgoUpdateFormatted
  extends WsSharedBase {
  eventType: 'ALGO_UPDATE';
  eventTime: number;
  transactionTime: number;
  algoOrder: {
    clientAlgoId: string;
    algoId: number;
    algoType: FuturesAlgoOrderType;
    orderType: FuturesAlgoConditionalOrderTypes;
    symbol: string;
    side: OrderSide;
    positionSide: PositionSide;
    timeInForce: OrderTimeInForce;
    quantity: numberInString;
    algoStatus: FuturesAlgoOrderStatus;
    orderId: string;
    averagePrice: numberInString;
    executedQty: numberInString;
    actualOrderType: numberInString; // TODO unsure if it's FuturesOrderType
    triggerPrice: numberInString;
    price: numberInString;
    selfTradePreventionMode: SelfTradePreventionMode;
    workingType: WorkingType;
    priceMatch: PriceMatchMode;
    closePosition: boolean;
    priceProtect: boolean;
    reduceOnly: boolean;
    triggerTime: number;
    goodTillDate: number;
    isActivated?: boolean; // trailing stop activation; placeholder, always false for now
    // As of 2026-08-21 this is fully active for trailing stop orders (false then true while status stays NEW).
  };
}

export type WsMessageSpotUserDataEventFormatted =
  | WsMessageSpotUserDataExecutionReportEventFormatted
  | WsMessageSpotOutboundAccountPositionFormatted
  | WsMessageSpotBalanceUpdateFormatted
  | WsMessageSpotUserDataListStatusEventFormatted;

export type WsMessageFuturesUserDataEventFormatted =
  | WsMessageFuturesUserDataAccountUpdateFormatted
  | WsMessageFuturesUserDataListenKeyExpiredFormatted
  | WsMessageFuturesUserDataMarginCallFormatted
  | WsMessageFuturesUserDataTradeUpdateEventFormatted
  | WsMessageFuturesUserDataAlgoUpdateFormatted
  | WsMessageFuturesUserDataAccountConfigUpdateEventFormatted
  | WsMessageFuturesUserDataCondOrderTriggerRejectEventFormatted
  | WsMessageFuturesUserDataTradeLiteEventFormatted
  | WsMessageFuturesUserDataStrategyUpdateFormatted
  | WsMessageFuturesUserDataGridUpdateFormatted
  | WsMessageFuturesUserDataContractInfoFormatted;

export type WsUserDataEvents =
  | WsMessageSpotUserDataEventFormatted
  | WsMessageFuturesUserDataEventFormatted
  | WsMessagePortfolioMarginProAccountUpdateFormatted
  | WsMessageMarginLevelChangeFormatted
  | WsMessageMarginLiabilityChangeFormatted;

export type WsFormattedMessage =
  | WsUserDataEvents
  | WsMessageWsapiServerShutdownFormatted
  | WsMessageKlineFormatted
  | WsMessageAggTradeFormatted
  | WsMessageTradeFormatted
  | WsMessageBlockTradeFormatted
  | WsMessage24hrMiniTickerFormatted
  | WsMessage24hrTickerFormatted
  | WsMessageBookTickerEventFormatted
  | WsMessagePartialBookDepthEventFormatted
  | WsMessageDiffBookDepthEventFormatted
  | WsMessageIndexPriceUpdateEventFormatted
  | WsMessageMarkPriceEventFormatted
  | WsMessageForceOrderFormatted
  | WsMessage24hrMiniTickerFormatted[]
  | WsMessage24hrTickerFormatted[]
  | WsMessageRollingWindowTickerFormatted[]
  | WsMessageMarkPriceEventFormatted[];
