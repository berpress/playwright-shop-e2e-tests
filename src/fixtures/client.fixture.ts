import { test as base } from '@playwright/test';
import ApiClient from '../api/client';


export const test = base.extend<{ client: ApiClient }>({
  client: async ({ request }, use) => {
    const client = new ApiClient();
    await use(client);
  }
});

export { expect } from '@playwright/test';
