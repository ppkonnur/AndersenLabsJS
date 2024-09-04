import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class vikunjaHome extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedInUser () {
        return $('//span[@class="username"]');
    }

    
}

export default new vikunjaHome();
