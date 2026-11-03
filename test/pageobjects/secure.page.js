import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//span[@class="title"]');
    }
    get productAlert () {
        return $('//a[@aria-label="Cart, 1 items"]')
    }
}

export default new SecurePage();
