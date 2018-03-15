export class ServiceResponse {
  status: boolean;
  error: String;

  constructor(status: boolean, error: String) {
    this.status = status;
    this.error = error;
  }
}
