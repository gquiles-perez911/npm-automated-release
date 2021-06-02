import * as React from 'react';
import {render} from "@testing-library/react";
import App from "./index";

describe('Index', () => {
    it('my test', () => {
        const {getByText} = render(<App/>);
        expect(getByText(/Hello/)).not.toBeNull();
    })
})