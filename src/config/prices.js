/**
 * Single source of truth for prices, in euro.
 *
 * The shop reads these for display and the payment service reads the same
 * values to charge — nothing a browser sends is trusted. Keyed by product
 * name, which is what the cart stores.
 */
export const PRICES = {
  Blackbox: 399,
  Donager: 1150,
  TinyMen: 349.3,
  Aurora: 599,
};
