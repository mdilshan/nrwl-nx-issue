import { render } from '@testing-library/react';

import SmUiWeb from './sm-ui-web';

describe('SmUiWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmUiWeb />);
    expect(baseElement).toBeTruthy();
  });
});
