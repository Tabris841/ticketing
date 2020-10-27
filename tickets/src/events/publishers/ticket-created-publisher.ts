import { Publisher, Subjects, TicketCreatedEvent } from '@agittix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
