import React from 'react';
import { ApplicationMenuUtility } from '../../src/ApplicationUtility';
import MockConfig from '../../src/terra-dev-site/doc/common/MockConfig';

describe('ApplicationMenuUtility', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const initialSelectedKey = 'menu';
  const accessory = <image />;
  const title = 'name';

  it('should render with default props', () => {
    const wrapper = shallow(<ApplicationMenuUtility
      menuItems={[]}
      onChange={mockOnChange}
      onDisclose={mockOnDisclose}
      onRequestClose={mockOnRequestClose}
      initialSelectedKey={initialSelectedKey}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const wrapper = shallow(<ApplicationMenuUtility
      menuItems={[]}
      onChange={mockOnChange}
      onDisclose={mockOnDisclose}
      onRequestClose={mockOnRequestClose}
      initialSelectedKey={initialSelectedKey}
      title={title}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an accessory', () => {
    const wrapper = shallow(<ApplicationMenuUtility
      menuItems={[]}
      onChange={mockOnChange}
      onDisclose={mockOnDisclose}
      onRequestClose={mockOnRequestClose}
      initialSelectedKey={initialSelectedKey}
      accessory={accessory}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu items', () => {
    const wrapper = shallow(<ApplicationMenuUtility
      menuItems={MockConfig()}
      onChange={mockOnChange}
      onDisclose={mockOnDisclose}
      onRequestClose={mockOnRequestClose}
      initialSelectedKey={initialSelectedKey}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<ApplicationMenuUtility
      menuItems={[]}
      onChange={mockOnChange}
      onDisclose={mockOnDisclose}
      onRequestClose={mockOnRequestClose}
      initialSelectedKey={initialSelectedKey}
      id="test"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
