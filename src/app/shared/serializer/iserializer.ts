import {ResourceInterface} from '../interfaces/resource.interface';

export abstract class ISerializer {
  // from json server to the front
  abstract fromJson(json: any): ResourceInterface;

  // construct json to send to the server
  abstract toJson(resource: ResourceInterface): any;
}
