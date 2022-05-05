import { browser, logging } from 'protractor'

describe('Angular test', function() {
    it('title test', async () => {
        browser.get(browser.baseUrl)

        let expected = "Whatever"
        let actual = browser.getTitle()

        expect(actual).toEqual(expected)
    })

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER)
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry))
    })
})