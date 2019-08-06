import React from 'react';
import App, { Link } from './App';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

/* first test */
// describe('<App />', () => {
//   it('should render App', () => {
//     const wrapper = shallow(<App />, {
//       context: {},
//       disableLifecycleMethods: bool
//     });
//     console.log(wrapper.debug());
//   });
// });

/* 
 Find nodes from a shallow rendered component
*/

// describe('<App />', () => {
//   const wrapper = shallow(<App />);

//   it('should have a list with three children', () => {
//     expect(wrapper.find('ul').children().length).toBe(3);
//   });

//   it('should have a list with a class of fred', () => {
//     expect(wrapper.find('ul').hasClass('fred')).toBe(true);
//   });

//   it('should have 1 p tag', () => {
//     expect(wrapper.find('p').length).toBe(1);
//   });

//   it('should have 1 p tag', () => {
//     expect(wrapper.find('p').exists()).toBe(true);
//   });

//   it('should have 1 p tag', () => {
//     expect(wrapper.find('.App-intro').exists()).toBe(true);
//   });

//   it('should have h1 with the text Welcome to React ', () => {
//     expect(wrapper.find('h1').text()).toBe('Welcome to React');
//   });
// });

// children()
// length
// find('SELECTOR')
// exists()
// hasClass('className')
// text()

/*
 Selectors
 */

//  CSS selectors
// props
// function
// objects

// describe('<App />', () => {
//   const wrapper = shallow(<App />);

//   it('should contain h1 with correct text', () => {
//     expect(wrapper.find('[text="Some title"]').text()).toBe('Some title');
//   });
// });

/* 
snapshots
*/

// describe('<App />', () => {

//   it('matches the snapshot', () => {
//     const tree = shallow(<App />)
//     expect(toJson(tree)).toMatchSnapshot()
//   });

// });

/*
Test React Component Props with Enzyme and Jest
*/

describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.props().href).toBe('www.google.com');
  });

  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull;
  });
});

/*
Fully render React Components with Enzyme
*/

describe('<App /> mount rendering', () => {
  it('matches the snapshot', () => {
    const tree = mount(<App />);
    expect(toJson(tree)).toMatchSnapshot();

    tree.unmount();
  });

  it('should have h1 with the text Welcome to React ', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
    wrapper.unmount();
  });
});

describe('<App /> shallow rendering', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('updates className with new State', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.blue').length).toBe(1);
    expect(wrapper.find('.red').length).toBe(0);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.red').length).toBe(1);
    expect(wrapper.find('.blue').length).toBe(0);
  });

  it('should have h1 with the text Welcome to React ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
  });

  it('on button click change p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });

  it('on input change, title changes text', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');

    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'Tyler' } });
    expect(wrapper.find('h2').text()).toBe('Tyler');
  });

  it('calls componentDidMount, updates P tag text', () => {
    jest.spyOn(App.prototype, 'componentDidMount');

    const wrapper = shallow(<App />);

    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toBe('componentDidMount');
  });

  it('setProps calls componentWillRecieveProps', () => {
    jest.spyOn(App.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<App />);
    wrapper.setProps({ hide: true });
    expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toBe('componentWillReceiveProps');
  });
});
