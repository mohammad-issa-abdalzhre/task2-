import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './create-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    createTaskDto.dueDate = new Date(createTaskDto.dueDate);
    console.log(createTaskDto)
    return this.prisma.task.create({ data: createTaskDto });
    
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async findAll(query) {
    // Implement filtering and pagination here
    return this.prisma.task.findMany();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    updateTaskDto.dueDate = new Date(updateTaskDto.dueDate);
    return this.prisma.task.update({ where: { id }, data: updateTaskDto });
  }

  async remove(id: number) {
    const taskToDelete = await this.prisma.task.findUnique({ where: { id } });
  
    if (!taskToDelete) {
      return { message: `Task with ID ${id} does not exist.` };
    }
  
    await this.prisma.task.delete({ where: { id } });
  
    return { message: `Task with ID ${id} has been deleted.` };
  }
}
