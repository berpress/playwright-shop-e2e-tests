import { test, expect } from '../../../src/fixtures/client.fixture';
import { UiClient } from '../../../src/ui/pages/application';
import { LoginModelFactory } from '../../../src/models/login';
import ADD_REGISTRATION_SCHEMA from '../../../src/api/schemas/registration';

test.describe.serial('Add balance tests', () => {
  test('login new user', async ({ page, client }) => {
    const app = new UiClient(page);
    const data = new LoginModelFactory().create()
    const response = await client.register.register(data, ADD_REGISTRATION_SCHEMA);
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('User created successfully.');
    await app.openMainPage();
    await app.login.openLoginPage();
    await app.login.auth(data);
  });
});