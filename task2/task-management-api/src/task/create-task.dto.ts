import { IsString, IsNotEmpty, IsDate, IsInt, Min, Max } from 'class-validator';

export class CreateTaskDto {
    title: string;
    description: string;
    dueDate: Date;
    @Min(0)
    @Max(5)
    priority: number;
  }



export class UpdateTaskDto {
    title?: string;
    description?: string;
    dueDate?: Date;
    @IsInt()
    @Min(0)
    @Max(5)
    priority?: number;
  }