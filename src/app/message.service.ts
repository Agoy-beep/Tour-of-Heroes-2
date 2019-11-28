import {Injectable} from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
    this.loggerService.log(message);
  }
  clear() {
    this.messages = [];
    this.loggerService.log('messages cleared!');
  }
  constructor(private loggerService: LoggerService) { }
}
