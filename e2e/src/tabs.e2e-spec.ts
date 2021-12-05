import { browser, element, by} from 'protractor';

describe('Mi prueba',()=>{
    //codgio de configuracion
    beforeEach(()=>{
        browser.get('/');

    });
    // Prueba 1
    it('El tab 1 se muestra',()=>{
        expect(element(by.css('.tab-selected ion-label')).getText()).toContain('Tab 1');
    });
});
