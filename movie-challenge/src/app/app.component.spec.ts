import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MoviesService } from './movies/components/services/movies.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  let apiService: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [MoviesService, { provide: HttpClient }, HttpHandler],
    });
    apiService = TestBed.inject(MoviesService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-challenge');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'movie-challenge app is running!'
    );
  });
});
