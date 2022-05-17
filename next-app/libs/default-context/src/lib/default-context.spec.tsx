import { render } from '@testing-library/react';

import {DefaultContextProvider} from './default-context';

describe('DefaultContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultContextProvider />);
    expect(baseElement).toBeTruthy();
  });
});
