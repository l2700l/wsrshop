export type header = {
  alive_time: number,
  private_time?: Date,
  public_time?: Date,
  address: string,
  balance: number,
  type: 'ETH' | 'CMON'
}