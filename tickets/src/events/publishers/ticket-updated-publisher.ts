import { Publisher, Subjects, TicketUpdatedEvent } from '@agittix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
