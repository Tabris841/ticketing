import { Publisher, OrderCreatedEvent, Subjects } from '@agittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
