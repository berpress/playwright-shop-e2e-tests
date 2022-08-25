import { Page } from '@playwright/test';
import { LoginPage } from './login/page';


export class UiClient {
  readonly page: Page;
  login: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.login = new LoginPage(page);
  }

  async openMainPage() {
    await this.page.goto('https://berpress.github.io/react-shop/');
  }
}