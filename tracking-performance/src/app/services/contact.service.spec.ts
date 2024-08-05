import { ContactService } from './contact.service';

describe('ContactService', () => {
  function setup() {
    const service = new ContactService();
    return {
      service
    };
  }

  it('should be created', () => {
    const { service } = setup();

    expect(service).toBeTruthy();
  });
});
