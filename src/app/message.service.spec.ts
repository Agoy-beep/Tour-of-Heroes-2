// import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';
import {LoggerService} from "./logger.service";

/*describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});*/

fdescribe('MessageService', () => {
  let messageService: MessageService;
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = jasmine.createSpyObj('loggerService', ['log'])
    messageService = new MessageService(loggerService);
  });
  it('should log every time a clear button is clicked', () => {
    messageService.clear();

    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should log every message to the logger service', () =>{
    messageService.add('A test message');

    expect(loggerService.log).toHaveBeenCalledWith('A test message');
  });
  it('add should be empty after init', () => {
    expect(messageService.messages).toEqual([]);
  });
  it('add should save message', () => {
    messageService.add('A test message');

    expect(messageService.messages.length).toBe(1);
    expect(messageService.messages).toContain('A test message');
  });
  it('clear should empty message array', () => {
    messageService.clear();

    expect(messageService.messages).toEqual([]);
  });
});
