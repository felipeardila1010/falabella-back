import {Body, Controller, Post} from '@nestjs/common';
import {SaveDataDto} from "./dto/save-data.dto";

@Controller('data')
export class AppController {
  constructor() {
  }

  @Post()
  async create(@Body() saveDataDto: SaveDataDto): Promise<object> {
    console.log('Request', saveDataDto);

    return {};
  }
}
