export const selectCartModule = (state: any) => state.cart;

export const selectTicketAmount = (state: any, id: string) =>
  selectCartModule(state)[id] || 0;