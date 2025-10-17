import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { css, customElement, html, LitElement } from "@umbraco-cms/backoffice/external/lit";

@customElement("example-dashboard")

export class ExampleDashboardElement extends UmbElementMixin(LitElement) {
    /**
     *
     */
    constructor() {
        super();
        console.log("Example Dashboard element constructed");
    }

    static styles = css`
        .example-dashboard {
            background-color: red;
            display: block
        }
    `;

    protected render() {
        return html`<div class="example-dashboard">Example Dashboard works!</div>`;
    }
}

export default ExampleDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        "example-dashboard": ExampleDashboardElement;
    }   
}