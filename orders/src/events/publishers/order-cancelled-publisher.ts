import { Subjects, Publisher, OrderCancelledEvent } from '@agittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
