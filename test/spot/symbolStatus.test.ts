import { MainClient, WebsocketAPIClient } from '../../src/index';
import { WS_KEY_MAP } from '../../src/util/websockets/websocket-util';

describe.each(['TRADING', 'HALT', 'BREAK', 'CANCEL_ONLY', undefined] as const)(
  'Spot symbolStatus filter: %s',
  (symbolStatus) => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('forwards the REST execution rules filter', async () => {
      const client = new MainClient();
      const getSpy = jest.spyOn(client, 'get').mockResolvedValue({});

      await client.getExecutionRules({ symbolStatus });

      expect(getSpy).toHaveBeenCalledWith('api/v3/executionRules', {
        symbolStatus,
      });
    });

    it('forwards the REST reference price calculation filter', async () => {
      const client = new MainClient();
      const getSpy = jest.spyOn(client, 'get').mockResolvedValue({});
      const params = { symbol: 'BTCUSDT', symbolStatus };

      await client.getReferencePriceCalculation(params);

      expect(getSpy).toHaveBeenCalledWith(
        'api/v3/referencePrice/calculation',
        params,
      );
    });

    it('forwards the WebSocket execution rules filter without authentication', async () => {
      const client = new WebsocketAPIClient();
      const sendSpy = jest
        .spyOn(client.getWSClient(), 'sendWSAPIRequest')
        .mockResolvedValue({});

      await client.getSpotExecutionRules({ symbolStatus });

      expect(sendSpy).toHaveBeenCalledWith(
        WS_KEY_MAP.mainWSAPI,
        'executionRules',
        { symbolStatus },
        { authIsOptional: true },
      );
    });

    it('forwards the WebSocket reference price calculation filter without authentication', async () => {
      const client = new WebsocketAPIClient();
      const sendSpy = jest
        .spyOn(client.getWSClient(), 'sendWSAPIRequest')
        .mockResolvedValue({});
      const params = { symbol: 'BTCUSDT', symbolStatus };

      await client.getSpotReferencePriceCalculation(params);

      expect(sendSpy).toHaveBeenCalledWith(
        WS_KEY_MAP.mainWSAPI,
        'referencePrice.calculation',
        params,
        { authIsOptional: true },
      );
    });
  },
);
