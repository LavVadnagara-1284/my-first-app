import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) { }

    // add book
    @Post("/add")
    addBook(): string {
        return this.bookService.addBook();
    }

    // delete book
    @Delete("/delete")
    deleteBook(): string {
        return this.bookService.deleteBook();
    }

    // update book
    @Put("/update")
    updateBook(): string {
        return this.bookService.updateBook();
    }

    // find all book
    @Get("/findall")
    findAllBooks(): string {
        return this.bookService.findBooks();
    }
}
