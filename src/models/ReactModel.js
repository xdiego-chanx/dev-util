import { JSDOM } from "jsdom";
import sanitizeHtml from "sanitize-html";

export default class ReactModel {
    static sanitize(_dangerouslySetInnerHTML) {
        return sanitizeHtml(_dangerouslySetInnerHTML, {
            disallowedTagsMode: "escape"
        });
    }

    static parse(html) {
        const sanitized = this.sanitize(html);
        const DOM = new JSDOM(sanitized);
        return DOM.window.document;
    }
}