// tables/tables.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from './entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  async create(createTableDto: CreateTableDto) {
    const table = this.tableRepository.create(createTableDto);
    return this.tableRepository.save(table);
  }

  async findAll() {
    return this.tableRepository.find();
  }

  async findOne(id: number) {
    const table = await this.tableRepository.findOne({ where: { id } });
    if (!table) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
    return table;
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    const existingTable = await this.tableRepository.findOne({ where: { id } });
    if (!existingTable) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
    return this.tableRepository.save({
      ...existingTable,
      ...updateTableDto,
    });
  }

  async remove(id: number) {
    const table = await this.findOne(id);
    return this.tableRepository.remove(table);
  }
}
