// import { LitElement, customElement, html } from "lit-element";

// @customElement("app-component")
// export default class AppComponent extends LitElement {
//     render() {
//         return html` <h1>Hello, World!</h1> `;
//     }
// }

import "./styles.css"; // import the tailwind styles
import { LitElement, customElement, html } from "lit-element";

@customElement("app-component")
export default class AppComponent extends LitElement {
    createRenderRoot() {
        return this; // turn off shadow dom to access external styles
    }
    render() {
        return html`
            <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2">
                Hello, World!
            </h1>
        `; // use tailwind css utility classes
    }
}
