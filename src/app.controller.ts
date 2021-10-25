import { Controller, Get, Query, Body, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Render("example")
  @Get()
  public index() {
    return {
      example: "This is an example data."
    };
  }
}
