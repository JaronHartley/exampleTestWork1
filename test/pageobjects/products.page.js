import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {

   addToCartBtn(itemName) {
        return $(`//button[@data-test="add-to-cart-sauce-labs-${itemName}"]`)
    }
     get cart () {
        return $('//a[@data-test="shopping-cart-link"]')
     }
     get remove () {
        return $('//button[@class="btn btn_secondary btn_small cart_button"]')
     }

    async addToCart(itemName) {
        await this.addToCartBtn(itemName).click()   
    }
    async empty() {
        await this.cart.click()
        await this.remove.click()
    }
}

export default new Products()