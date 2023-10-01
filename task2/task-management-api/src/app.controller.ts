import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';

@Controller()
export class AppController {
  controllers = [TaskController]
}
