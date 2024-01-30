import {AbstractCrudService} from './crud.service';
import {ResourceInterface} from '../interfaces/resource.interface';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ISerializer} from '../serializer/iserializer';
import {environment} from '../../../environments/environment';
import {ResourceListInterface} from '../interfaces/resource-list.interface';

describe('CrudService', () => {
  let service: AbstractCrudService<ResourceInterface>;
  let httpController: HttpTestingController;

  class MockSerializer implements ISerializer {
    toJson(data: any): any {
      return data;
    }

    fromJson(data: any): any {
      return data;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AbstractCrudService, {provide: ISerializer, useClass: MockSerializer}]
    }).compileComponents()
    service = TestBed.inject(AbstractCrudService);
    httpController = TestBed.inject(HttpTestingController)
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  })

  afterEach(function () {
    httpController.verify();
  });

  it('Should send a POST request for create()', () => {
    const testData: ResourceInterface = {id: 1};
    service.create(testData).subscribe();

    const req = httpController.expectOne({
      method: 'POST',
      url: `${environment.urlApi}${service.endpoint}`
    });

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(testData);

    req.flush({});
  });

  it(' Should send a Get request for read()', () => {
    const testId = 1;
    service.read(testId).subscribe();

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.urlApi}${service.endpoint}/${testId}`
    });
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('Should send a Get request for list()', () => {
    service.list().subscribe();

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.urlApi}${service.endpoint}`
    });
    // test the right method && url
    expect(req.request.method).toBe('GET');
    // test the value
    req.flush([]);
  })

  it('Should send a Get request for list()', () => {
    const page = 3;
    const mockResponse: ResourceListInterface<ResourceInterface> = {
      datas: [{id: 1}],
      total: 1,
      limit: 30,
      skip: 0
    };
    // Make a request
    service.listPaginate(page).subscribe((result: ResourceListInterface<ResourceInterface>) => {
      expect(result).toEqual({...mockResponse, datas: jasmine.any(Array)});
    });

    // Capture the request and expect some value like method && url
    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.urlApi}${service.endpoint}?page=${page}`
    });
    // Test the right method && url
    expect(req.request.method).toBe('GET');
    // Test the value
    req.flush(mockResponse);
  })

  it('Should send a Get request for search()', () => {
    // mock data
    const page = 1;
    const infos = 'filter';
    const mockResponse: ResourceListInterface<ResourceInterface> = {
      datas: [{id: 1}],
      total: 1,
      limit: 30,
      skip: 0
    };

    // Make a request
    service.search(page, infos).subscribe((result: ResourceListInterface<ResourceInterface>) => {
      expect(result).toEqual({...mockResponse, datas: jasmine.any(Array)});
    });

    // Capture the request and expect some value like method && url
    const req = httpController.expectOne({
      method: 'POST',
      url: `${environment.urlApi}${service.endpoint}/search?page=${page}`
    });
    // Test the right method && url
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({infos});
    // Test the value
    req.flush(mockResponse);
  })

  it('Should send Delete request for delete()', () => {
    const id = 100000;
    service.delete(id).subscribe();

    // Catch the request && compare those
    const req = httpController.expectOne({
      url: `${environment.urlApi}${service.endpoint}/${id}`,
      method: 'DELETE'
    });
    expect(req.request.method).toBe('DELETE')

    req.flush({})
  })

  it('Should send a patch request for update()', () => {
    const testData: ResourceInterface = {id: 1};
    service.update(testData).subscribe();

    const req = httpController.expectOne({
      method: 'PATCH',
      url: `${environment.urlApi}${service.endpoint}/${testData.id}`
    });

    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(testData);

    req.flush(testData);
  });

  it('Should convert data using the serializer', () => {
    const mockData = [{id: 1, name: 'Hello world'}, {id: 2, name: 'Hello world 2'}];

    const convertData = service['convertData'](mockData);

    expect(convertData).toEqual(jasmine.any(Array));
    expect(convertData.length).toBe(2);
    expect(convertData[0]).toEqual(mockData[0]);
    expect(convertData[1]).toEqual(mockData[1]);
  })
})
