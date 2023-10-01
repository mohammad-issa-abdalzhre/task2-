import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma.service';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService,TaskService,PrismaService],
})
export class AppModule {}
