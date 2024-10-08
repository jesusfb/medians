import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
//import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}



@Post()
@ApiCreatedResponse({ type: ArticleEntity })
create(@Body() createArticleDto: CreateArticleDto) {
  return this.articlesService.create(createArticleDto);
}

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('drafts')
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findOne(@Param('id') id: string) {
  return this.articlesService.findOne(+id);
}

@Delete(':id')
@ApiOkResponse({ type: ArticleEntity })
remove(@Param('id') id: string) {
  return this.articlesService.remove(+id);
}
}
