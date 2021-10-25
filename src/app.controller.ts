import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  // @Render('viewName')
  @Get()
  public index() {
    return;
  }
}
