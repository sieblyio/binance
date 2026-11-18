import { MainClient } from '../../src/index';

describe('amendOrderKeepPriority()', () => {
  it('sends the request to the spot endpoint', async () => {
    const api = new MainClient({
      api_key: 'test-api-key',
      api_secret: 'test-api-secret',
    });
    const putPrivate = jest
      .spyOn(api, 'putPrivate')
      .mockResolvedValue({} as any);

    await api.amendOrderKeepPriority({
      symbol: 'BTCUSDT',
      orderId: 4000000024153137,
      newQty: '0.5',
    });

    expect(putPrivate).toHaveBeenCalledWith(
      'api/v3/order/amend/keepPriority',
      expect.objectContaining({
        symbol: 'BTCUSDT',
        orderId: 4000000024153137,
        newQty: '0.5',
      }),
    );
  });
});
