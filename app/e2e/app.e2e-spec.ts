import {HomePage} from './app.po';

describe('web App', function () {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display main title', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Angular 2 with SDK');
    });
});
