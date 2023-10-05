import { Injectable } from '@nestjs/common';
import { MessagingService as TFSMessagingService, IMessagingResponse } from '@thefirstspine/messaging';

/**
 * Nest service to interact with thr TFS messaging net service.
 */
@Injectable()
export class MessagingService {

  /**
   * Internal TFS service.
   */
  protected tfsMessagingService: TFSMessagingService;

  constructor() {
    this.tfsMessagingService = new TFSMessagingService();
  }

  /**
   * Sends a message in a subject to the clients connected to the service.
   * @param to The list of the users that will receive the message. `*` is for all users.
   * @param subject The subject concerned by the message.
   * @param message The message to send.
   */
  async sendMessage(to: number[]|'*', subject: string|'*', message: any): Promise<IMessagingResponse> {
    return this.tfsMessagingService.sendMessage(to, subject, message);
  }

}
