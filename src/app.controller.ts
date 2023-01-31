import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Screw } from './screw.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'A szerver fut a 3000-es porton.' };
  }

  @Get('/csavar')
  async listScrews() {
    const screwRepo = this.dataSource.getRepository(Screw);
    return {Screws: await screwRepo.find() };
  }

  @Post('/csavar')
  newScrew(@Body() data: Screw) {
    data.id = undefined;
    const screwRepo = this.dataSource.getRepository(Screw);
    screwRepo.save(data);
  }

  @Delete('/csavar/:id')
  deleteScrew(@Param('id') id: number) {
    const screwRepo = this.dataSource.getRepository(Screw);
    screwRepo.delete(id);
  }

  @Post('/csavar/:id/rendeles')
  newScrewByID(@Body() data: Screw, @Param('id') id: number) {
    const screwRepo = this.dataSource.getRepository(Screw);
    screwRepo.save(data);
  }
  
}
