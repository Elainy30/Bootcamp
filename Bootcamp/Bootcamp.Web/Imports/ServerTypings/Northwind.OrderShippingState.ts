namespace Bootcamp.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Bootcamp.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

