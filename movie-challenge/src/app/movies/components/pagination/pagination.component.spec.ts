import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { MoviesService } from '../services/movies.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let apiService: jasmine.SpyObj<MoviesService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [MoviesService, { provide: HttpClient }, HttpHandler],
    });
    apiService = TestBed.inject(MoviesService) as jasmine.SpyObj<MoviesService>;
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('llama a goProducts() al cambiar de página', () => {
    const pageNumber = 1;
    component.onClick(pageNumber);
    expect(apiService.goProducts).toHaveBeenCalled();
  });
});
